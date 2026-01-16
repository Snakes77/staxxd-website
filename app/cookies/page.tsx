import { COMPANY_INFO } from '@/lib/constants'

export const metadata = {
  title: 'Cookie Policy - Staxxd | How We Use Cookies',
  description: 'Staxxd Cookie Policy. Learn about how we use cookies on our website and how to manage your cookie preferences.',
}

export default function CookiesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., cookie consent preferences)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (if used)</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Essential Cookies</h3>
            <p>These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting privacy preferences or filling in forms.</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Example:</strong> Cookie consent preference (cookieConsent)</p>
              <p><strong>Duration:</strong> 1 year</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Analytics Cookies (if applicable)</h3>
            <p>These cookies help us understand how visitors use our website by collecting and reporting information anonymously.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Managing Your Cookie Preferences</h2>
            <p>You can control and manage cookies in several ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use our cookie consent banner when you first visit the site</li>
              <li>Adjust your browser settings to refuse cookies (note: this may affect website functionality)</li>
              <li>Clear cookies from your browser at any time</li>
            </ul>
            <p className="mt-4">
              Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>See what cookies you have and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Third-Party Cookies</h2>
            <p>We may use third-party services that set cookies on our website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Formspree:</strong> Used for contact form submissions (privacy policy: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">formspree.io/legal/privacy-policy</a>)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Updates to This Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us:</p>
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
