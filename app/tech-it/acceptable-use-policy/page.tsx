"use client";

export const dynamic = "force-dynamic";

import RequireAuth from "../../../components/RequireAuth";

export default function AcceptableUsePolicyPage() {
  return (
    <RequireAuth>
      <div className="mt-10 space-y-6">
        <header className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">
            Acceptable Use Policy (AUP)
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            The Acceptable Use Policy (AUP), formerly known as the IT Policy, aims to
            protect all staff (perm, freelance, interns) of August Collection
            equipment and data and minimise risk by providing clarity on the
            behaviours expected and required by staff. It sets a framework on how to
            conduct August business to meet legal, contractual and regulatory
            requirements and defines how individuals must behave in order to comply
            with this policy.
          </p>
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Contents</h2>
          <div className="mt-4 grid gap-6 text-sm text-slate-600 md:grid-cols-2">
            <ul className="space-y-2">
              <li>
                <a className="text-[#326354]" href="#laptop-policy">
                  Laptop &amp; Peripheral Policy
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#purpose">
                  1. Purpose
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#scope">
                  2. Scope
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#ownership-allocation">
                  3. Ownership &amp; Allocation
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#usage-guidelines">
                  4. Usage Guidelines
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#passwords">
                  5. Managing IDs, passwords and protecting information
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#care-maintenance">
                  6. Care &amp; Maintenance
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#it-costs">
                  7. IT Costs and Budgeting
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#security">
                  8. Security &amp; Data Protection
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#best-practices">
                  9. Best Practices for Care
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#return-equipment">
                  10. Return of Equipment
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#compliance">
                  11. Compliance
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a className="text-[#326354]" href="#managers-responsibilities">
                  Managers Responsibilities
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#managers-purpose">
                  1. Purpose
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#managers-scope">
                  2. Scope
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#onboarding">
                  3. Onboarding Responsibilities
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#offboarding">
                  4. Off-boarding Responsibilities
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#team-oversight">
                  5. Team Equipment Oversight
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#laptop-costs">
                  Laptop Costs - per device and Team
                </a>
              </li>
              <li>
                <a className="text-[#326354]" href="#training-support">
                  6. Training and Support
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div id="laptop-policy" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              Laptop &amp; Peripheral Policy
            </h2>
            <p className="text-sm text-slate-600">
              The following Laptop &amp; Peripheral Policy reflects what is feasible
              for us, as a business. This means will be make decisions on potential
              hardware changes as and if needed.
            </p>
            <p className="text-sm text-slate-600">
              Due to the wear and tear of laptops, keyboards and mice owned by the
              company that may not be covered by a warranty, we aim to reduce
              additional costs towards purchases and/or repairs. Leasing is no longer
              an option.
            </p>
            <p className="text-sm text-slate-600">
              If a member of staff or new hire would like a replacement of a laptop
              or peripheral that is perceived faulty, or is requesting a purchase
              — the Head of Department should request the item(s) from the Head of
              Product / IT. This will be reviewed and an appropriate device (laptop,
              mouse, etc.) will be allocated.
            </p>
            <p className="text-sm text-slate-600">
              As further{" "}
              <a
                className="font-semibold text-[#326354] underline underline-offset-2"
                href="https://augustcollections.atlassian.net/wiki/spaces/PM/pages/6946817/IT+Policy#3.-Ownership-%26-Allocation"
                target="_blank"
                rel="noreferrer"
              >
                explained below
              </a>
              , the requested item may not be the item provided. E.g. not all staff
              need to use an expensive MacBook when a computer running Windows OS will
              be satisfactory to perform duties &amp; responsibilities for the staff
              member.
            </p>
            <p className="text-sm text-slate-600">
              Please note that people who are not contractors will not be allowed to
              use their personal laptops from January 2025 onwards.
            </p>
            <p className="text-sm text-slate-600">
              Should a member of staff make a purchase for their own use, this may be
              considered acceptable — but the member of staff should not assume August
              will reimburse the individual or department for such purchases.
            </p>
          </div>

          <div id="purpose" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">1. Purpose</h2>
            <p className="text-sm text-slate-600">
              This policy outlines the standards, responsibilities, and procedures
              for the allocation, use, and care of company-issued laptops, and
              peripherals. The aim is to ensure that all employees have the tools
              they need to perform their roles effectively, while also protecting
              August from unnecessary costs and risks associated with equipment misuse
              or damage. And a clear understanding of their responsibilities for
              appropriate use of August’s information technology resources.
            </p>
          </div>

          <div id="scope" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">2. Scope</h2>
            <p className="text-sm text-slate-600">
              This policy applies to all August employees, contractors, and temporary
              staff, including interns who are issued equipment (hardware, software,
              information systems - e.g. Google Drive, channels of communication,
              including voice- telephony, social media, video, email, instant
              messaging) by August for work-related purposes.
            </p>
          </div>

          <div id="ownership-allocation" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              3. Ownership &amp; Allocation
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>All laptops remain the property of August at all times.</li>
              <li>
                Laptop type (Mac or PC) and specifications will be determined by the
                Head Of your department and based on role requirements and
                cost-effectiveness for the business.
              </li>
              <li>
                While we understand some employees prefer certain brands or operating
                systems (e.g., macOS), final hardware decisions will be made by
                management to balance performance needs and fiscal responsibility.
              </li>
            </ul>
          </div>

          <div id="usage-guidelines" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              4. Usage Guidelines
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>
                Company laptops are to be used primarily for work purposes. Any breach
                of this Acceptable Usage Policy may result in disciplinary action.
              </li>
              <li>Employees must not install unauthorized software or alter security settings.</li>
              <li>Devices must be secured with a password and encrypted where applicable.</li>
              <li>
                Each device will include the Ninja Remote Management and Monitoring{" "}
                <a
                  className="font-semibold text-[#326354] underline underline-offset-2"
                  href="https://www.ninjaone.com/rmm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  (RMM)
                </a>{" "}
                software so our IT Team can remotely access your laptop for security
                upgrades.
              </li>
              <li>
                Any perceived or known security breach should be reported immediately
                to the staff members Line Manager, Head of, and/or Head of Product/IT.
              </li>
              <li>
                Do not undertake any illegal activity or activity that is harmful to
                the reputation of August, jeapordise staff, Homeowner data, or the
                August technology.
              </li>
            </ul>
          </div>

          <div id="passwords" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              5. Managing IDs, passwords and protecting information
            </h2>
            <p className="text-sm text-slate-600">Users must:</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Create and protect passwords and usernames appropriately.</li>
              <li>
                When using a the{" "}
                <a
                  className="font-semibold text-[#326354] underline underline-offset-2"
                  href="https://augustcollection.1password.com/signin"
                  target="_blank"
                  rel="noreferrer"
                >
                  1password.com
                </a>{" "}
                manager, ensure that their master password is stored securely.
                Passwords must not be stored in shared folders or written down.
              </li>
              <li>Comply with HR Records guidance in respect of handling employee information.</li>
              <li>Do not provide any information to any type of request that cannot be verified.</li>
              <li>Do not engage in mass transmission of unsolicited emails (SPAM).</li>
              <li>
                Always be vigilant towards scam communications, like{" "}
                <a
                  className="font-semibold text-[#326354] underline underline-offset-2"
                  href="https://www.ncsc.gov.uk/collection/phishing-scams"
                  target="_blank"
                  rel="noreferrer"
                >
                  phishing
                </a>{" "}
                emails. Understand how to spot, report and/or block suspicious emails.
              </li>
            </ul>
          </div>

          <div id="care-maintenance" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              6. Care &amp; Maintenance
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Employees are responsible for the proper care and safe handling of their laptops.</li>
              <li>
                Physical damage resulting from negligence, misuse, or accidents not
                covered by warranty may result in the employee being held financially
                responsible for repair or replacement costs.
              </li>
              <li>
                Examples of non-warranty damage include, but are not limited to:
                liquid spills, cracked screens, and excessive physical wear.
              </li>
            </ul>
          </div>

          <div id="it-costs" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              7. IT Costs and Budgeting
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>
                Laptops provided to staff must be returned in good condition,
                accounting for normal wear and tear.
              </li>
              <li>
                Any non-warranty damage will incur additional repair costs, which
                August reserves the right to recover from the responsible employee.
              </li>
              <li>Excessive incidents of laptop damage may lead to disciplinary action.</li>
              <li>
                Staff will be provided the necessary, baseline device to successfully
                perform the responsibilities for a team role. Any additional devices,
                or peripherals (e.g. a bluetooth mouse, keyboard, etc.) will not be
                covered by the IT Budget. A Head of a Team may agree to use their
                respective budget to cover costs for devices.
              </li>
              <li>
                Staff are welcome to purchase their own peripherals, so long as the
                peripheral does not violate this Acceptable Use Policy.
              </li>
            </ul>
          </div>

          <div id="security" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              8. Security &amp; Data Protection
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Laptops must be locked when unattended.</li>
              <li>Laptops stored overnight in the office, must be put in a respective locker or secure place.</li>
              <li>
                Employees must promptly report any lost, stolen, or damaged devices
                to the IT Team, and your Line Manager.
              </li>
              <li>Sensitive company data must never be stored on unencrypted personal devices.</li>
            </ul>
          </div>

          <div id="best-practices" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              9. Best Practices for Care
            </h2>
            <p className="text-sm text-slate-600">
              To reduce the risk of damage and ensure optimal performance:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Always store the laptop in a padded case or sleeve when transporting.</li>
              <li>Keep liquids, food, and other spill hazards away from the device.</li>
              <li>Avoid placing heavy items on top of the laptop.</li>
              <li>
                Do not leave the laptop in extreme temperatures (e.g., hot cars or cold
                outdoor environments).
              </li>
              <li>Ensure charging cables are not stretched, twisted, or pinched.</li>
              <li>Shut down or restart the laptop regularly to maintain performance.</li>
            </ul>
            <p className="text-sm text-slate-600">
              Many issues that interfere with the performance of your laptop may be
              resolved by simply restarting the device regularly.
            </p>
          </div>

          <div id="return-equipment" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              10. Return of Equipment
            </h2>
            <p className="text-sm text-slate-600">
              Upon termination of employment or completion of contract, employees
              must return their laptop and all associated accessories in good
              condition.
            </p>
            <p className="text-sm text-slate-600">
              Failure to return equipment may result in the cost being deducted from
              final pay.
            </p>
          </div>

          <div id="compliance" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">11. Compliance</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>
                By accepting a company-issued laptop, employees agree to comply with
                this policy. Failure to follow the guidelines may result in
                disciplinary action, up to and including termination.
              </li>
              <li>
                Any requests for new hardware, devices or software will be subject to
                a review process.
              </li>
              <li>
                Line managers are responsible for ensure that all members of staff
                understand their responsibilities and consequences mentioned in this
                policy
              </li>
            </ul>
          </div>

          <div id="managers-responsibilities" className="space-y-3 pt-2">
            <h2 className="text-xl font-semibold text-slate-800">
              Managers Responsibilities
            </h2>
          </div>

          <div id="managers-purpose" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">1. Purpose</h2>
            <p className="text-sm text-slate-600">
              This section outlines the additional responsibilities of managers who
              have direct reports, in relation to the onboarding, off-boarding, and
              oversight of company-issued laptops. The aim is to ensure equipment is
              allocated, maintained, and returned efficiently, minimising disruptions
              and costs.
            </p>
          </div>

          <div id="managers-scope" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">2. Scope</h2>
            <p className="text-sm text-slate-600">
              This addendum applies to all Leaders, Heads Of, Directors and Team
              Leads (aka Managers) who are responsible for supervising employees,
              contractors or interns and managing their equipment lifecycle.
            </p>
          </div>

          <div id="onboarding" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              3. Onboarding Responsibilities
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>
                Managers are accountable for accurately onboarding all new team
                members, ensuring that laptop allocation is aligned with role
                requirements.
              </li>
              <li>
                During onboarding, Managers must:
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>
                    Verify that a suitable laptop is issued and configured before the
                    employee’s start date.
                  </li>
                  <li>
                    Ensure that the employee is briefed on August’s Laptop Policy and
                    Best Practices.
                  </li>
                  <li>
                    Record the device make, model, and serial number in the company
                    asset tracking system, or provide/confirm this information with
                    the IT Team.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div id="offboarding" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              4. Off-boarding Responsibilities
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>
                Managers are responsible for overseeing the return of laptops when a
                team member leaves.
              </li>
              <li>
                During off-boarding, managers must:
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Confirm the laptop and accessories are returned promptly and in good condition.</li>
                  <li>Report any damage or missing items to IT for assessment.</li>
                  <li>
                    Ensure data security by verifying that the device has been wiped
                    or re-imaged by IT before reassignment.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div id="team-oversight" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              5. Team Equipment Oversight
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Managers must familiarise themselves with the devices currently in use by their team.</li>
              <li>Regularly check for hardware or performance issues and ensure timely reporting to IT.</li>
              <li>
                Maintain awareness of leasing terms, warranty status, and potential
                upcoming replacements.
              </li>
              <li>
                Any additional device or peripheral requested by staff will need to
                be paid for by the respective team budget. The IT team will only
                provide the necessary baseline device to successfully perform the
                responsibilities for a team role.
              </li>
              <li>
                Staff are welcome to purchase their own peripherals, so long as the
                peripheral does not violate this Acceptable Use Policy.
              </li>
            </ul>
          </div>

          <div id="laptop-costs" className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-800">
              Laptop Costs - per device and Team
            </h3>
            <p className="text-sm text-slate-600">
              The following table shows the charges for laptops, and the use per
              department.
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <iframe
                title="IT Policy - Costs for Devices"
                src="https://docs.google.com/spreadsheets/d/1pF_IKcNVABXGYYby-mWldDB0fNVwGgAJTwYimmjjeOo/htmlembed?authuser=0"
                className="h-[760px] w-full"
              />
            </div>
          </div>

          <div id="training-support" className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">
              6. Training and Support
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>
                Managers will receive formal training on August’s onboarding and
                off-boarding procedures before these changes take effect.
              </li>
              <li>
                IT and HR will provide ongoing support to ensure compliance and
                efficiency in the equipment lifecycle process.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </RequireAuth>
  );
}
