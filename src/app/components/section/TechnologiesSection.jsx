'use client';

export default function TechnologiesSection() {
  const techCategories = [
    {
      title: 'Frontend',
      description: 'Modern UI frameworks and libraries',
      technologies: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: '#000000' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend',
      description: 'Server-side technologies and frameworks',
      technologies: [
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', color: '#FF2D20' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', color: '#777BB4' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', color: '#FFCA28' }
      ]
    },
    {
      title: 'Database & Development Tools',
      description: 'Data storage and development environments',
      technologies: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#336791' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248' },
        { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg', color: '#3ECF8E' },
        { name: 'phpMyAdmin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1' }
      ]
    },
    {
      title: 'CMS & E-commerce',
      description: 'Content management and e-commerce platforms',
      technologies: [
        { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg', color: '#21759B' },
        { name: 'Elementor', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/elementor.svg', color: '#92003B' },
        { name: 'Divi', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg', color: '#8B4F9F' },
        { name: 'Webflow', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/webflow.svg', color: '#4353FF' },
        { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg', color: '#7AB55C' }
      ]
    },
    {
      title: 'DevOps & Tools',
      description: 'Development and deployment tools',
      technologies: [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#2496ED' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032' },
        { name: 'Cloudflare', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cloudflare.svg', color: '#F38020' },
        { name: 'Make.com', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/integromat.svg', color: '#6366F1' },
        { name: 'Swagger', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg', color: '#85EA2D' }
      ]
    },
    {
      title: 'Analytics & Marketing',
      description: 'Tracking and optimization tools',
      technologies: [
        { name: 'Google Analytics', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googleanalytics.svg', color: '#E37400' },
        { name: 'Google Tag Manager', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googletagmanager.svg', color: '#246FDB' },
        { name: 'DNS Management', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cloudflare.svg', color: '#F38020' }
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-700 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            Technology Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Tools & Technologies I Master
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building modern, scalable applications with the latest technologies 
            and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-sm transition-all duration-200 group">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
                        style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.1))' }}
                      />
                    </div>
                    <span className="font-medium text-gray-900 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              View My Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}