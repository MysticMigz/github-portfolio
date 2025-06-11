import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Arsenal",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Backend Systems",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Kotlin", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 95 },
        { name: "Linux", level: 85 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">SKILLS.JSON</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-cyber-dark/80 border-2 border-cyber-blue/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-cyber-blue mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyber-pink text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-cyber-gray rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyber-blue to-cyber-pink relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-pink animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-cyber-purple mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-cyber-dark border-2 border-cyber-purple rounded-lg flex items-center justify-center text-cyber-purple font-bold text-xs"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 