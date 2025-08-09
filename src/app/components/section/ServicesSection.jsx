'use client';
import { Globe, ShoppingCart, Smartphone, Wrench } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Cross-browser Compatible'],
      price: 'From $2,000'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'Mobile Optimized'],
      price: 'From $3,500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['React Native', 'Push Notifications', 'Offline Support', 'App Store Ready'],
      price: 'From $5,000'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance for existing applications',
      features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Performance Optimization'],
      price: 'From $500/month'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive web development services to help your business succeed online. 
            From concept to deployment, I handle every aspect of your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="text-gray-900 font-bold text-lg">
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200"
                  >
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Looking for something custom? Let's discuss your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}