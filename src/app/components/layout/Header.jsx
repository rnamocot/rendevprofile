'use client';
import { useState, useEffect } from 'react'; 
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8 h-16">
        <div className="flex items-center space-x-3">
          <Image 
            src="/logo.PNG" 
            alt="Renie Namocot" 
            width={32} 
            height={32} 
            className="rounded-full"
          />
          <span className="font-bold text-lg text-gray-900">Renie</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/contact"
            className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle navigation"
        >
          <div className="w-5 h-5 relative">
            <span className={`absolute w-full h-0.5 bg-gray-900 transition-all duration-300 ${
              isOpen ? 'top-2 rotate-45' : 'top-1'
            }`} />
            <span className={`absolute w-full h-0.5 bg-gray-900 top-2 transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`absolute w-full h-0.5 bg-gray-900 transition-all duration-300 ${
              isOpen ? 'top-2 -rotate-45' : 'top-3'
            }`} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}
