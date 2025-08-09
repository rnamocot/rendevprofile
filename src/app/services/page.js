import { Globe, ShoppingCart, Smartphone, Wrench, CheckCircle, ArrowRight, Star, Package } from 'lucide-react';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: "Services - Renie Namocot | Full Stack Web Development",
  description: "Professional web development services including custom websites, e-commerce solutions, mobile apps, and ongoing support. Get a quote today!",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Focused',
        'Cross-browser Compatible',
        'Modern UI/UX',
        'Content Management'
      ],
      price: 'From $2,000',
      popular: false
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and comprehensive admin dashboards.',
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Admin Dashboard',
        'Mobile Optimized',
        'Order Management',
        'Analytics & Reporting'
      ],
      price: 'From $3,500',
      popular: true
    },
    {
      icon: Package,
      title: 'WordPress & Shopify Development',
      description: 'Complete WordPress and Shopify solutions with custom themes, plugins, and e-commerce functionality.',
      features: [
        'Custom Theme Development',
        'Plugin Development',
        'WooCommerce Integration',
        'Shopify Store Setup',
        'Performance Optimization',
        'SEO Implementation'
      ],
      price: 'From $1,500',
      popular: false
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance for existing applications to ensure optimal performance.',
      features: [
        '24/7 Monitoring',
        'Regular Updates',
        'Bug Fixes',
        'Performance Optimization',
        'Security Updates',
        'Technical Support'
      ],
      price: 'From $500/month',
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We discuss your requirements, goals, and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and designs that align with your brand and user needs.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing followed by deployment and launch support.'
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description: 'Continued maintenance and support to ensure optimal performance.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Renie delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and professional approach made all the difference.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Solutions Ltd.',
      text: 'Outstanding work on our web application. Fast, responsive, and exactly what we needed. Highly recommend for any web development project.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      text: 'Professional, reliable, and delivered on time. The mobile app development was handled with expertise and great communication throughout.',
      rating: 5
    }
  ];

  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Web Development Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development solutions to help your business succeed online. 
              From concept to deployment, I handle every aspect of your project with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                View Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from a range of professional services designed to meet your specific needs 
                and help your business grow in the digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`relative bg-white rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-200 ${
                  service.popular ? 'border-gray-900 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-8">
                      <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <span className="text-gray-900 font-bold text-xl">
                          {service.price}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href="/contact"
                        className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium transition-colors duration-200 ${
                          service.popular 
                            ? 'bg-gray-900 text-white hover:bg-gray-800' 
                            : 'border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                        }`}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Need something custom? Let's discuss your specific requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take my word for it. Here's what my clients say about working with me.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that drives results. 
              Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Quote
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-xl font-medium hover:border-gray-400 transition-colors duration-200"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}