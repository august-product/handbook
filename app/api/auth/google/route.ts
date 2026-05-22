import { NextResponse } from "next/server";

export const runtime = "nodejs";

const XANO_GOOGLE_AUTH_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:handbook:Kshitiz_Branch/auth/google";

const ALLOWED_DOMAINS = ["augustcollections.com", "studloriolondon.com"];

type GoogleUserInfo = {
  email?: string;
  email_verified?: boolean | string;
  name?: string;
};

type XanoAuthResponse = {
  authToken?: string;
  token?: string;
  access_token?: string;
  user?: {
    id?: string | number;
    name?: string;
    email?: string;
    role?: string;
  };
  message?: string;
  error?: string;
};

export async function POST(request: Request) {
  let accessToken: string | undefined;
  try {
    const body = (await request.json()) as { accessToken?: string };
    accessToken = body.accessToken;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (!accessToken) {
    return NextResponse.json({ message: "Missing Google access token." }, { status: 400 });
  }

  const sharedSecret = process.env.HANDBOOK_GOOGLE_AUTH_SHARED_SECRET;
  if (!sharedSecret) {
    return NextResponse.json(
      { message: "Google sign-in is not configured. Please contact your administrator." },
      { status: 500 }
    );
  }

  // Verify the access token directly with Google.
  let userInfo: GoogleUserInfo;
  try {
    const infoRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!infoRes.ok) {
      return NextResponse.json(
        { message: "Could not verify your Google account. Please try again." },
        { status: 401 }
      );
    }
    userInfo = (await infoRes.json()) as GoogleUserInfo;
  } catch {
    return NextResponse.json(
      { message: "Could not reach Google to verify your account. Please try again." },
      { status: 502 }
    );
  }

  const emailVerified =
    userInfo.email_verified === true || userInfo.email_verified === "true";
  if (!userInfo.email || !emailVerified) {
    return NextResponse.json(
      { message: "Your Google email could not be verified." },
      { status: 403 }
    );
  }

  const email = userInfo.email.toLowerCase();
  const domain = email.split("@")[1] ?? "";
  if (!ALLOWED_DOMAINS.includes(domain)) {
    return NextResponse.json(
      { message: "Access restricted to August team members only." },
      { status: 403 }
    );
  }

  // Exchange the verified identity for a Handbook session via Xano.
  let xanoData: XanoAuthResponse;
  try {
    const xanoRes = await fetch(XANO_GOOGLE_AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name: userInfo.name ?? "",
        shared_secret: sharedSecret,
      }),
    });
    xanoData = (await xanoRes.json().catch(() => ({}))) as XanoAuthResponse;
    if (!xanoRes.ok) {
      const message =
        xanoData.message || xanoData.error || "Sign-in failed. Please try again.";
      return NextResponse.json({ message }, { status: xanoRes.status });
    }
  } catch {
    return NextResponse.json(
      { message: "Could not complete sign-in. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ authToken: xanoData.authToken, user: xanoData.user });
}
