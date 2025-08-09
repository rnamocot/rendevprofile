'use client';
import { Code2, Database, Smartphone, Zap } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, Next.js, Vue.js, TypeScript with modern UI frameworks',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Laravel, Node.js, PHP with robust database design',
      technologies: ['Laravel', 'Node.js', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Smartphone,
      title: 'WordPress & Shopify Expert',
      description: 'Complete WordPress development with custom themes, plugins, and Shopify stores',
      technologies: ['WordPress', 'Shopify', 'WooCommerce', 'Custom Plugins', 'Theme Development', 'Liquid']
    },
    {
      icon: Zap,
      title: 'Performance & Optimization',
      description: 'SEO, Core Web Vitals, and scalable architectures',
      technologies: ['SEO', 'Performance', 'Scalability', 'Testing']
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            With 5+ years of experience in full-stack development, I specialize in creating 
            scalable web applications that deliver exceptional user experiences and drive business growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-gray-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-white text-gray-700 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            I'm available for both short-term projects and long-term collaborations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}