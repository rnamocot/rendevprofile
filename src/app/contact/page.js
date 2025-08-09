'use client';
import { Mail, MapPin, Phone, Send, Clock, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/layout/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('https://formspree.io/f/mgvzrwop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not specified',
          budget: formData.budget || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          projectType: formData.projectType,
          message: formData.message,
          _subject: `New project inquiry from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          timeline: '',
          projectType: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'There was an error submitting your message. Please try again or contact me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rnamocotdev@gmail.com',
      href: 'mailto:rnamocotdev@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+63 9613 868 728',
      href: 'tel:+639613868728',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote Worldwide',
      href: null,
      description: 'Available globally'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      href: null,
      description: 'Quick turnaround guaranteed'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex web applications can take 2-6 months. I always provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients worldwide and am comfortable with remote collaboration. I use various communication tools to ensure smooth project management across different time zones.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in Laravel, React, Next.js, Vue.js, Node.js, and various database technologies. I choose the best technology stack based on your specific project requirements.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Absolutely! I offer various maintenance and support packages to ensure your website or application continues to perform optimally after launch.'
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <main className="pt-16">
          <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Thank You!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Your message has been sent successfully. I'll get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    Back to Home
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Let's Work Together
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Get in touch and let's discuss 
                how I can help you create something amazing. I'm here to turn your vision into reality.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium block mb-1"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-gray-900 font-medium mb-1">{info.value}</div>
                  )}
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you need a consultation, want to start a project, or just have 
                    questions, I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">Let's Chat</h3>
                      <p className="text-gray-600 text-sm">
                        I'm available for video calls, phone conversations, or just a simple email exchange.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">Schedule a Call</h3>
                      <p className="text-gray-600 text-sm">
                        Prefer to talk? We can schedule a consultation call at your convenience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-gray-600 text-sm">
                        I typically respond to all inquiries within 24 hours, often much sooner.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">What to Include</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                      Project overview and goals
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                      Timeline and budget range
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                      Any specific requirements
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                      Questions you might have
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="<$5k">Less than $5,000</option>
                        <option value="$5k-$10k">$5,000 - $10,000</option>
                        <option value="$10k-$25k">$10,000 - $25,000</option>
                        <option value="$25k+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 ${
                          errors.projectType ? 'border-red-500' : 'border-gray-200'
                        }`}
                      >
                        <option value="">Select project type</option>
                        <option value="web-development">Web Development</option>
                        <option value="wordpress">WordPress Development</option>
                        <option value="shopify">Shopify Store</option>
                        <option value="ecommerce">E-commerce Store</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>}
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2months">1-2 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6months+">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  {errors.submit && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-sm text-red-600">{errors.submit}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 mt-4">
                    I'll get back to you within 24 hours with a detailed response and next steps.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Here are some common questions I receive. Don't see your question? Feel free to ask!
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}