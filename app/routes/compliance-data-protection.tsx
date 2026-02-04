import type {MetaFunction} from '@shopify/remix-oxygen';

export const meta: MetaFunction = () => {
  return [{title: 'Compliance & Data Protection - Simple Chat'}];
};

export default function ComplianceDataProtection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Compliance & Data Protection
      </h1>
      <p className="text-gray-500 mb-8">The legal stuff</p>

      <div className="prose prose-gray max-w-none">
        <p>
          Our architecture is built on top of Amazon AWS frameworks to enable
          best practice protection controls, implemented based on industry
          standards. We process only the minimum personal data required to
          provide app functionality to merchants and are compliant with the
          General Data Protection Regulation (GDPR).
        </p>
        <p>
          For details on how we handle personal information, please review our{' '}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <p>
          Please see below the technical details on how we encrypt and handle
          data at each stage of our application:
        </p>

        <h2>Data Hosting & Encryption</h2>
        <p>
          Simple Chat stores data and backups with the Amazon AWS RDS and S3
          services, which are located in the United States.
        </p>

        <h3>Data at Rest</h3>
        <p>
          Data stored in Amazon S3 buckets, encrypted with SSE-S3 - S3 managed
          encryption keys:
        </p>
        <ul>
          <li>Database backups (retained for two years)</li>
          <li>Checkout logs for link tracking (retained for two years)</li>
          <li>Application logs (retained for two years)</li>
          <li>Server access logs (retained for two years)</li>
          <li>
            Internal reports created by our employees (retained for two years)
          </li>
        </ul>

        <p>Data stored in Amazon RDS, encrypted with AWS-managed keys:</p>
        <ul>
          <li>
            Logs of Shopify webhooks and all outgoing emails (retained for two
            years)
          </li>
          <li>
            Production backups (retained for seven days, primary backups are in
            S3)
          </li>
        </ul>

        <h3>Data in Transit</h3>
        <p>
          The Simple Chat user interface runs on the user's computer in a web
          browser. All communication between this browser application and the
          Simple Chat server occurs over a connection encrypted by TLSv1.2_2021.
        </p>

        <h2>Separation of Test Data</h2>
        <p>
          Testing and staging environments are logically separated from the
          Production environment. No production data is used in our development
          or test environments.
        </p>

        <h2>Staff Access</h2>
        <p>
          Simple Chat's Production Environment uses role-based (RBAC) security
          architecture requiring users to be authenticated and authorized before
          accessing any system resources. Resources are protected using
          industry-standard tools. Access to data is logged to ensure all access
          is appropriate.
        </p>

        <h2>Data Loss Prevention</h2>
        <p>
          Non-Log Production data are replicated among discrete operating
          environments to protect the availability of Simple Chat's service in
          the event of catastrophic events. The available Simple Chat data
          archiving service mitigates data loss for customer logs in the event
          of catastrophic events.
        </p>

        <h2>Security Incident Response</h2>
        <p>
          Simple Chat has established policies and procedures for responding to
          potential security incidents. All incidents are managed by Simple
          Chat's Incident Response Team. Simple Chat defines the events that
          must be managed via the incident response process. Incidents are
          classified by severity. Incident response procedures are tested and
          updated at least annually.
        </p>
      </div>
    </div>
  );
}
