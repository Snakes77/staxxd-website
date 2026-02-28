import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-title">Staxxd</h3>
            <p className="footer-tagline">Business Consultancy with a Twist</p>
            <p className="footer-description">Business improvement company with over 20 years of hands-on experience. From entry-level to C-suite, we listen, understand problems, and deliver data-driven solutions. Fast-paced. Results-focused.</p>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><Link href="/services/web-development" className="footer-link">Website Development</Link></li>
              <li><Link href="/services/web-applications" className="footer-link">Web Applications</Link></li>
              <li><Link href="/services/google-apps-scripts" className="footer-link">Google Apps Scripts</Link></li>
              <li><Link href="/services/business-solutions" className="footer-link">Business Solutions</Link></li>
              <li><Link href="/services/ai-powered-solutions" className="footer-link">AI-Powered Solutions</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2026 Staxxd. All rights reserved.</p>
            <div className="footer-legal">
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/cookies" className="footer-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
