import { motion } from 'framer-motion';
import Carousel from './Carousel';
import Link from 'next/link';

const Projects = () => {
  const patchPayImages = [
    '/images/projects/Screenshot 2025-05-04 114222.png',
    '/images/projects/Screenshot 2025-05-04 114239.png',
    '/images/projects/Screenshot 2025-05-04 114613.png',
    '/images/projects/Screenshot 2025-05-04 115401.png',
    '/images/projects/Screenshot 2025-05-04 115527.png',
    '/images/projects/Screenshot 2025-05-04 115601.png',
    '/images/projects/Screenshot 2025-05-04 115726.png',
    '/images/projects/Screenshot 2025-05-04 115825.png',
    '/images/projects/Screenshot 2025-05-04 121658.png',
    '/images/projects/Screenshot 2025-05-04 121750.png',
    '/images/projects/Screenshot 2025-05-04 121811.png',
    '/images/projects/Screenshot 2025-05-04 122012.png',
    '/images/projects/Screenshot 2025-05-04 122040.png',
    '/images/projects/Screenshot 2025-05-04 122923.png',
    '/images/projects/Screenshot 2025-05-04 123136.png',
    '/images/projects/Screenshot 2025-05-04 123239.png',
    '/images/projects/Screenshot 2025-05-04 123301.png',
    '/images/projects/Screenshot 2025-05-04 123339.png',
    '/images/projects/Screenshot 2025-05-04 123605.png',
    '/images/projects/Screenshot 2025-05-04 123855.png',
    '/images/projects/Screenshot 2025-05-04 203814.png',
    '/images/projects/Screenshot 2025-05-04 213812.png',
    '/images/projects/Screenshot 2025-05-04 220021.png',
    '/images/projects/Screenshot 2025-05-04 221536.png',
    '/images/projects/Screenshot 2025-05-05 195926.png',
    '/images/projects/Screenshot 2025-05-05 200016.png',
    '/images/projects/Screenshot 2025-05-05 214349.png',
    '/images/projects/Screenshot 2025-05-06 003818.png',
    '/images/projects/Screenshot 2025-05-07 094007.png'
  ];

  const projects = [
    {
      title: "PatchPay Banking Application",
      description: "A modern banking platform with REST API integration, featuring Squad Gateway for payments and robust email verification. Built with security and user experience in mind.",
      tech: ["React", "Node.js", "REST API", "Squad Gateway", "JWT", "PostgreSQL"],
      status: "DEPLOYED",
      images: patchPayImages
    },
    {
      title: "Quantum Commerce Platform",
      description: "E-commerce platform with advanced encryption and blockchain integration.",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Blockchain"],
      status: "DEPLOYED"
    },
    {
      title: "Cyber Security Suite",
      description: "Comprehensive security monitoring tool with real-time threat detection.",
      tech: ["Python", "React", "MongoDB", "Machine Learning"],
      status: "BETA"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">PROJECTS.DIR</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-cyber-dark/80 border-2 border-cyber-blue/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-cyber-blue group-hover:text-cyber-pink transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded ${
                      project.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400 border border-green-400' :
                      project.status === 'DEPLOYED' ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyber-gray border border-cyber-purple text-cyber-purple text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.title === "PatchPay Banking Application" && (
                      <Link 
                        href="https://youtu.be/sS_fpO1nDqs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-button text-sm"
                        style={{
                          borderColor: '#ff00ff',
                          color: '#ff00ff',
                          boxShadow: '0 0 10px #ff00ff',
                        }}
                      >
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2">
                  {project.images && (
                    <Carousel images={project.images} autoPlayInterval={5000} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 