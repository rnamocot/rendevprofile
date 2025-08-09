'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import Footer from '../components/layout/Footer';


export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'Kavalri - Jewelry Shop',
      description: 'Premium Shopify jewelry store with custom theme and seamless checkout experience.',
      longDescription: 'A luxury jewelry e-commerce platform built on Shopify with custom Liquid theme development. Features include custom checkout processes, payment gateway integrations, and sophisticated product showcase functionality designed for high-end jewelry retail.',
      image: '/images/projects/kavalri.png',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'API Integration'],
      category: 'E-commerce',
      year: '2024',
      liveUrl: 'https://kavalri.com.au/',
      githubUrl: '#',
      featured: true,
      features: [
        'Custom Shopify Theme',
        'Custom Checkout Process',
        'Payment Gateway Integration',
        'Product Showcase',
        'Mobile Responsive',
        'SEO Optimized'
      ]
    },
    {
      title: 'Viva Wellness - Drip Therapy',
      description: 'WooCommerce-based wellness platform with Square Payments integration for IV therapy services.',
      longDescription: 'A comprehensive wellness platform for IV drip therapy services built with WordPress and WooCommerce. Features Square Payments integration, custom booking systems, and service management tailored for medical wellness providers.',
      image: '/images/projects/viva-wellness.png',
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Square API', 'PHP'],
      category: 'Healthcare',
      year: '2024',
      liveUrl: 'https://vivawellnessdrip.com/',
      githubUrl: '#',
      featured: true,
      features: [
        'Service Booking System',
        'Square Payments Integration',
        'Custom WooCommerce Setup',
        'Appointment Management',
        'Patient Portal',
        'Medical Service Showcase'
      ]
    },
    {
      title: 'Choctaw Dental - Dental Practice',
      description: 'Custom dental practice website with appointment booking and patient management features.',
      longDescription: 'A modern dental practice website built with custom HTML, CSS, and JavaScript. Includes patient portal integration, appointment scheduling system, and comprehensive service information designed to enhance patient experience and practice efficiency.',
      image: '/images/projects/choctowdental.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'Responsive Design'],
      category: 'Healthcare',
      year: '2024',
      liveUrl: 'https://choctawdental.com/',
      githubUrl: '#',
      featured: true,
      features: [
        'Appointment Scheduling',
        'Patient Portal',
        'Service Information',
        'Contact Management',
        'Responsive Design',
        'SEO Optimized'
      ]
    },
    {
      title: 'Neon Intelligence - Construction Operations',
      description: 'WordPress-based construction management platform with custom plugins and API integrations.',
      longDescription: 'A comprehensive construction operations management system built on WordPress with Elementor. Features custom plugin development for project tracking, resource management, and client communication specifically designed for construction industry needs.',
      image: '/images/projects/neonintelligence.png',
      technologies: ['WordPress', 'Elementor', 'Custom Plugins', 'PHP', 'API Integration'],
      category: 'Construction',
      year: '2024',
      liveUrl: 'https://neointelligence.com.au/',
      githubUrl: '#',
      featured: false,
      features: [
        'Project Management',
        'Resource Tracking',
        'Client Communication',
        'Custom WordPress Plugins',
        'API Integrations',
        'Reporting Dashboard'
      ]
    },
    {
      title: 'AAA Build - Luxury Bathroom Renovations',
      description: 'WordPress Elementor website for premium bathroom renovation services with custom plugins.',
      longDescription: 'A sophisticated website for luxury bathroom renovation services built with WordPress and Elementor. Features custom plugin development for project galleries, quote requests, and service showcase designed to attract high-end renovation clients.',
      image: '/images/projects/aabuild.png',
      technologies: ['WordPress', 'Elementor', 'Custom Plugins', 'PHP', 'JavaScript'],
      category: 'Construction',
      year: '2024',
      liveUrl: 'https://aaabuild.com.au/',
      githubUrl: '#',
      featured: false,
      features: [
        'Project Gallery',
        'Quote Request System',
        'Service Showcase',
        'Before/After Galleries',
        'Custom WordPress Development',
        'Mobile Responsive'
      ]
    },
    {
      title: 'EAS Trade - Electrical & Solar Services',
      description: 'WordPress platform for electrical, air conditioning, and solar services with custom functionality.',
      longDescription: 'A comprehensive service website for electrical, air conditioning, and solar installation services. Built with WordPress and Elementor, featuring custom plugins for service booking, quote generation, and customer management.',
      image: '/images/projects/eas.png',
      technologies: ['WordPress', 'Elementor', 'Custom Plugins', 'PHP', 'API Integration'],
      category: 'Service Business',
      year: '2024',
      liveUrl: 'https://eas.trade/',
      githubUrl: '#',
      featured: false,
      features: [
        'Service Booking',
        'Quote Generation',
        'Customer Management',
        'Service Area Mapping',
        'Custom Plugin Development',
        'Lead Generation Forms'
      ]
    },
    {
      title: 'NAFDA - Foodservice Distributor',
      description: 'WooCommerce platform for foodservice distribution with custom fields and webhook integrations.',
      longDescription: 'A specialized e-commerce platform for foodservice distribution built with WooCommerce and Elementor. Features custom ACF fields for product specifications, webhook integrations for inventory management, and B2B focused functionality.',
      image: '/images/projects/nafda.png',
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'ACF', 'Webhooks', 'PHP'],
      category: 'E-commerce',
      year: '2024',
      liveUrl: 'https://nafda.com.au/',
      githubUrl: '#',
      featured: false,
      features: [
        'B2B E-commerce',
        'Custom Product Fields',
        'Inventory Management',
        'Webhook Integrations',
        'Bulk Ordering',
        'Customer Accounts'
      ]
    },
    {
      title: 'Seaway - Global Logistics',
      description: 'Webflow-based logistics platform for global shipping and freight services.',
      longDescription: 'A professional logistics website built with Webflow for global shipping and freight services. Features responsive design, service showcases, and optimized user experience for international logistics operations.',
      image: '/images/projects/seaway.png',
      technologies: ['Webflow', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'Logistics',
      year: '2024',
      liveUrl: 'https://www.seaway.com.au/',
      githubUrl: '#',
      featured: false,
      features: [
        'Service Showcase',
        'Global Reach Mapping',
        'Quote Request Forms',
        'Responsive Design',
        'SEO Optimization',
        'Professional Layout'
      ]
    },
    {
      title: 'Premium Graduate - Vocational Placement',
      description: 'Webflow platform for vocational education and job placement services.',
      longDescription: 'A modern vocational placement platform built with Webflow, designed to connect students with career opportunities. Features course information, placement tracking, and career guidance resources.',
      image: '/images/projects/premiumgrad.png',
      technologies: ['Webflow', 'CSS', 'JavaScript', 'Form Integration'],
      category: 'Education',
      year: '2024',
      liveUrl: 'https://www.premiumgraduate.com.au/',
      githubUrl: '#',
      featured: false,
      features: [
        'Course Information',
        'Placement Tracking',
        'Career Guidance',
        'Student Portal',
        'Application Forms',
        'Success Stories'
      ]
    },
    {
      title: 'Cloud Blvd - E-commerce Platform',
      description: 'Shopify store with custom Liquid theme and advanced checkout functionality.',
      longDescription: 'A modern e-commerce platform built on Shopify with custom Liquid theme development. Features advanced checkout processes, API integrations, and optimized user experience for online retail.',
      image: '/images/projects/cloulblvd.png',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'API Integration', 'CSS'],
      category: 'E-commerce',
      year: '2024',
      liveUrl: 'https://cloudblvd.com.au/',
      githubUrl: '#',
      featured: false,
      features: [
        'Custom Shopify Theme',
        'Advanced Checkout',
        'API Integrations',
        'Product Management',
        'Payment Processing',
        'Mobile Optimization'
      ]
    },
    {
      title: 'Gutter Cleaning Services',
      description: 'WordPress Elementor platform for professional gutter cleaning and maintenance services.',
      longDescription: 'A service-focused website for professional gutter cleaning built with WordPress and Elementor. Features custom plugins for booking systems, service area management, and customer communication tools.',
      image: '/images/projects/guttercleaning.png',
      technologies: ['WordPress', 'Elementor', 'Custom Plugins', 'PHP', 'API Integration'],
      category: 'Service Business',
      year: '2024',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      features: [
        'Service Booking System',
        'Area Coverage Mapping',
        'Quote Calculator',
        'Before/After Photos',
        'Customer Reviews',
        'Maintenance Scheduling'
      ]
    },
    {
      title: 'NXL Digital - Marketing Platform',
      description: 'Digital marketing platform with campaign management and analytics dashboard.',
      longDescription: 'A comprehensive digital marketing platform built with modern web technologies. Features campaign management, analytics tracking, client reporting, and social media integration designed for marketing agencies.',
      image: '/images/projects/nxldigital.png',
      technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      category: 'SaaS Platform',
      year: '2024',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      features: [
        'Campaign Management',
        'Analytics Dashboard',
        'Client Reporting',
        'Social Media Integration',
        'Performance Tracking',
        'Multi-user Access'
      ]
    },
    {
      title: 'Zendz Tools - Developer Toolkit',
      description: 'Comprehensive development toolkit with code generation and project management features.',
      longDescription: 'A powerful development toolkit designed for developer productivity. Features code generators, API testing tools, project templates, and collaboration features built with modern web technologies.',
      image: '/images/projects/zendztools.png',
      technologies: ['Laravel', 'React', 'TypeScript', 'MySQL', 'Redis'],
      category: 'Developer Tools',
      year: '2023',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      features: [
        'Code Generation',
        'API Testing Suite',
        'Project Templates',
        'Team Collaboration',
        'Database Management',
        'Performance Monitoring'
      ]
    }
  ];

  const categories = ['All', 'E-commerce', 'Healthcare', 'Construction', 'Service Business', 'Logistics', 'Education', 'SaaS Platform', 'Developer Tools'];

  // Priority projects to show at the top
  const priorityProjects = ['Zendz Tools - Developer Toolkit', 'Premium Graduate - Vocational Placement', 'Cloud Blvd - E-commerce Platform'];
  
  const sortProjectsByPriority = (projectList) => {
    return projectList.sort((a, b) => {
      const aIndex = priorityProjects.indexOf(a.title);
      const bIndex = priorityProjects.indexOf(b.title);
      
      // If both projects are priority projects, sort by their priority order
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      
      // If only 'a' is a priority project, put it first
      if (aIndex !== -1) {
        return -1;
      }
      
      // If only 'b' is a priority project, put it first
      if (bIndex !== -1) {
        return 1;
      }
      
      // If neither are priority projects, maintain original order
      return 0;
    });
  };

  const baseFilteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  const filteredProjects = sortProjectsByPriority([...baseFilteredProjects]);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Technologies Used' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                My Portfolio
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                A showcase of my recent work featuring web applications, SaaS platforms, 
                and custom solutions built with modern technologies and best practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-24">
              {filteredProjects.map((project, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-colors duration-300"></div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a
                            href={project.liveUrl}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                            aria-label="View live project"
                          >
                            <ExternalLink className="w-5 h-5 text-gray-900" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <Tag className="w-4 h-4" />
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div>
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technologies I Use</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                I work with modern technologies and frameworks to deliver high-quality, 
                scalable solutions that meet your business needs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', color: '#FF2D20' },
                { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
                { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: '#000000' },
                { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
                { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg', color: '#21759B' },
                { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg', color: '#7AB55C' },
                { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933' },
                { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
                { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', color: '#777BB4' },
                { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
                { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1' },
                { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#336791' },
                { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248' },
                { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#2496ED' },
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032' },
                { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: '#E34F26' },
                { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: '#1572B6' }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-200 group">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-10 h-10 transition-transform duration-200 group-hover:scale-110"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                    />
                  </div>
                  <span className="font-medium text-gray-900 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Like What You See?</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              I'm available for both short-term projects and long-term collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-xl font-medium hover:border-gray-400 transition-colors duration-200"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}