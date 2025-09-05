'use client';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'Kavalri - Jewelry Shop',
      description: 'Premium Shopify jewelry store with custom theme and seamless checkout experience.',
      image: '/images/projects/kavalri.png',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
      liveUrl: 'https://kavalri.com.au/',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Viva Wellness - Drip Therapy',
      description: 'WooCommerce-based wellness platform with Square Payments integration for IV therapy services.',
      image: '/images/projects/viva-wellness.png',
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Square API'],
      liveUrl: 'https://vivawellnessdrip.com/',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Choctaw Dental - Dental Practice',
      description: 'Custom dental practice website with appointment booking and patient management features.',
      image: '/images/projects/choctowdental.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'],
      liveUrl: 'https://choctawdental.com/',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'NXL Digital - Marketing Platform',
      description: 'Digital marketing platform with campaign management and analytics dashboard.',
      image: '/images/projects/nxldigital.png',
      technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://nxldigital.com/',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'NAFDA - Foodservice Distributor',
      description: 'WooCommerce platform for foodservice distribution with custom fields and webhook integrations.',
      image: '/images/projects/nafda.png',
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'ACF'],
      liveUrl: 'https://nafda.com.au/',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Cloud Blvd - E-commerce Platform',
      description: 'Shopify store with custom Liquid theme and advanced checkout functionality.',
      image: '/images/projects/cloulblvd.png',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'API Integration'],
      liveUrl: 'https://cloudblvd.com.au/',
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
            <div key={index} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200 relative">
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-colors duration-200 pointer-events-none"></div>
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              {/* Button moved outside of image container */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                <a
                  href={project.liveUrl}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  aria-label="View live project"
                >
                  <ExternalLink className="w-3 h-3 text-gray-900" />
                </a>
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