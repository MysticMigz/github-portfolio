import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Neural Network Dashboard",
      description: "A real-time AI monitoring system with cyberpunk aesthetics and data visualization.",
      tech: ["React", "Next.js", "D3.js", "WebGL"],
      status: "ACTIVE"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-cyber-dark/80 border-2 border-cyber-blue/50 rounded-lg p-6 h-full hover:border-cyber-blue transition-all duration-300 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-cyber-blue group-hover:text-cyber-pink transition-colors">
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

                <div className="flex space-x-4">
                  <button className="cyber-button text-sm">
                    View Code
                  </button>
                  <button 
                    className="cyber-button text-sm"
                    style={{
                      borderColor: '#ff00ff',
                      color: '#ff00ff',
                      boxShadow: '0 0 10px #ff00ff',
                    }}
                  >
                    Live Demo
                  </button>
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