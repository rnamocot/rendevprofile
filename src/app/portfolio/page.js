'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Calendar, Tag, Search, Filter, Grid, List, Eye, Github, Star, Users, X, Check, Clock, Code, Zap } from 'lucide-react';
import Footer from '../components/layout/Footer';
import './animations.css';


export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
      liveUrl: 'https://overallperthguttercleaning.com.au/',
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
      liveUrl: 'https://nxldigital.com/',
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
      liveUrl: 'https://zendztools.com/',
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

  let baseFilteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Apply search filter
  if (searchTerm) {
    baseFilteredProjects = baseFilteredProjects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
    
  const filteredProjects = sortProjectsByPriority([...baseFilteredProjects]);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Technologies Used' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <>
      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            {/* Modal Header */}
            <div className="relative">
              <div className="aspect-[16/9] relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl"></div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
                >
                  <X className="w-5 h-5 text-gray-900" />
                </button>
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    {selectedProject.featured && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                        <Star className="w-4 h-4" />
                        Featured
                      </span>
                    )}
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3">{selectedProject.title}</h2>
                  <p className="text-lg text-white/90 max-w-2xl">{selectedProject.longDescription}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6 text-green-600" />
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6 text-blue-600" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-600" />
                  Project Highlights
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Calendar className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{selectedProject.year}</div>
                    <div className="text-gray-600 text-sm">Completed</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Tag className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{selectedProject.category}</div>
                    <div className="text-gray-600 text-sm">Category</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Clock className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">4-8</div>
                    <div className="text-gray-600 text-sm">Weeks Duration</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
                {selectedProject.githubUrl !== '#' && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="sm:w-auto px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6 animate-fadeInUp">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Featured Work & Projects
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block animate-fadeInLeft">My</span>
                <span className="block text-black animate-fadeInLeft animate-delay-200">Portfolio</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animate-delay-400">
                A showcase of my recent work featuring web applications, SaaS platforms, 
                and custom solutions built with modern technologies and best practices.
              </p>

              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-8 animate-slideInUp animate-delay-600">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects, technologies, categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg bg-white border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-fadeInUp animate-delay-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 uppercase tracking-wider text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-800">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">View:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6">
                <Filter className="w-4 h-4" />
                Filter & Browse
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {searchTerm 
                  ? `Found ${filteredProjects.length} projects matching "${searchTerm}"`
                  : `Explore ${filteredProjects.length} projects across different categories`
                }
              </p>
            </div>

            {/* Enhanced Category Filter */}
            <div className="mb-16">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map((category, index) => {
                  const projectCount = category === 'All' 
                    ? projects.length 
                    : projects.filter(p => p.category === category).length;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`filter-btn group px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                        activeCategory === category
                          ? 'bg-gray-900 text-white shadow-lg' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {category}
                        <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                          activeCategory === category 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                        }`}>
                          {projectCount}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
              
              {/* Results Summary */}
              <div className="text-center">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> projects
                  {activeCategory !== 'All' && <span> in <span className="font-semibold text-gray-900">{activeCategory}</span></span>}
                </p>
              </div>
            </div>

            {/* Enhanced Projects Grid */}
            <div className={`${viewMode === 'grid' ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}`}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden relative ${
                      viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Enhanced Image Section */}
                    <div className={`relative overflow-hidden bg-gray-100 ${
                      viewMode === 'list' ? 'lg:w-80 aspect-[4/3] lg:aspect-auto' : 'aspect-[4/3]'
                    }`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      
                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                      
                      {/* Floating Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-110"
                          aria-label="View live project"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-900" />
                        </a>
                        {project.githubUrl !== '#' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-110"
                            aria-label="View source code"
                          >
                            <Github className="w-4 h-4 text-gray-900" />
                          </a>
                        )}
                      </div>
                      
                      {/* Enhanced Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-bold shadow-lg">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex items-center justify-between text-xs text-white">
                          <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                            {project.year}
                          </span>
                          <button 
                            onClick={() => setSelectedProject(project)}
                            className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full font-medium hover:bg-black/80 transition-colors flex items-center gap-1"
                          >
                            <Eye className="w-3 h-3" />
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Content Section */}
                    <div className={`p-6 flex-1 ${viewMode === 'list' ? 'lg:p-8' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className={`font-bold text-gray-900 group-hover:text-black transition-colors ${
                          viewMode === 'list' ? 'text-xl lg:text-2xl' : 'text-lg'
                        }`}>
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className={`text-gray-600 mb-6 leading-relaxed ${
                        viewMode === 'list' ? 'line-clamp-3 text-base' : 'text-sm line-clamp-2'
                      }`}>
                        {viewMode === 'list' ? project.longDescription : project.description}
                      </p>
                      
                      {/* Enhanced Features Section */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider mb-3">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, viewMode === 'list' ? 4 : 2).map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
                              {feature}
                            </span>
                          ))}
                          {project.features.length > (viewMode === 'list' ? 4 : 2) && (
                            <span className="text-xs px-3 py-1 bg-gray-50 text-gray-500 rounded-full font-medium border border-gray-200">
                              +{project.features.length - (viewMode === 'list' ? 4 : 2)} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enhanced Technologies Section */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, viewMode === 'list' ? 5 : 3).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs px-3 py-1 bg-gray-50 text-gray-700 rounded-full border border-gray-200 font-medium hover:bg-gray-100 hover:border-gray-300 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > (viewMode === 'list' ? 5 : 3) && (
                            <span className="text-xs px-3 py-1 bg-gray-50 text-gray-500 rounded-full border border-gray-200">
                              +{project.technologies.length - (viewMode === 'list' ? 5 : 3)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className={`flex gap-3 ${viewMode === 'list' ? 'flex-col sm:flex-row' : ''}`}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                            viewMode === 'list' ? 'flex-1' : 'w-full'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live Project
                        </a>
                        {viewMode === 'list' && (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:shadow-lg flex-1"
                          >
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-gray-900 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="max-w-md mx-auto">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
                    <p className="text-gray-600 mb-6">
                      {searchTerm 
                        ? `No projects match "${searchTerm}". Try different keywords or browse categories.`
                        : 'No projects available in this category.'
                      }
                    </p>
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6">
                <Users className="w-4 h-4" />
                Client Feedback
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real feedback from clients who have worked with me on various projects across different industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, Kavalri Jewelry",
                  project: "E-commerce Platform",
                  testimonial: "The Shopify store exceeded our expectations. The custom checkout process and premium design perfectly match our brand. Sales increased by 40% within the first month.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Founder, Viva Wellness",
                  project: "Healthcare Platform",
                  testimonial: "Outstanding work on our IV therapy booking system. The Square integration works flawlessly, and patients love the easy booking process. Highly professional throughout.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                  name: "Jennifer Walsh",
                  role: "Practice Manager, Choctaw Dental",
                  project: "Dental Practice Website",
                  testimonial: "The appointment booking system has streamlined our operations significantly. Patients can easily schedule online, and the mobile-responsive design looks fantastic.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                  name: "Robert Thompson",
                  role: "Director, Neon Intelligence",
                  project: "Construction Management",
                  testimonial: "The custom WordPress plugins developed for our project tracking needs work perfectly. The team understood our construction industry requirements completely.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                  name: "Amanda Davis",
                  role: "Marketing Director, NXL Digital",
                  project: "Marketing Platform",
                  testimonial: "The analytics dashboard and campaign management features have transformed how we serve our clients. The platform is intuitive and powerful. Excellent delivery!",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                },
                {
                  name: "David Miller",
                  role: "Operations Manager, NAFDA",
                  project: "B2B E-commerce",
                  testimonial: "The custom WooCommerce setup with ACF fields perfectly handles our complex product specifications. Inventory management through webhooks works seamlessly.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.testimonial}"</p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Stats */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider">Repeat Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">24hr</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider">Avg Response Time</div>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Projects</h3>
                <p className="text-gray-600 leading-relaxed">
                  Please note that some projects cannot be showcased publicly due to client privacy agreements and confidentiality requirements. 
                  The portfolio above represents a selection of work where clients have provided permission to display their projects.
                </p>
              </div>
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