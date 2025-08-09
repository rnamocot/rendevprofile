'use client';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    if (!formData.subject) newErrors.subject = 'Project type is required';
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
    
    // Check if Formspree is configured
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // For development/testing - simulate form submission
      console.log('Development mode - form data:', formData);
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      const formspreeUrl = 'https://formspree.io/f/mgvzrwop';
      
      // Check if form ID is still placeholder
      if (formspreeUrl.includes('YOUR_FORM_ID')) {
        throw new Error('Form not configured - please contact directly');
      }

      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
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
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.text();
        console.error('Response error:', response.status, errorData);
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.message.includes('not configured')) {
        setErrors({ submit: 'Form is being configured. Please contact me directly at rnamocotdev@gmail.com or call +639 613868728' });
      } else {
        setErrors({ submit: `Unable to send message right now. Please contact me directly at rnamocotdev@gmail.com or try again later.` });
      }
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
      href: 'mailto:rnamocotdev@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+639 613868728',
      href: 'tel:+639613868728'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote Worldwide',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your next project? Get in touch and let's discuss 
            how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a consultation or want to start a project, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">
                      {info.title}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-600">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-2">
                Response time
              </div>
              <div className="font-medium text-gray-900">
                Within 24 hours
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
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

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 ${
                    errors.subject ? 'border-red-500' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select a project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="shopify">Shopify Store</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
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
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              {errors.submit && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-600">{errors.submit}</p>
                </div>
              )}

              {isSubmitted && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-sm text-green-600">Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-200"
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
  );
}