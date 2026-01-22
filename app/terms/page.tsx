import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-[900px] bg-[#f4f0ec] px-4 py-12 text-slate-800">
      <div className="mx-auto max-w-4xl space-y-10 rounded-3xl border border-emerald-900/10 bg-white/90 p-8 shadow-xl ring-1 ring-black/5">
        <header className="space-y-2 border-b border-emerald-900/10 pb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#316354]">
                Terms &amp; Conditions
              </p>
              <p className="text-sm text-gray-600">
                <strong>Effective date:</strong> 18 December 2025
              </p>
              <p className="text-sm text-gray-700">
                This notice explains how <strong>August Collections</strong> (“
                <strong>we</strong>”, “<strong>us</strong>”, “<strong>our</strong>”)
                uses personal data when staff (employees, contractors, and temporary
                workers) access and use the{" "}
                <strong>
                  <a
                    href="https://handbook.augustcollections.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#2f7f5f] underline underline-offset-4"
                  >
                    August Collections Handbook
                  </a>{" "}
                  (“Portal”)
                </strong>
                .
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7dfd4] bg-white text-[#2f7f5f] shadow-sm transition hover:bg-[#f3f7f4] hover:text-[#26483f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7f5f]"
              aria-label="Close Terms and Conditions"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                ×
              </span>
            </Link>
          </div>
        </header>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">This notice covers</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            This notice applies to personal data processed through the Portal and
            related systems (for example: identity management, single sign-on,
            multi-factor authentication, access controls, audit logging, and
            security monitoring). It does not replace other internal or HR privacy
            notices that apply to broader employment/engagement processing.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Personal data we process
          </h2>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">
              A. Account and identity data
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Name, username/user ID, staff/contractor ID</li>
              <li>
                Work email address, work phone number (if used for account recovery
                or multi-factor authentication)
              </li>
              <li>
                Department/team, job title, location (work site), and other role
                attributes needed for access control
              </li>
              <li>Roles/permissions, group memberships, access approvals</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">
              B. Authentication and security data
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Login timestamps and authentication events (successful/failed attempts)</li>
              <li>
                Multi-factor authentication status and method (e.g., authenticator
                enabled; phone number if SMS is used)
              </li>
              <li>Password reset and account recovery events</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">
              C. Portal usage and technical data
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>IP address, device and browser information, operating system</li>
              <li>
                Session identifiers and <strong>strictly necessary</strong> cookies
                used to keep you signed in and secure the Portal
              </li>
              <li>
                Activity/audit logs showing which areas of the Portal were accessed
                and actions taken (where needed for security, access governance,
                and compliance)
              </li>
              <li>Error logs and diagnostic data (to maintain and troubleshoot the Portal)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">
              D. Support and communications
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Support tickets, requests, and messages submitted through the Portal</li>
              <li>
                Communications relating to access issues, security incidents, or
                Portal changes
              </li>
            </ul>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            How we use your data (purposes)
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-700">
            <li>
              <strong>Authenticate you and provide access</strong> (including MFA and
              account recovery).
            </li>
            <li>
              <strong>Administer accounts and permissions</strong> (role-based access,
              approvals, provisioning/deprovisioning).
            </li>
            <li>
              <strong>Protect security and prevent misuse</strong> (detect suspicious
              activity, investigate incidents, enforce security policies).
            </li>
            <li>
              <strong>Operate and improve the Portal</strong> (maintenance,
              troubleshooting, service quality).
            </li>
            <li>
              <strong>Audit, compliance, and governance</strong> (access logging,
              internal controls, responding to legal/regulatory requests).
            </li>
            <li>
              <strong>Business continuity</strong> (backup, disaster recovery, and
              continuity testing).
            </li>
          </ol>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Legal bases (UK GDPR / EU GDPR)
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              <strong>Performance of a contract</strong> (e.g., providing staff
              systems/services required for your role).
            </li>
            <li>
              <strong>Legal obligation</strong> (e.g., record-keeping or security
              obligations where applicable).
            </li>
            <li>
              <strong>Legitimate interests</strong> (e.g., operating a secure staff
              portal, preventing fraud/misuse, protecting company and client data,
              ensuring system integrity).
            </li>
            <li>
              <strong>Consent</strong> (only where genuinely optional; if we rely on
              consent, we will explain this at the point of collection and you can
              withdraw it).
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Monitoring and audit logging
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            The Portal generates logs to keep systems secure, manage access, comply
            with policies, and investigate incidents. Access to logs is restricted on
            a <strong>need-to-know</strong> basis. Monitoring is designed to be{" "}
            <strong>proportionate</strong> to security and compliance risks.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Who we share data with
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              Relevant internal teams (e.g., IT, security, compliance, internal
              audit) and, where applicable, our group companies
            </li>
            <li>
              Service providers acting on our instructions (e.g., hosting/cloud
              services, identity/SSO/MFA providers, managed IT/security providers,
              help desk tools)
            </li>
            <li>Professional advisers (e.g., legal, auditors) where necessary</li>
            <li>
              Authorities (e.g., regulators or law enforcement) where we are legally
              required or permitted to do so
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-700">
            We require service providers to protect personal data and to use it only
            to provide services to us.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            International transfers (UK, EEA and U.S.)
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Because we operate across the UK and the EEA and may use service
            providers in the U.S., your data may be accessed, stored, or otherwise
            processed in the <strong>UK, EEA, and/or the United States</strong>.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            Where international transfer rules apply, we use appropriate safeguards,
            such as:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              <strong>Adequacy decisions/regulations</strong> where available (meaning
              the relevant authority has recognised a jurisdiction as providing an
              adequate level of data protection).
            </li>
            <li>
              <strong>Standard Contractual Clauses (SCCs)</strong> for transfers from
              the EEA to recipients outside the EEA, together with any required risk
              assessments and supplementary measures.
            </li>
            <li>
              The UK’s <strong>International Data Transfer Agreement (IDTA)</strong>{" "}
              and/or the <strong>UK Addendum</strong> to the EU SCCs for restricted
              transfers from the UK, together with any required risk assessments and
              supplementary measures.
            </li>
            <li>
              The <strong>EU–U.S. Data Privacy Framework</strong> and the{" "}
              <strong>UK Extension/UK–U.S. data bridge</strong> where the U.S.
              recipient is appropriately certified and listed.
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-700">
            We keep these arrangements under review and will update our safeguards if
            transfer requirements change.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            How long we keep data
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We keep Portal data only as long as needed for the purposes in this
            notice. Typical retention may include:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              <strong>Account and permissions data:</strong> for the period you have
              access, plus 12 months, as necessary
            </li>
            <li>
              <strong>Security and audit logs:</strong> typically 12 months (and
              longer if needed for investigations or legal claims)
            </li>
            <li>
              <strong>Support records:</strong> typically 12 months after ticket
              closure
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-700">
            Retention may vary depending on legal requirements, incident handling, or
            policy obligations.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Security</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We use appropriate technical and organisational measures to protect Portal
            data, such as access controls, least-privilege permissions, logging,
            encryption where appropriate, and security testing.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Your rights</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Depending on your location and applicable law, you may have rights to
            request:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Access to your personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion or restriction (in certain circumstances)</li>
            <li>Objection (including to processing based on legitimate interests)</li>
            <li>Data portability (in certain circumstances)</li>
            <li>Withdrawal of consent (where consent is used)</li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to this notice
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We may update this notice from time to time. The latest version will be
            posted on the Portal and the effective date updated.
          </p>
        </section>
      </div>
    </main>
  );
}
