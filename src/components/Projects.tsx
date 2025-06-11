import { motion } from 'framer-motion';
import Carousel from './Carousel';
import Link from 'next/link';

const Projects = () => {
  const patchPayImages = [
    '/images/project1/Screenshot 2025-05-04 114222.png',
    '/images/project1/Screenshot 2025-05-04 114239.png',
    '/images/project1/Screenshot 2025-05-04 114613.png',
    '/images/project1/Screenshot 2025-05-04 115401.png',
    '/images/project1/Screenshot 2025-05-04 115527.png',
    '/images/project1/Screenshot 2025-05-04 115601.png',
    '/images/project1/Screenshot 2025-05-04 115726.png',
    '/images/project1/Screenshot 2025-05-04 115825.png',
    '/images/project1/Screenshot 2025-05-04 121658.png',
    '/images/project1/Screenshot 2025-05-04 121750.png',
    '/images/project1/Screenshot 2025-05-04 121811.png',
    '/images/project1/Screenshot 2025-05-04 122012.png',
    '/images/project1/Screenshot 2025-05-04 122040.png',
    '/images/project1/Screenshot 2025-05-04 122923.png',
    '/images/project1/Screenshot 2025-05-04 123136.png',
    '/images/project1/Screenshot 2025-05-04 123239.png',
    '/images/project1/Screenshot 2025-05-04 123301.png',
    '/images/project1/Screenshot 2025-05-04 123339.png',
    '/images/project1/Screenshot 2025-05-04 123605.png',
    '/images/project1/Screenshot 2025-05-04 123855.png',
    '/images/project1/Screenshot 2025-05-04 203814.png',
    '/images/project1/Screenshot 2025-05-04 213812.png',
    '/images/project1/Screenshot 2025-05-04 220021.png',
    '/images/project1/Screenshot 2025-05-04 221536.png',
    '/images/project1/Screenshot 2025-05-05 195926.png',
    '/images/project1/Screenshot 2025-05-05 200016.png',
    '/images/project1/Screenshot 2025-05-05 214349.png',
    '/images/project1/Screenshot 2025-05-06 003818.png',
    '/images/project1/Screenshot 2025-05-07 094007.png'
  ];

  const lauraEmpowerFitImages = [
    '/images/project2/laura.png'
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
      title: "Laura Empower Fit",
      description: "A modern fitness and personal training website featuring responsive design, interactive carousel components, and professional branding. Built with clean UI/UX principles for optimal user engagement.",
      tech: ["React", "Next.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
      status: "DEPLOYED",
      images: lauraEmpowerFitImages
    },
    {
      title: "Flag Game",
      description: "An interactive geography quiz game where players guess countries by their flags. Features multiple difficulty levels, scoring system, and educational content to help users learn about world flags and countries. Built as a native Android application.",
      tech: ["Kotlin", "Android Studio", "Android SDK", "XML Layouts", "Material Design"],
      status: "DEPLOYED",
      video: "/videos/FlagGame.mp4"
    },
    {
      title: "Game AI Environment",
      description: "An intelligent game environment featuring AI-driven gameplay mechanics, adaptive difficulty systems, and machine learning algorithms. Demonstrates advanced AI implementation in interactive gaming scenarios with real-time decision making and player behavior analysis.",
      tech: ["Python", "TensorFlow", "Unity", "C#", "Machine Learning", "Neural Networks"],
      status: "ACTIVE"
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
                        className="px-3 py-1 bg-cyber-gray border border-sky-400 text-sky-400 text-sm rounded"
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
                    {project.title === "Flag Game" && (
                      <Link 
                        href="https://github.com/MysticMigz/FootballApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-button text-sm"
                        style={{
                          borderColor: '#00fff5',
                          color: '#00fff5',
                          boxShadow: '0 0 10px #00fff5',
                        }}
                      >
                        View Code
                      </Link>
                    )}
                    {project.title === "Game AI Environment" && (
                      <Link 
                        href="https://youtu.be/uKjFemZoi28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-button text-sm"
                        style={{
                          borderColor: '#9900ff',
                          color: '#9900ff',
                          boxShadow: '0 0 10px #9900ff',
                        }}
                      >
                        Watch Demo
                      </Link>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2">
                  {project.images && (
                    <Carousel images={project.images} autoPlayInterval={5000} />
                  )}
                  {project.video && (
                    <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden border-2 border-cyber-blue/50">
                      <video
                        controls
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        style={{
                          background: 'var(--color-cyber-dark)',
                        }}
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Cyberpunk overlay effects - reduced opacity so controls are visible */}
                      <div className="absolute inset-0 bg-cyber-dark/10 pointer-events-none" />
                      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
                      <div className="absolute inset-0 border border-cyber-blue/50 rounded-lg animate-pulse pointer-events-none" />
                    </div>
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