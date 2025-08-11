'use client';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'EAS - Estate Agency System',
      description: 'Comprehensive estate agency management platform with property listings, client management, and transaction tracking.',
      image: '/images/projects/eas.png',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'PHP'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'NXL Digital - Digital Marketing Platform',
      description: 'Full-featured digital marketing platform with campaign management, analytics, and client reporting.',
      image: '/images/projects/nxldigital.png',
      technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Zendz Tools - Development Toolkit',
      description: 'Comprehensive development toolkit with code generators, API testing, and project management features.',
      image: '/images/projects/zendztools.png',
      technologies: ['Laravel', 'React', 'TypeScript', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with Shopify integration, custom checkout flow, and inventory management.',
      image: '/images/projects/ecommerce.png',
      technologies: ['Shopify', 'React', 'Node.js', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'WordPress Blog System',
      description: 'Custom WordPress theme with Elementor integration, SEO optimization, and content management system.',
      image: '/images/projects/wordpress.png',
      technologies: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Real Estate Portal',
      description: 'Property listing platform with advanced search, user profiles, and integrated payment processing.',
      image: '/images/projects/realestate.png',
      technologies: ['Laravel', 'React', 'PostgreSQL', 'Cloudflare'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A selection of my recent projects showcasing different technologies 
            and approaches to solving complex problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-colors duration-200"></div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={project.liveUrl}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-3 h-3 text-gray-900" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}