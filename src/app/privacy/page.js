import Footer from '../components/layout/Footer';

export const metadata = {
  title: "Privacy Policy - Renie Namocot | Full Stack Developer",
  description: "Privacy Policy for Renie Namocot's web development services. Learn how we protect your personal information and data.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* 1. Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                <div className="text-gray-600 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                  <p>When you contact us or engage our services, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company or organization details</li>
                    <li>Project requirements and specifications</li>
                    <li>Payment information (processed through secure third-party providers)</li>
                    <li>Communication history and project-related files</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Technical Information</h3>
                  <p>We may automatically collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and browser information</li>
                    <li>Website usage data and analytics</li>
                    <li>Device information and operating system</li>
                    <li>Referral sources and page interactions</li>
                  </ul>
                </div>
              </div>

              {/* 2. How We Use Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                <div className="text-gray-600 space-y-4">
                  <p>We use the collected information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide web development services and technical support</li>
                    <li>Communicate about projects, updates, and service-related matters</li>
                    <li>Process payments and maintain billing records</li>
                    <li>Improve our services and website functionality</li>
                    <li>Comply with legal obligations and business requirements</li>
                    <li>Send occasional updates about our services (with your consent)</li>
                  </ul>
                  <p>
                    We do not sell, rent, or share your personal information with third parties for their marketing purposes.
                  </p>
                </div>
              </div>

              {/* 3. Information Sharing */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
                <div className="text-gray-600 space-y-4">
                  <p>We may share your information only in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party services (hosting, payment processing, analytics) under strict confidentiality agreements</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets</li>
                    <li><strong>Protection:</strong> To protect our rights, property, safety, or that of our users</li>
                  </ul>
                  <p>
                    All third-party services we use are carefully selected and required to maintain appropriate security measures.
                  </p>
                </div>
              </div>

              {/* 4. Data Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                <div className="text-gray-600 space-y-4">
                  <p>We implement appropriate security measures to protect your information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Secure transmission protocols (SSL/HTTPS)</li>
                    <li>Encrypted storage of sensitive data</li>
                    <li>Regular security assessments and updates</li>
                    <li>Restricted access to personal information</li>
                    <li>Secure backup and recovery procedures</li>
                  </ul>
                  <p>
                    While we strive to protect your information, no method of transmission over the internet 
                    or electronic storage is 100% secure. We cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* 5. Your Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>
                <div className="text-gray-600 space-y-4">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request information about what personal data we have about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-12 bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About This Policy?</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or how we handle your information, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:rnamocotdev@gmail.com" className="text-gray-900 hover:text-gray-600">rnamocotdev@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+639613868728" className="text-gray-900 hover:text-gray-600">+639 613868728</a></p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    We will respond to privacy-related inquiries within 30 days.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}