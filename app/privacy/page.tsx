import { COMPANY_INFO } from '@/lib/constants'

export const metadata = {
  title: 'Privacy Policy - Staxxd | GDPR Compliant Data Protection',
  description: 'Staxxd Privacy Policy and GDPR compliance information. Learn how we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_INFO.name} ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {COMPANY_INFO.website} and use our services.
            </p>
            <p>
              We are a UK-based business consultancy and are committed to complying with the General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
            <p>We may collect information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us through our contact form (name, email, phone, company, message)</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Request information about our services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries and provide customer support</li>
              <li>Send you information about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure website security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p>Under GDPR, we process your personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> When you provide explicit consent (e.g., contact form submissions)</li>
              <li><strong>Legitimate Interests:</strong> To respond to enquiries and improve our services</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> We use Formspree to process contact form submissions. They are GDPR-compliant and act as data processors.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings or our cookie consent banner.</p>
            <p>For more information, please see our <a href="/cookies" className="text-brand-accent hover:underline">Cookie Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact form submissions: Retained for 2 years or until you request deletion</li>
              <li>Marketing communications: Until you unsubscribe</li>
              <li>Website analytics: Anonymised data may be retained longer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights (GDPR)</h2>
            <p>Under GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to Object:</strong> Object to processing of your data</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-accent hover:underline">{COMPANY_INFO.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            <p className="mt-4">
              We are committed to maintaining high standards of cybersecurity and follow best practices aligned with Cyber Essentials, a UK government-backed cybersecurity certification scheme. Our security measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Secure data transmission using encryption (HTTPS/SSL)</li>
              <li>Regular security updates and patches</li>
              <li>Access controls and authentication measures</li>
              <li>Secure hosting and infrastructure</li>
              <li>Regular security assessments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. International Data Transfers</h2>
            <p>Your data may be processed and stored outside the European Economic Area (EEA). When we transfer data internationally, we ensure appropriate safeguards are in place to protect your data in accordance with GDPR requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-accent hover:underline">{COMPANY_INFO.email}</a></p>
              <p><strong>Address:</strong> {COMPANY_INFO.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
