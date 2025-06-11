import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
      type: "Part-time",
      image: "/images/iphone-16-pro-dOqyn3Jzlau4eqZ0.avif"
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Freelancer",
      period: "2024 - 2025",
      description: [
        "Developed custom web and mobile applications for diverse clients across multiple industries",
        "Built responsive websites using modern frameworks and ensured cross-browser compatibility",
        "Integrated third-party APIs and payment gateways for e-commerce and business applications",
        "Collaborated with clients to gather requirements and deliver solutions that exceeded expectations",
        "Managed multiple projects simultaneously while maintaining high code quality and meeting deadlines",
        "Provided ongoing maintenance and support for deployed applications"
      ],
      tech: ["React", "Node.js", "JavaScript", "PHP", "MySQL", "WordPress", "Figma"],
      type: "Contract"
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
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
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
                          className="px-3 py-1 bg-cyber-gray border border-sky-400 text-sky-400 text-sm rounded hover:bg-sky-400/10 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image section */}
                  {experience.image && (
                    <div className="lg:w-2/5">
                      <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                        <Image
                          src={experience.image}
                          alt={`${experience.company} application`}
                          fill
                          className="object-contain rounded-lg"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/20 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                  )}
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