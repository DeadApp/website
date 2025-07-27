import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-medium">Privacy Policy</h1>
      <div className="mt-2 prose max-w-none space-y-6">
        <p className="text-zinc-400">Last Updated: April 8, 2025</p>

        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p className="text-zinc-200">
          At Hoefax, a service provided by Prince Technologies LLC (“we,” “our,”
          or “us”), we are committed to protecting your privacy while empowering
          you with transparency about romantic partners through our platform
          (the “Service”). This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you access or use our
          website, mobile application, or related services. By using the
          Service, you consent to the practices described herein.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          2. Information We Collect
        </h2>
        <p className="text-zinc-200">
          We collect the following types of information:
        </p>
        <ul className="list-disc pl-6 my-2 text-zinc-200">
          <li>
            <strong>Personal Information:</strong> Information you provide when
            creating an account or subscribing, such as your name, email
            address, payment details, and any other details submitted during
            registration.
          </li>
          <li>
            <strong>User-Submitted Data:</strong> Information you share in our
            private community channels about individuals (e.g., names, social
            media handles, or dating app screenshots).
          </li>
          <li>
            <strong>Social Media Data:</strong> Publicly available information
            from social media profiles that you or other users link to Hoefax
            profiles.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your interaction with
            the Service, including IP address, browser type, device information,
            pages visited, and timestamps.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> Data collected
            via cookies, web beacons, and similar technologies to enhance
            functionality, track usage, and analyze trends.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          3. How We Use Your Information
        </h2>
        <p className="text-zinc-200">
          We use your information to operate, maintain, and enhance the Service,
          including to:
        </p>
        <ul className="list-disc pl-6 my-2 text-zinc-200">
          <li>
            Authenticate users and manage access to free and paid features.
          </li>
          <li>Process payments and fulfill subscription orders.</li>
          <li>
            Facilitate community discussions and information sharing in private
            channels.
          </li>
          <li>
            Facilitate community engagement through social media integration.
          </li>
          <li>
            Send service-related notifications, promotional offers, or updates.
          </li>
          <li>
            Analyze usage patterns to improve the Service and develop new
            features.
          </li>
          <li>Detect and prevent fraud, abuse, or unauthorized access.</li>
          <li>Comply with legal obligations or respond to lawful requests.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          4. Sharing Your Information
        </h2>
        <p className="text-zinc-200">We may share your information with:</p>
        <ul className="list-disc pl-6 my-2 text-zinc-200">
          <li>
            <strong>Service Providers:</strong> Third-party vendors who assist
            with payment processing, hosting, analytics, email delivery, or
            moderation.
          </li>
          <li>
            <strong>Community Members:</strong> Information you share in
            community channels may be visible to other authenticated users of
            the Service.
          </li>
          <li>
            <strong>Business Partners:</strong> Partners who help us promote the
            Service or offer related products, subject to your consent where
            required.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required by law, subpoena,
            or to protect our rights, safety, or property, or that of our users.
          </li>
        </ul>
        <p className="text-zinc-200">
          We do not sell your personal information to third parties for
          marketing purposes. However, information shared in community channels
          may be accessible to other authenticated members as part of the
          Service's core functionality.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Data Retention</h2>
        <p className="text-zinc-200">
          We retain your personal information and user-submitted data for as
          long as necessary to provide the Service, comply with legal
          obligations, resolve disputes, or enforce our agreements. Account data
          is retained until you request deletion, while community-shared content
          may persist indefinitely unless removed per our Content Removal Rights
          (see Terms of Service).
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Security</h2>
        <p className="text-zinc-200">
          We employ industry-standard technical and organizational measures to
          protect your information from unauthorized access, loss, or misuse.
          However, no system is fully secure, and we cannot guarantee absolute
          security due to the nature of internet-based services.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Your Rights</h2>
        <p className="text-zinc-200">
          Depending on your jurisdiction, you may have rights regarding your
          personal information, including:
        </p>
        <ul className="list-disc pl-6 my-2 text-zinc-200">
          <li>Accessing the personal data we hold about you.</li>
          <li>Correcting inaccurate or incomplete information.</li>
          <li>
            Requesting deletion of your account or specific data (subject to our
            retention policies).
          </li>
          <li>Restricting or objecting to certain processing activities.</li>
          <li>Exporting your data in a portable format.</li>
        </ul>
        <p className="text-zinc-200">
          To exercise these rights, contact us at{' '}
          <Link
            className="text-white underline underline-offset-4"
            href="mailto:support@hoefax.io"
          >
            support@hoefax.io
          </Link>
          . Note that deleting your account does not automatically remove
          user-submitted content you’ve contributed about others, as it becomes
          part of the Service’s database.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Children’s Privacy</h2>
        <p className="text-zinc-200">
          The Service is intended for users 18 and older. We do not knowingly
          collect personal information from individuals under 13, nor do we
          permit users under 18 to register. If we learn that a minor’s data has
          been collected, we will take steps to delete it. Contact us if you
          believe a child’s data has been submitted.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          9. Third-Party Links and Services
        </h2>
        <p className="text-zinc-200">
          The Service includes links to third-party platforms. We are not
          responsible for their privacy practices or content. Review their
          policies before interacting with linked services.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          10. International Transfers
        </h2>
        <p className="text-zinc-200">
          Your data may be transferred to and processed in the United States or
          other jurisdictions with differing data protection laws. By using the
          Service, you consent to such transfers where necessary for its
          operation.
        </p>

        <h2 className="text-xl font-semibold mt-6">11. Cookies and Tracking</h2>
        <p className="text-zinc-200">
          We use cookies and tracking technologies to authenticate users,
          remember preferences, and analyze usage. You may disable cookies via
          your browser settings, but this could limit access to certain
          features.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          12. Changes to This Privacy Policy
        </h2>
        <p className="text-zinc-200">
          We may update this Privacy Policy as the Service evolves. Material
          changes will be posted here with an updated “Last Updated” date, and
          we may notify you via email or X. Continued use after changes
          signifies your acceptance.
        </p>

        <h2 className="text-xl font-semibold mt-6">13. Contact Us</h2>
        <p className="text-zinc-200">
          For questions or concerns about this Privacy Policy, email us at{' '}
          <Link
            className="text-white underline underline-offset-4"
            href="mailto:support@hoefax.io"
          >
            support@hoefax.io
          </Link>
          . For legal matters, contact{' '}
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
