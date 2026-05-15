import Link from "next/link";

const tocItems = [
  { label: "Purpose", anchor: "#purpose" },
  { label: "Scope", anchor: "#scope" },
  { label: "Account Management", anchor: "#account-management" },
  { label: "Password Policy", anchor: "#password-policy" },
  { label: "2FA + Multi-Factor Authentication (MFA)", anchor: "#mfa" },
  { label: "1Password — Password Manager", anchor: "#1password" },
  { label: "Single Sign-On (SSO)", anchor: "#sso" },
  { label: "Incident Response", anchor: "#incident-response" },
  { label: "Compliance & Enforcement", anchor: "#compliance" },
  { label: "Policy Review", anchor: "#policy-review" },
  { label: "Reference Links", anchor: "#references" },
];

function BackToTop() {
  return (
    <div className="flex justify-center pt-2">
      <a
        href="#top"
        className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:text-slate-500"
      >
        Back to top
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </a>
    </div>
  );
}

export default function AccountsSsoPasswordsPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section id="top" className="flex scroll-mt-24 flex-col items-center gap-3 px-6 pb-6 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/it-support" className="text-slate-400 transition hover:text-slate-600">IT &amp; SUPPORT</Link>
          &nbsp;/&nbsp;
          ACCOUNTS, SSO &amp; PASSWORDS
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Accounts, SSO &amp; Passwords
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Single sign-on setup, password management,
          <br />
          and account access.
        </p>
        <div className="mt-1 h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-10 px-6 pt-4 pb-16">
        {/* Table of Contents */}
        <nav className="rounded-2xl bg-[#eae6e1] px-6 py-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
            On This Page
          </p>
          <ul className="mt-2.5 columns-1 gap-x-8 sm:columns-2">
            {tocItems.map((item) => (
              <li key={item.anchor} className="py-[3px]">
                <a
                  href={item.anchor}
                  className="text-[13px] text-[#326354] transition hover:text-[#2a5044] sm:text-[14px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. Purpose */}
        <section id="purpose" className="scroll-mt-24 space-y-4">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 1
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Purpose
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            This policy establishes the rules and standards for managing user accounts, single sign-on (SSO), passwords, and multi-factor authentication (MFA) across all of August, RIO and associated companies.          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            The policy is designed to meet the requirements of the{" "}
            <a href="https://www.legislation.gov.uk/eur/2016/679/contents" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">UK General Data Protection Regulation (UK GDPR)</a>{" "}
            and the{" "}
            <a href="https://www.ncsc.gov.uk/files/cyber-essentials-requirements-for-it-infrastructure-v3-3.pdf" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Cyber Essentials</a>{" "}
            certification scheme, administered by the{" "}
            <a href="https://www.ncsc.gov.uk/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">National Cyber Security Centre (NCSC)</a>.
          </p>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 2. Scope */}
        <section id="scope" className="scroll-mt-24 space-y-4">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 2
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Scope
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">This policy covers:</p>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>All accounts associated within the <strong className="text-slate-700">@augustcollections</strong>, <strong className="text-slate-700">@studioriolondon</strong>, and <strong className="text-slate-700">NM Five</strong> <a href="https://workspace.google.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Google Workspace</a></li>
            <li>All third-party SaaS applications used for business purposes (e.g., PMS, booking platforms, HR, finance, communications)</li>
            <li>All password management via <a href="https://1password.com/product/teams-small-business-password-manager" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1Password Business</a></li>
            <li>All devices — company-owned and personal — that are used to access August, Studio RIO or NM Five data</li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 3. Account Management */}
        <section id="account-management" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 3
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Account Management
            </h2>
          </div>

          {/* 3.1 Onboarding */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <h3 className="text-[16px] font-semibold text-slate-800">3.1 Account Creation (Onboarding)</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">When a new staff member joins August, IT will:</p>
            <ol className="mt-2 list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>A Google Workspace account under <strong className="text-slate-700">@augustcollections.com</strong> or <strong className="text-slate-700">@studioriolondon.com</strong> will be created</li>
              <li>Provision a <a href="https://1password.com/product/teams-small-business-password-manager" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1Password Business</a> account, linked via SSO to their Google identity and access to shared 1Password vaults relevant to their role (see Section 6.3)</li>
              <li>Enforcement of MFA enrolment will be necessary to ensure secure access any systems (see Section 5). Any staff using personal accounts (e.g. personal Apple ID) will be in violation of their account and access may be revoked</li>
              <li>Staff members may/will be issues with a copy of this policy and require written acknowledgement</li>
            </ol>
          </div>

          {/* 3.2 Offboarding */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <h3 className="text-[16px] font-semibold text-slate-800">3.2 Account Deactivation (Offboarding)</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">When a staff member leaves August, RIO or if changes role:</p>
            <ol className="mt-2 list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>The @augustcollections.com or @studioriolondon.com account will be <strong className="text-slate-700">suspended immediately</strong> on the departure date</li>
              <li>Because SSO is enforced, suspension of the Google account will automatically revoke access to 1Password and all connected SaaS applications</li>
              <li>IT will review and rotate any shared credentials the departing user had access to</li>
              <li>The Google account will be permanently deleted after a 30-day holding period (to allow for data recovery if required)</li>
            </ol>
          </div>

          {/* 3.3 Access Reviews */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <h3 className="text-[16px] font-semibold text-slate-800">3.3 Access Reviews</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">IT will conduct a <strong className="text-slate-700">quarterly access review</strong> of all active accounts, verifying that:</p>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Every active account belongs to a current staff member</li>
              <li>Each user&apos;s access level is appropriate for their current role</li>
              <li>No orphaned or dormant accounts exist</li>
              <li>Shared/service accounts are documented and have assigned owners</li>
            </ul>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 4. Password Policy */}
        <section id="password-policy" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 4
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Password Policy
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            This policy follows the{" "}
            <a href="https://www.ncsc.gov.uk/collection/passwords" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">NCSC password guidance</a>, which represents the UK Government&apos;s official position on secure password practices.
          </p>

          {/* 4.1 Requirements Table */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">4.1 Password Requirements</h3>
            <div className="overflow-x-auto rounded-2xl bg-[#eae6e1]">
              <table className="w-full text-left text-[13px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-[#d9d4ce]">
                    <th className="px-5 py-3 font-semibold text-slate-800">Requirement</th>
                    <th className="px-5 py-3 font-semibold text-slate-800">Standard</th>
                  </tr>
                </thead>
                <tbody className="text-slate-500">
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3">Minimum length</td>
                    <td className="px-5 py-3"><strong className="text-slate-700">12 characters</strong></td>
                  </tr>
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3">Complexity rules</td>
                    <td className="px-5 py-3"><strong className="text-slate-700">Required</strong> — special characters and mixed case</td>
                  </tr>
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3">Recommended method</td>
                    <td className="px-5 py-3"><a href="https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/three-random-words" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Three random words</a></td>
                  </tr>
                  <tr className="border-b border-[#d9d4ce]">
                    <td className="px-5 py-3">Mandatory rotation</td>
                    <td className="px-5 py-3"><strong className="text-slate-700">No</strong> — only on suspected compromise</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">Common password blocking</td>
                    <td className="px-5 py-3"><strong className="text-slate-700">Enforced</strong> via Google + 1Password</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl bg-[#eae6e1] px-7 py-6">
            <p className="text-[14px] leading-[1.8] text-slate-500">
              <strong className="text-slate-700">Why complexity rules:</strong> Passwords must include special characters and mixed case (uppercase and lowercase) to increase entropy and resist brute-force attacks. Combined with a minimum length of 12 characters, this provides a strong baseline for all accounts.
            </p>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              <strong className="text-slate-700">Why no forced rotation:</strong> The NCSC advises against mandatory rotation because it encourages users to make small, predictable changes. Passwords should only be changed when there is evidence or suspicion of compromise.
            </p>
          </div>

          {/* 4.2 Brute-Force Protection */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">4.2 Brute-Force Protection</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">August and RIO implement protection using at least one of:</p>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Lock the account after <strong className="text-slate-700">no more than 10 unsuccessful login attempts</strong></li>
              <li>Throttle login attempts to a <strong className="text-slate-700">maximum of 10 within any 5-minute window</strong></li>
            </ul>
            <p className="text-[14px] leading-[1.8] text-slate-500">NB. Google Workspace applies this natively. Third-party applications must be verified by IT to confirm equivalent protections. <a href="https://support.google.com/accounts/answer/32040?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Read more</a> information here on passwords.</p>
          </div>

          {/* 4.3 Prohibited Practices */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">4.3 Prohibited Practices</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Storing passwords in spreadsheets, documents, email, or chat messages</li>
              <li>Writing passwords on sticky notes or paper left at workstations</li>
              <li>Sharing passwords verbally or via any unencrypted channel</li>
              <li>Saving work passwords in browser password managers</li>
              <li>Using the same password for multiple work systems</li>
              <li>Using work passwords for personal accounts</li>
              <li>Any accounts found to violate these practices, may have access temporarily revoked</li>
            </ul>
          </div>

          {/* 4.4 Google Workspace Password Policy */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">4.4 Google Workspace Password Policy</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">Your Google Workspace password must meet the following requirements:</p>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li><strong className="text-slate-700">Length:</strong> Between 12 and 100 characters</li>
              <li><strong className="text-slate-700">Strength:</strong> Must include uppercase, lowercase, numbers, and symbols</li>
              <li><strong className="text-slate-700">Expiration:</strong> Your password will expire every 180 days. When it expires, you&apos;ll receive a prompt to create a new strong password</li>
              <li><strong className="text-slate-700">Reuse:</strong> You cannot reuse old passwords</li>
            </ul>
          </div>

          {/* 4.5 When your password expires */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <h3 className="text-[16px] font-semibold text-slate-800">4.5 When your password expires</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
              Google Workspace will notify you 30 days before your password expires. You&apos;ll see a pop-up alert in Gmail, Calendar, and other Google services. Click the alert to change your password, or wait until the expiration date — you&apos;ll be required to set a new one at your next sign-in.
            </p>
          </div>

          {/* 4.6 If you forget your password */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <h3 className="text-[16px] font-semibold text-slate-800">4.6 If you forget your password</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
              Use the recovery options at the Google login screen (email or phone), or contact your IT administrator.
            </p>
          </div>

          {/* 4.7 Password manager */}
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <h3 className="text-[16px] font-semibold text-slate-800">4.7 Password manager</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
              Use your <a href="https://1password.com/product/teams-small-business-password-manager" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1Password</a> account to generate and store a strong, unique password. Never reuse passwords across services.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 5. MFA */}
        <section id="mfa" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 5
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Multi-Factor Authentication (MFA)
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Multi-factor authentication is <strong className="text-slate-700">mandatory for all staff</strong>.
          </p>

          {/* 5.1 Enforcement */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">5.1 Enforcement via Google Workspace</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              MFA (referred to by Google as <a href="https://support.google.com/accounts/answer/10956730?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">&ldquo;2-Step Verification&rdquo;</a>) is enforced organisation-wide in the{" "}
              <a href="https://support.google.com/a/answer/9176657?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Google Admin Console</a>:
            </p>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li><strong className="text-slate-700">Enforcement:</strong> ON — all @augustcollections.com and @studioriolondon.com users</li>
              <li><strong className="text-slate-700">Grace period for new users:</strong> None — MFA must be set up at first login</li>
              <li><strong className="text-slate-700">Allowed methods:</strong> Google Authenticator (TOTP), Passkeys, or Google Prompt</li>
            </ul>
            <p className="text-[14px] leading-[1.8] text-slate-500">Because Google Workspace is August&apos;s identity provider and SSO is enabled, MFA at the Google level protects access to all downstream systems.</p>
          </div>

          {/* 5.2 Google Authenticator Setup */}
          <div className="space-y-4">
            <h3 className="text-[16px] font-semibold text-slate-800">5.2 Setting Up Google Authenticator</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              All staff are required to set up{" "}
              <a href="https://support.google.com/accounts/answer/1066447?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Google Authenticator</a>{" "}
              (or equivalent TOTP app) as their primary or backup MFA method.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">Step 1</p>
                <h4 className="mt-1 text-[14px] font-semibold text-slate-800">Install Google Authenticator</h4>
                <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">Download from the <a href="https://apps.apple.com/us/app/google-authenticator/id388497605" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">App Store (iPhone)</a> or <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Google Play Store (Android)</a>.</p>
              </div>
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">Step 2</p>
                <h4 className="mt-1 text-[14px] font-semibold text-slate-800">Open your Google Account</h4>
                <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">Visit <a href="https://myaccount.google.com" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">myaccount.google.com</a> and sign in with your work email, then click <strong className="text-slate-700">Security</strong> in the left-hand navigation.</p>
              </div>
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">Step 3</p>
                <h4 className="mt-1 text-[14px] font-semibold text-slate-800">Find 2-Step Verification</h4>
                <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">Under &ldquo;How you sign in to Google,&rdquo; click <strong className="text-slate-700">2-Step Verification</strong> → <strong className="text-slate-700">Get Started</strong>, then choose <strong className="text-slate-700">Authenticator app</strong> → <strong className="text-slate-700">Set up authenticator</strong>.</p>
              </div>
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">Step 4</p>
                <h4 className="mt-1 text-[14px] font-semibold text-slate-800">Scan the QR Code</h4>
                <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">Open the Authenticator app, tap + → Scan a QR code, and point your camera at the code on screen.</p>
              </div>
              <div className="rounded-2xl bg-[#eae6e1] px-6 py-5 sm:col-span-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">Step 5</p>
                <h4 className="mt-1 text-[14px] font-semibold text-slate-800">Verify, Turn On &amp; Backup</h4>
                <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">Enter the 6-digit code to verify and click <strong className="text-slate-700">Turn On</strong>. Then generate backup codes and save them in your 1Password vault.</p>
              </div>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
              <p className="text-[14px] font-semibold text-slate-800">Important for international staff</p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
                <li>Google Authenticator works entirely offline — no UK phone number, mobile data, or SMS required.</li>
                <li>If you change phones, use the built-in <strong className="text-slate-700">Transfer accounts</strong> feature before wiping the old device.</li>
                <li>If you lose your phone, contact IT immediately. <span className="underline">This is why backup codes in 1Password are essential.</span></li>
              </ul>
            </div>
          </div>

          {/* Keeping your account secure */}
          <div className="space-y-4 pt-4">
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Keeping your account secure
            </h2>
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              More answers to Frequently Asked Questions (FAQ) for 2FA, Google Authenticator and MFA is available below.
            </p>

            <details className="group rounded-2xl bg-[#eae6e1] px-7 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[14px] font-semibold text-slate-800">
                <span>MFA / 2FA - FAQ</span>
                <svg
                  className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>

              <div className="mt-6 space-y-8">
                {/* What changes day-to-day */}
                <div className="space-y-3">
                  <h3 className="text-[16px] font-semibold text-slate-800">What changes day-to-day</h3>
                  <p className="text-[14px] leading-[1.8] text-slate-500">Very little. Logging in works the same way, with one extra step.</p>
                  <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
                    <li>Enter your email and password as usual</li>
                    <li>A notification appears on your phone — tap <strong className="text-slate-700">Yes, it&apos;s me</strong></li>
                    <li>You&apos;re in, usually in under ten seconds</li>
                  </ul>
                  <p className="text-[14px] leading-[1.8] text-slate-500">
                    On trusted devices like your own laptop, Google will remember you and won&apos;t ask every time.
                  </p>
                  <p className="text-[14px] leading-[1.8] text-slate-500">
                    If you receive a 2-Step prompt that you didn&apos;t trigger, tap <strong className="text-slate-700">No</strong> and change your password immediately — it means someone has your credentials and is attempting to sign in. Let your manager know straight away so we can act quickly.
                  </p>
                </div>

                {/* Shared email addresses */}
                <div className="space-y-3">
                  <h3 className="text-[16px] font-semibold text-slate-800">A note on shared email addresses</h3>
                  <p className="text-[14px] leading-[1.8] text-slate-500">
                    Addresses like <strong className="text-slate-700">info@</strong>, <strong className="text-slate-700">hello@</strong>, or <strong className="text-slate-700">reservations@</strong> are fine for receiving email — but they should never be used to log in to any platform: Google Ads, Meta, booking systems, or anything else. That&apos;s exactly how the recent breach happened.
                  </p>
                  <p className="text-[14px] leading-[1.8] text-slate-500">
                    If you currently use a shared address to access any platform, please speak to your manager this week. We&apos;re converting these to distribution lists so they can continue receiving mail but can no longer be used as login credentials anywhere.
                  </p>
                </div>

                {/* FAQs */}
                <div className="space-y-3">
                  <h3 className="text-[16px] font-semibold text-slate-800">A few questions we&apos;ve been asked</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[14px] font-semibold text-slate-700">What if I don&apos;t have a smartphone?</p>
                      <p className="mt-1 text-[14px] leading-[1.8] text-slate-500">
                        You can receive a text message or phone call to a backup number instead. Set this up under <strong className="text-slate-700">Security → 2-Step Verification → Add backup option → Phone number</strong>.
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-slate-700">What if I&apos;m travelling without mobile data?</p>
                      <p className="mt-1 text-[14px] leading-[1.8] text-slate-500">
                        Download a set of backup codes before you travel: <strong className="text-slate-700">Security → 2-Step Verification → Backup codes → Download</strong>. Keep them somewhere safe — each code works once only.
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-slate-700">I&apos;ve been locked out — what do I do?</p>
                      <p className="mt-1 text-[14px] leading-[1.8] text-slate-500">
                        Contact your manager straight away. Our administrator can issue a temporary override via the Google Workspace console. Please don&apos;t create a new account in the meantime.
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-slate-700">Is this really mandatory?</p>
                      <p className="mt-1 text-[14px] leading-[1.8] text-slate-500">
                        It is. After the two-week window, Google will require anyone who hasn&apos;t completed setup to do so before they can sign in. We&apos;d much rather everyone is set up before that point — it genuinely takes only a few minutes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ready to set up */}
                <div className="rounded-2xl bg-white px-7 py-6">
                  <p className="text-[14px] font-semibold text-slate-800">Ready to set up?</p>
                  <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
                    Visit your Google Account security settings and follow the five steps above. It takes about three minutes and you won&apos;t need to think about it again.
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.8] text-slate-500">
                    <a href="https://myaccount.google.com" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Go to myaccount.google.com →</a>
                  </p>
                  <p className="mt-1 text-[14px] leading-[1.8] text-slate-500">
                    <a href="https://support.google.com/accounts/answer/1066447?hl=en&ref_topic=7189195&sjid=17517382906637192272-EU&co=GENIE.Platform%3DiOS&oco=0" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Download &amp; use Google Authenticator (Google Help) →</a>
                  </p>
                </div>
              </div>
            </details>
          </div>

          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 6. 1Password */}
        <section id="1password" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 6
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              1Password — Password Manager
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            All August staff must use{" "}
            <a href="https://1password.com/product/teams-small-business-password-manager" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1Password Business</a>{" "}
            to generate, store, and fill work credentials. No other password storage method is permitted.
          </p>

          {/* 6.1 SSO */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">6.1 SSO Integration with Google Workspace</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              1Password is configured with{" "}
              <a href="https://support.1password.com/sso/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Unlock with SSO</a>{" "}
              using Google Workspace as the identity provider:
            </p>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Staff sign in using their @augustcollections.com Google credentials</li>
              <li>MFA enforced at the Google level carries through to 1Password</li>
              <li>When a Google account is suspended, 1Password access is automatically revoked</li>
              <li>Staff do not need to remember a separate master password</li>
            </ul>
          </div>

          {/* 6.2 Using 1Password */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">6.2 Using 1Password</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>The <a href="https://chromewebstore.google.com/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1Password browser extension</a> must be installed on all work browsers</li>
              <li>When creating new accounts, use 1Password&apos;s password generator (minimum 20 characters, random)</li>
              <li>Never copy passwords into messages, documents, or emails — always use autofill</li>
              <li>If autofill is unavailable, use 1Password&apos;s copy function and paste directly</li>
            </ul>
          </div>

          {/* 6.3 Vault Structure */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">6.3 Vault Structure</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">Vaults are organised by department. Staff are granted access only to vaults relevant to their role:</p>
            <div className="overflow-x-auto rounded-2xl bg-[#eae6e1]">
              <table className="w-full text-left text-[13px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-[#d9d4ce]">
                    <th className="px-5 py-3 font-semibold text-slate-800">Vault</th>
                    <th className="px-5 py-3 font-semibold text-slate-800">Access</th>
                  </tr>
                </thead>
                <tbody className="text-slate-500">
                  <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3 font-semibold text-slate-700">Business Admin</td><td className="px-5 py-3">Business administration and operations</td></tr>
                  <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3 font-semibold text-slate-700">Finance</td><td className="px-5 py-3">Finance team and authorised C-Suite</td></tr>
                  <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3 font-semibold text-slate-700">Homeowners</td><td className="px-5 py-3">Homeowner relations and property management</td></tr>
                  <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3 font-semibold text-slate-700">Legal</td><td className="px-5 py-3">Legal team and compliance</td></tr>
                  <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3 font-semibold text-slate-700">Marketing</td><td className="px-5 py-3">Marketing and communications team</td></tr>
                  <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3 font-semibold text-slate-700">Products</td><td className="px-5 py-3">Product development and management</td></tr>
                  <tr><td className="px-5 py-3 font-semibold text-slate-700">Sales</td><td className="px-5 py-3">Sales team and business development</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] leading-[1.7] text-slate-400">Vault access is reviewed quarterly. Requests for additional vault access must be submitted to IT with line manager approval.</p>
          </div>

          {/* 6.4 Watchtower */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">6.4 Watchtower Monitoring</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">
              <a href="https://watchtower.1password.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1Password Watchtower</a> continuously monitors stored credentials for:
            </p>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Passwords that have appeared in known data breaches</li>
              <li>Weak or reused passwords</li>
              <li>Websites where MFA is available but not enabled</li>
              <li>Expiring items (e.g., certificates, API keys)</li>
            </ul>
            <p className="text-[14px] leading-[1.8] text-slate-500">IT will run a <strong className="text-slate-700">monthly Watchtower report</strong>. Staff whose credentials are flagged must update them within <strong className="text-slate-700">5 working days</strong>.</p>
          </div>

          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 7. SSO */}
        <section id="sso" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 7
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Single Sign-On (SSO)
            </h2>
          </div>

          {/* 7.1 */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">7.1 Google Workspace as Identity Provider</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">Google Workspace is August&apos;s <strong className="text-slate-700">sole identity provider (IdP)</strong>. All SaaS applications must be connected via SAML or OIDC SSO wherever supported.</p>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Staff authenticate once and gain access to all connected applications</li>
              <li>MFA enforcement at the Google level protects all downstream applications</li>
              <li>Offboarding requires disabling a single account to revoke all access</li>
              <li>IT maintains a central audit trail of authentication events</li>
            </ul>
          </div>

          {/* 7.2 */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">7.2 Third-Party Application Access</h3>
            <p className="text-[14px] leading-[1.8] text-slate-500">IT manages third-party app access via <a href="https://support.google.com/a/answer/7281227?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">OAuth app access control</a> in Admin Console:</p>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>Only <strong className="text-slate-700">IT-approved applications</strong> may request access to Google Workspace data</li>
              <li>Staff must not grant OAuth access to unapproved applications</li>
              <li className="text-[#c53030]">IT reviews connected third-party apps <strong>quarterly</strong> and will revoke access when necessary, with or without warning.</li>
              <li>New SaaS tools must be submitted to IT for security review before being granted OAuth access</li>
            </ul>
          </div>

          {/* 7.3 */}
          <div className="space-y-3">
            <h3 className="text-[16px] font-semibold text-slate-800">7.3 Applications That Do Not Support SSO</h3>
            <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li>A unique, strong password must be generated using 1Password (minimum 20 characters)</li>
              <li>The credential must be stored in the appropriate 1Password vault</li>
              <li>MFA must be enabled on the application if available</li>
              <li>IT will maintain a register of non-SSO applications and prioritise migrating to SSO-compatible alternatives</li>
            </ul>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 8. Incident Response */}
        <section id="incident-response" className="scroll-mt-24 space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 8
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Incident Response
            </h2>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <h3 className="text-[16px] font-semibold text-slate-800">8.1 Suspected Account Compromise</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">If any staff member suspects their account has been compromised:</p>
            <ol className="mt-2 list-inside list-decimal space-y-1.5 text-[14px] leading-[1.7] text-slate-500">
              <li><strong className="text-slate-700">Immediately</strong> contact IT via Slack, phone, or in person</li>
              <li><strong className="text-slate-700">Do not</strong> attempt to investigate or fix the issue themselves</li>
              <li>IT will suspend the account, force a password reset, revoke active sessions, and review audit logs</li>
              <li>A new MFA method may be required if the existing one is suspected to be compromised</li>
            </ol>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <h3 className="text-[16px] font-semibold text-slate-800">8.2 Reporting Obligations</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500">
              Under{" "}
              <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/a-guide-to-data-security/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">UK GDPR Article 33</a>, if a breach involves personal data and poses a risk to individuals, August must report it to the{" "}
              <a href="https://ico.org.uk/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Information Commissioner&apos;s Office (ICO)</a>{" "}
              within <strong className="text-slate-700">72 hours</strong>. IT will lead this process with support from the Data Protection lead.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 9. Compliance */}
        <section id="compliance" className="scroll-mt-24 space-y-4">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 9
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Compliance &amp; Enforcement
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">This policy supports August Collections&apos; obligations under:</p>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li><a href="https://www.legislation.gov.uk/eur/2016/679/contents" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong className="text-slate-700">UK GDPR</strong></a> — Article 32 requires &ldquo;appropriate technical and organisational measures&rdquo; to protect personal data</li>
            <li><a href="https://www.legislation.gov.uk/ukpga/2018/12/contents" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong className="text-slate-700">Data Protection Act 2018</strong></a> — the UK&apos;s implementation of GDPR</li>
            <li><a href="https://www.ncsc.gov.uk/files/cyber-essentials-requirements-for-it-infrastructure-v3-3.pdf" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]"><strong className="text-slate-700">Cyber Essentials</strong></a> — specifically the &ldquo;User Access Control&rdquo; and &ldquo;Secure Configuration&rdquo; requirements</li>
          </ul>
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <p className="text-[14px] font-semibold leading-[1.8] text-[#c53030]">
              Non-compliance with this policy may result in disciplinary action, up to and including termination of employment. This applies to all staff.
            </p>
          </div>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* 10. Policy Review */}
        <section id="policy-review" className="scroll-mt-24 space-y-4">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              SECTION 10
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Policy Review
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">This policy will be reviewed as needed if or when:</p>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            <li>There is a security incident involving accounts or credentials</li>
            <li>Cyber Essentials requirements are updated</li>
            <li>UK GDPR guidance changes</li>
            <li>A significant change to IT infrastructure for August, Studio RIO, Anam, or NM Five occurs (e.g., change of identity provider)</li>
          </ul>
          <BackToTop />
        </section>

        <hr className="border-slate-200" />

        {/* Reference Links */}
        <section id="references" className="scroll-mt-24 space-y-4">
          <div className="space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
              RESOURCES
            </p>
            <h2
              className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Reference Links
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl bg-[#eae6e1]">
            <table className="w-full text-left text-[13px] sm:text-[14px]">
              <thead>
                <tr className="border-b border-[#d9d4ce]">
                  <th className="px-5 py-3 font-semibold text-slate-800">Resource</th>
                  <th className="px-5 py-3 font-semibold text-slate-800">Link</th>
                </tr>
              </thead>
              <tbody className="text-slate-500">
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">NCSC Cyber Essentials (v3.3)</td><td className="px-5 py-3"><a href="https://www.ncsc.gov.uk/files/cyber-essentials-requirements-for-it-infrastructure-v3-3.pdf" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">ncsc.gov.uk</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">NCSC Password Guidance</td><td className="px-5 py-3"><a href="https://www.ncsc.gov.uk/collection/passwords" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">ncsc.gov.uk</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">NCSC Three Random Words</td><td className="px-5 py-3"><a href="https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/three-random-words" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">ncsc.gov.uk</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">NCSC MFA Guidance</td><td className="px-5 py-3"><a href="https://www.ncsc.gov.uk/collection/mfa-for-your-corporate-online-services" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">ncsc.gov.uk</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">Google: Enforce 2-Step Verification</td><td className="px-5 py-3"><a href="https://support.google.com/a/answer/9176657?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">support.google.com</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">Google: Password Policy</td><td className="px-5 py-3"><a href="https://support.google.com/a/answer/139399?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">support.google.com</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">Google Authenticator Setup</td><td className="px-5 py-3"><a href="https://support.google.com/accounts/answer/1066447?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">support.google.com</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">Google: Third-Party App Access</td><td className="px-5 py-3"><a href="https://support.google.com/a/answer/7281227?hl=en" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">support.google.com</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">1Password Business</td><td className="px-5 py-3"><a href="https://1password.com/product/teams-small-business-password-manager" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">1password.com</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">1Password: Unlock with SSO</td><td className="px-5 py-3"><a href="https://support.1password.com/sso/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">support.1password.com</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">1Password Watchtower</td><td className="px-5 py-3"><a href="https://watchtower.1password.com/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">watchtower.1password.com</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">1Password Chrome Extension</td><td className="px-5 py-3"><a href="https://chromewebstore.google.com/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">Chrome Web Store</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">ICO: Guide to Data Security</td><td className="px-5 py-3"><a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/a-guide-to-data-security/" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">ico.org.uk</a></td></tr>
                <tr className="border-b border-[#d9d4ce]"><td className="px-5 py-3">UK GDPR (Legislation)</td><td className="px-5 py-3"><a href="https://www.legislation.gov.uk/eur/2016/679/contents" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">legislation.gov.uk</a></td></tr>
                <tr><td className="px-5 py-3">Data Protection Act 2018</td><td className="px-5 py-3"><a href="https://www.legislation.gov.uk/ukpga/2018/12/contents" target="_blank" rel="noreferrer" className="text-[#326354] transition hover:text-[#2a5044]">legislation.gov.uk</a></td></tr>
              </tbody>
            </table>
          </div>
          <BackToTop />
        </section>

        {/* Footer */}
        <p className="text-center text-[12px] italic text-slate-400">
          Policy Version: 1.0 | Effective: 23 March 2026 | Next Review: 23 September 2026
        </p>
      </div>
    </div>
  );
}
