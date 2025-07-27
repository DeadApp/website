import Link from 'next/link';

export default function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-medium">Terms of Service</h1>
      <div className="mt-2 prose max-w-none space-y-6">
        <p className="text-zinc-400">Last Updated: April 8, 2025</p>

        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p className="text-zinc-200">
          Welcome to Hoefax, a service provided by Prince Technologies LLC
          ("we," "our," or "us"). By accessing or using our website or services
          (collectively, the "Service"), you agree to be bound by these Terms of
          Service ("Terms"). If you do not agree to these Terms, you may not use
          the Service.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Account Registration</h2>
        <p className="text-zinc-200">
          To use the Service, you must create an account. You agree to provide
          accurate and complete information during the registration process and
          to keep your account information up to date. You are responsible for
          maintaining the confidentiality of your account credentials and for
          all activities that occur under your account. You must be at least 18
          years old to use the Service.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. User Conduct</h2>
        <p className="text-zinc-200">
          You agree to use the Service in compliance with all applicable laws
          and regulations. You may not:
        </p>
        <ul className="list-disc pl-6 my-2">
          <li>
            Post false, defamatory, or misleading information about any
            individual
          </li>
          <li>Harass, threaten, or intimidate other users</li>
          <li>Impersonate any person or entity</li>
          <li>Violate the privacy rights of others</li>
          <li>
            Post explicit, pornographic, or otherwise objectionable content
          </li>
          <li>Use the Service for any illegal or unauthorized purpose</li>
          <li>
            Scrape, copy, or reproduce content from the Service without
            permission
          </li>
          <li>Use automated methods to access the Service</li>
          <li>Share your account credentials with others</li>
        </ul>
        <p className="text-zinc-200">
          You are solely responsible for the content you post on the Service,
          and you acknowledge that Prince Technologies LLC does not endorse or
          verify any user-generated content.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Content Ownership and License
        </h2>
        <p className="text-zinc-200">
          By posting content on the Service, you grant Prince Technologies LLC a
          non-exclusive, royalty-free, worldwide license to use, display,
          reproduce, and distribute that content on the Service. You represent
          and warrant that you have the necessary rights to grant this license
          and that your content does not infringe on any third-party rights,
          including copyrights, trademarks, or privacy rights.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          5. User-Generated Content
        </h2>
        <p className="text-zinc-200">
          The Service includes user-generated content, such as profiles. Prince
          Technologies LLC does not control, verify, or endorse any
          user-generated content. You acknowledge that user-generated content
          may be inaccurate, offensive, or objectionable, and you agree to use
          the Service at your own risk.
        </p>

        <p className="text-zinc-200">
          Hoefax is a platform for sharing personal experiences and opinions
          about individuals' dating and social histories. All content on Hoefax
          is user-generated and reflects the personal experiences and opinions
          of individual users. This content is subjective and not verified as
          objective fact. Users should exercise their own judgment when
          interpreting or relying on this information.
        </p>

        <p className="text-zinc-200">
          Do not post false, misleading, or malicious information with the
          intent to defame, harm, or damage the reputation of any individual.
          Violating content will be removed, and users responsible may face
          account termination.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Content Guidelines</h2>
        <p className="text-zinc-200">
          The following content is strictly prohibited:
        </p>
        <ul className="list-disc pl-6 my-2">
          <li>Sexually explicit images or videos</li>
          <li>
            Confidential personal information (e.g., home addresses, phone
            numbers, private health details)
          </li>
          <li>Doxxing or attempts to expose private contact details</li>
          <li>Content promoting illegal activities</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">7. Legal Disclaimer</h2>
        <p className="text-zinc-200">
          Hoefax does not provide consumer reports and is not a consumer
          reporting agency under the Fair Credit Reporting Act (FCRA).
          Information on our platform may not be 100% accurate, complete, or
          current, and should not be used as a substitute for your own due
          diligence. Hoefax and its operators are not liable for any damages,
          losses, or harm arising from the use of this information. We do not
          verify or endorse user-submitted content. Use of this service is at
          your own risk.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Privacy</h2>
        <p className="text-zinc-200">
          Our Privacy Policy explains how we collect, use, and protect your
          personal information. By using the Service, you consent to our privacy
          practices as described in the Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-6">9. Disclaimers</h2>
        <p className="text-zinc-200">
          THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED. PRINCE TECHNOLOGIES LLC DISCLAIMS ALL WARRANTIES,
          INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR
          RELIABILITY OF ANY CONTENT ON THE SERVICE. YOUR USE OF THE SERVICE IS
          AT YOUR OWN RISK.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          10. Limitation of Liability
        </h2>
        <p className="text-zinc-200">
          IN NO EVENT SHALL PRINCE TECHNOLOGIES LLC BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF
          OR RELATED TO YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY TO YOU FOR
          ANY CLAIM SHALL NOT EXCEED $100.
        </p>

        <h2 className="text-xl font-semibold mt-6">11. Indemnification</h2>
        <p className="text-zinc-200">
          You agree to indemnify, defend, and hold harmless Prince Technologies
          LLC, its officers, directors, employees, and agents from and against
          any claims, damages, liabilities, costs, or expenses (including
          reasonable attorneys' fees) arising from your use of the Service, your
          violation of these Terms, or your infringement of any third-party
          rights.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          12. Content Removal Rights
        </h2>
        <p className="text-zinc-200">
          We reserve the right to remove any content from the Service at any
          time, for any reason, including but not limited to content that
          violates these Terms, is objectionable, or is the subject of a legal
          complaint. We may also edit or modify content as necessary to comply
          with applicable laws or to improve the Service.
        </p>

        <h2 className="text-xl font-semibold mt-6">13. Termination</h2>
        <p className="text-zinc-200">
          We reserve the right to terminate or suspend your account and access
          to the Service at any time, without notice, for any reason, including
          but not limited to your violation of these Terms. Upon termination,
          your right to use the Service will immediately cease.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          14. Governing Law and Dispute Resolution
        </h2>
        <p className="text-zinc-200">
          These Terms shall be governed by and construed in accordance with the
          laws of the State of North Carolina, without regard to its conflict of
          law principles. Any dispute arising out of or relating to these Terms
          or the Service shall be resolved through binding arbitration in North
          Carolina, in accordance with the rules of the American Arbitration
          Association.
        </p>

        <h2 className="text-xl font-semibold mt-6">15. Changes to Terms</h2>
        <p className="text-zinc-200">
          We may modify these Terms at any time. We will notify you of any
          material changes by posting the updated Terms on the Service or
          through other communication methods. Your continued use of the Service
          after any changes indicates your acceptance of the modified Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          16. Copyright Infringement Claims
        </h2>
        <p className="text-zinc-200">
          If you believe that any content on the Service infringes your
          copyright, please use our DMCA form to submit a claim.
        </p>

        <h2 className="text-xl font-semibold mt-6">17. Contact Us</h2>
        <p className="text-zinc-200">
          If you have any questions about these Terms, please contact us at{' '}
          <Link
            className="text-white underline underline-offset-4"
            href="mailto:support@hoefax.io"
          >
            support@hoefax.io
          </Link>
          . For legal inquiries, please email{' '}
          <Link
            className="text-white underline underline-offset-4"
            href="mailto:legal@hoefax.io"
          >
            legal@hoefax.io
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
