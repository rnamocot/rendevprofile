import Footer from '../components/layout/Footer';

export const metadata = {
  title: "Terms of Service - Renie Namocot | Full Stack Developer",
  description: "Terms of Service for web development services provided by Renie Namocot. Professional web development terms and conditions.",
};

export default function TermsPage() {
  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Please read these terms carefully before engaging our web development services.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* 1. Agreement */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    By engaging Renie Namocot ("we," "us," or "our") for web development services, you ("Client" or "you") 
                    agree to be bound by these Terms of Service ("Terms"). These Terms apply to all services provided, 
                    including but not limited to web development, WordPress development, Shopify development, and ongoing support.
                  </p>
                  <p>
                    If you do not agree to these Terms, please do not engage our services.
                  </p>
                </div>
              </div>

              {/* 2. Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Services Provided</h2>
                <div className="text-gray-600 space-y-4">
                  <p>We provide the following web development services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Custom web application development using Laravel, React, Next.js, Vue.js</li>
                    <li>WordPress development including custom themes and plugins</li>
                    <li>Shopify store development and customization</li>
                    <li>E-commerce solutions and online store development</li>
                    <li>Website maintenance and support services</li>
                    <li>Performance optimization and SEO services</li>
                  </ul>
                  <p>
                    All services are provided on a project basis or through ongoing maintenance agreements as specified in individual contracts.
                  </p>
                </div>
              </div>

              {/* 3. Project Timeline */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Project Timeline and Delivery</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Project timelines are estimates based on the scope of work agreed upon. Actual delivery may vary depending on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Client feedback and approval timeframes</li>
                    <li>Changes to project scope during development</li>
                    <li>Availability of required resources and third-party services</li>
                    <li>Complexity of requested features</li>
                  </ul>
                  <p>
                    We will communicate any potential delays promptly and work to minimize impact on the agreed timeline.
                  </p>
                </div>
              </div>

              {/* 4. Payment Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Payment Terms</h2>
                <div className="text-gray-600 space-y-4">
                  <p>Payment terms are as follows:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Project Work:</strong> 50% deposit required before work begins, remaining 50% due upon completion</li>
                    <li><strong>Ongoing Support:</strong> Monthly payments due in advance</li>
                    <li><strong>Payment Methods:</strong> Bank transfer, PayPal, or other agreed methods</li>
                    <li><strong>Late Payments:</strong> Overdue invoices may incur late fees and project suspension</li>
                  </ul>
                  <p>
                    All prices are quoted in USD unless otherwise specified. Additional costs for third-party services, hosting, 
                    or premium plugins/themes are the client's responsibility.
                  </p>
                </div>
              </div>

              {/* 5. Client Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Client Responsibilities</h2>
                <div className="text-gray-600 space-y-4">
                  <p>Clients are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing accurate and complete project requirements</li>
                    <li>Timely feedback and approvals during development</li>
                    <li>Providing necessary content, images, and materials</li>
                    <li>Maintaining backup copies of all website data</li>
                    <li>Keeping login credentials secure</li>
                    <li>Promptly reporting any issues or concerns</li>
                  </ul>
                </div>
              </div>

              {/* 6. Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Upon full payment, clients receive full ownership of custom code developed specifically for their project. 
                    However, we retain the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use general techniques, methods, and know-how gained during the project</li>
                    <li>Showcase the work in our portfolio (unless specifically requested otherwise)</li>
                    <li>Reuse generic code components and frameworks</li>
                  </ul>
                  <p>
                    Third-party software, themes, plugins, and frameworks remain property of their respective owners and are 
                    subject to their licensing terms.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-12 bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About These Terms?</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:rnamocotdev@gmail.com" className="text-gray-900 hover:text-gray-600">rnamocotdev@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+639613868728" className="text-gray-900 hover:text-gray-600">+639 613868728</a></p>
                  </div>
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