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
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A selection of my recent projects showcasing different technologies 
            and approaches to solving complex problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-colors duration-200"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-900" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
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