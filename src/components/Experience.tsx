import { motion } from 'framer-motion';
import Link from 'next/link';

const Experience = () => {
  const experiences = [
    {
      title: "Co-Founder & Lead Developer",
      company: "Spayce",
      companyUrl: "https://www.spaycesocial.com",
      period: "2025 - Present",
      description: [
        "Co-founded innovative technology startup focused on developing cutting-edge mobile and web applications",
        "Led full-stack development of the core application using modern technologies and best practices",
        "Architected scalable backend systems with REST API integration and database optimization",
        "Implemented secure user authentication, payment processing, and real-time features",
        "Managed product development lifecycle from conception to deployment and maintenance",
        "Collaborated with team members on UI/UX design and business strategy decisions"
      ],
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "REST API", "JWT", "Git"],
      type: "Full-time"
    },
    {
      title: "Previous Job Title",
      company: "Previous Company",
      period: "Month Year - Month Year",
      description: [
        "Add your key responsibilities and achievements here",
        "Describe the technologies you used and projects you worked on",
        "Highlight your impact and contributions to the team/company",
        "Include any notable accomplishments or metrics"
      ],
      tech: ["Technology 1", "Technology 2", "Technology 3"],
      type: "Contract"
    },
    {
      title: "Another Position",
      company: "Another Company",
      period: "Month Year - Month Year",
      description: [
        "Add your key responsibilities and achievements here",
        "Describe the technologies you used and projects you worked on",
        "Highlight your impact and contributions to the team/company",
        "Include any notable accomplishments or metrics"
      ],
      tech: ["Technology 1", "Technology 2", "Technology 3"],
      type: "Internship"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-500/20 text-green-400 border-green-400';
      case 'Contract':
        return 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue';
      case 'Part-time':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400';
      case 'Internship':
        return 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple';
      default:
        return 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink';
    }
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">EXPERIENCE.LOG</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-cyber-blue to-cyber-pink opacity-50"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-cyber-blue rounded-full border-2 border-cyber-dark shadow-lg shadow-cyber-blue/50"></div>
              
              <div className="ml-16 bg-cyber-dark/80 border-2 border-cyber-blue/50 rounded-lg p-6 backdrop-blur-sm hover:border-cyber-blue transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyber-blue mb-2">
                      {experience.title}
                    </h3>
                    {experience.companyUrl ? (
                      <Link
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-cyber-pink mb-2 hover:text-cyber-blue transition-colors duration-300 inline-flex items-center group"
                      >
                        {experience.company}
                        <svg
                          className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <h4 className="text-xl text-cyber-pink mb-2">
                        {experience.company}
                      </h4>
                    )}
                    <p className="text-gray-400 text-sm">
                      {experience.period}
                    </p>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded border ${getTypeColor(experience.type)} mt-4 lg:mt-0`}>
                    {experience.type}
                  </span>
                </div>

                <ul className="text-gray-300 mb-6 space-y-2">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-cyber-blue mr-3 mt-1">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyber-gray border border-cyber-purple text-cyber-purple text-sm rounded hover:bg-cyber-purple/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-8">
            Ready to add your expertise to my team?
          </p>
          <button className="cyber-button">
            Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 