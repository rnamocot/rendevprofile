'use client';
import { useState, useEffect } from 'react';
import { Globe, ShoppingCart, Smartphone, Wrench, CheckCircle, ArrowRight, Star, Package, Users, Clock, Target, Zap, ChevronDown, ChevronUp, MessageCircle, Code, Palette } from 'lucide-react';
import Footer from '../components/layout/Footer';
import './animations.css';

export default function ServicesPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeService, setActiveService] = useState(0);
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
        {/* Enhanced Hero Section */}
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border border-gray-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 border border-gray-500 rounded-full animate-float"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-gray-400 transform -rotate-45"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-12 bg-gray-400 transform rotate-45"></div>
            <div className="absolute top-10 right-1/4 w-4 h-4 bg-gray-500 rounded-full animate-ping"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6 animate-fadeInUp">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Professional Services
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block animate-fadeInLeft">Web Development</span>
              <span className="block text-black animate-fadeInRight animate-delay-200">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animate-delay-400">
              Comprehensive web development solutions to help your business succeed online. 
              From concept to deployment, I handle every aspect of your project with precision and care.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slideInUp animate-delay-600">
              {[
                { number: '50+', label: 'Projects Delivered', icon: Target },
                { number: '5+', label: 'Years Experience', icon: Clock },
                { number: '100%', label: 'Client Satisfaction', icon: Star },
                { number: '24/7', label: 'Support Available', icon: Users }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounceIn animate-delay-800">
              <a
                href="#services"
                className="btn-primary inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:shadow-lg"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6 animate-fadeInUp">
                <Zap className="w-4 h-4" />
                What I Offer
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp animate-delay-200">My Services</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-400">
                Choose from a range of professional services designed to meet your specific needs 
                and help your business grow in the digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`service-card relative bg-white rounded-2xl p-8 border-2 hover:shadow-2xl transition-all duration-500 group animate-fadeInUp ${
                    service.popular ? 'border-gray-900 shadow-xl' : 'border-gray-200 hover:border-gray-400'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-8 animate-bounceIn">
                      <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        <Star className="w-3 h-3 inline mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      service.popular ? 'bg-gray-900' : 'bg-gray-100 group-hover:bg-gray-900'
                    }`}>
                      <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                        service.popular ? 'text-white' : 'text-gray-600 group-hover:text-white'
                      }`} />
                    </div>
                    
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0 group-hover:text-black transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex flex-col items-start sm:items-end">
                          <span className="text-gray-900 font-bold text-lg sm:text-xl mb-1">
                            {service.price}
                          </span>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            Starting Price
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {(activeService === index ? service.features : service.features.slice(0, 4)).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {service.features.length > 4 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveService(activeService === index ? -1 : index);
                          }}
                          className="text-sm text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-1 transition-colors"
                        >
                          {activeService === index ? (
                            <>
                              Show Less <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              View All Features ({service.features.length - 4} more) <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      )}
                      
                      <div className="flex gap-3">
                        <a
                          href="/contact"
                          className={`btn-primary flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                            service.popular 
                              ? 'bg-gray-900 text-white hover:bg-black shadow-lg hover:shadow-xl' 
                              : 'border-2 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 hover:shadow-lg'
                          }`}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add consultation logic here
                          }}
                          className="px-4 py-3 border border-gray-300 rounded-xl hover:border-gray-600 transition-colors group/btn"
                        >
                          <MessageCircle className="w-4 h-4 text-gray-600 group-hover/btn:text-gray-900 transition-colors" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-gray-900 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
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

        {/* Enhanced Process Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-gray-500 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-20 bg-gray-400 transform rotate-12"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 mb-6 animate-fadeInUp">
                <Code className="w-4 h-4" />
                How I Work
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp animate-delay-200">My Process</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-400">
                A proven methodology that ensures your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Process Timeline Line */}
                <div className="hidden lg:block absolute left-8 top-16 bottom-16 w-0.5 bg-gray-300"></div>
                
                <div className="space-y-12">
                  {process.map((item, index) => (
                    <div 
                      key={index} 
                      className="process-step flex flex-col lg:flex-row gap-6 lg:gap-12 items-start animate-slideInUp"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex-shrink-0 flex items-center gap-6">
                        <div className="process-step-number relative w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {item.step}
                          {/* Connecting dot for timeline */}
                          <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-900 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-black transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex-shrink-0 ml-4">
                            {index === 0 && <Palette className="w-6 h-6 text-blue-600" />}
                            {index === 1 && <Code className="w-6 h-6 text-green-600" />}
                            {index === 2 && <Zap className="w-6 h-6 text-purple-600" />}
                            {index === 3 && <CheckCircle className="w-6 h-6 text-orange-600" />}
                            {index === 4 && <Users className="w-6 h-6 text-red-600" />}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">
                          {item.description}
                        </p>

                        {/* Process highlights */}
                        <div className="flex flex-wrap gap-2">
                          {index === 0 && ['Requirements Analysis', 'Project Scope', 'Timeline Planning'].map((highlight, hIndex) => (
                            <span key={hIndex} className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                              {highlight}
                            </span>
                          ))}
                          {index === 1 && ['UI/UX Design', 'Wireframes', 'Prototypes'].map((highlight, hIndex) => (
                            <span key={hIndex} className="text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-200">
                              {highlight}
                            </span>
                          ))}
                          {index === 2 && ['Clean Code', 'Best Practices', 'Performance'].map((highlight, hIndex) => (
                            <span key={hIndex} className="text-xs px-3 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-200">
                              {highlight}
                            </span>
                          ))}
                          {index === 3 && ['Quality Assurance', 'Bug Testing', 'Deployment'].map((highlight, hIndex) => (
                            <span key={hIndex} className="text-xs px-3 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-200">
                              {highlight}
                            </span>
                          ))}
                          {index === 4 && ['Maintenance', 'Updates', '24/7 Support'].map((highlight, hIndex) => (
                            <span key={hIndex} className="text-xs px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-200">
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-6 flex items-center gap-2">
                          <span className="text-sm text-gray-500">Step {index + 1} of {process.length}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-1">
                            <div 
                              className="bg-gray-900 h-1 rounded-full transition-all duration-1000"
                              style={{ width: `${((index + 1) / process.length) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process CTA */}
            <div className="mt-16 text-center animate-fadeInUp animate-delay-800">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss your project and see how my proven process can bring your vision to life.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-black transition-colors shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6 animate-fadeInUp">
                <MessageCircle className="w-4 h-4" />
                Common Questions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp animate-delay-200">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-400">
                Get answers to the most common questions about my services, process, and pricing.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "What's included in your web development service?",
                    answer: "My web development service includes custom design, responsive development, SEO optimization, performance optimization, cross-browser compatibility, content management setup, and 3 months of free support after launch."
                  },
                  {
                    question: "How long does a typical project take?",
                    answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, e-commerce platforms take 4-8 weeks, and custom applications can take 8-16 weeks. I provide detailed timelines during the planning phase."
                  },
                  {
                    question: "Do you provide ongoing support and maintenance?",
                    answer: "Yes! I offer comprehensive maintenance packages starting at $500/month, including regular updates, security patches, performance optimization, content updates, and technical support."
                  },
                  {
                    question: "Can you work with my existing website?",
                    answer: "Absolutely! I can enhance, redesign, or add new features to existing websites. I work with all major platforms including WordPress, Shopify, custom PHP applications, and modern JavaScript frameworks."
                  },
                  {
                    question: "What's your payment structure?",
                    answer: "I typically work with a 50% upfront payment and 50% upon completion. For larger projects, we can arrange milestone-based payments. I accept bank transfers, PayPal, and major credit cards."
                  },
                  {
                    question: "Do you handle hosting and domain setup?",
                    answer: "Yes, I can help you choose and set up appropriate hosting solutions and domain registration. I work with various hosting providers and can recommend the best option for your specific needs and budget."
                  },
                  {
                    question: "Will my website be mobile-friendly?",
                    answer: "All websites I develop are fully responsive and mobile-optimized. I test across multiple devices and browsers to ensure perfect functionality and appearance on all screen sizes."
                  },
                  {
                    question: "Can you help with SEO and digital marketing?",
                    answer: "I implement basic SEO best practices in all websites, including proper meta tags, site structure, and performance optimization. For advanced SEO and digital marketing, I can recommend trusted partners."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="faq-item border border-gray-200 rounded-2xl overflow-hidden animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                    </button>
                    <div className={`faq-content transition-all duration-300 ${
                      openFAQ === index ? 'max-h-96 opacity-100 open' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ CTA */}
              <div className="mt-12 text-center">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Still have questions?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    I'm here to help! Feel free to reach out with any specific questions about your project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contact Me
                    </a>
                    <a
                      href="mailto:renie@example.com"
                      className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 mb-6 animate-fadeInUp">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                Client Feedback
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp animate-delay-200">
                Client Testimonials
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-400">
                Don't just take my word for it. Here's what my clients say about working with me.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-scaleIn"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Stats */}
            <div className="mt-16 text-center animate-fadeInUp animate-delay-600">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wider">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wider">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">5.0</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wider">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wider">Repeat Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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