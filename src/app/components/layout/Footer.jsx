'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/renie',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/renie',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:rnamocotdev@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Renie Namocot</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-stack developer creating modern, scalable web applications 
              with exceptional user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg bg-gray-800 text-gray-300 transition-colors duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>Available for remote work worldwide</p>
              <p>
                <a 
                  href="mailto:rnamocotdev@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  rnamocotdev@gmail.com
                </a>
              </p>
              <p className="text-sm">Response within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            � {currentYear} Renie Namocot. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}