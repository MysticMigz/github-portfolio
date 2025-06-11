import { motion } from 'framer-motion';
import GlobVideo from './GlobVideo';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">ABOUT_ME.EXE</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-cyber-blue mb-4">Digital Architect / Software Engineer</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I’m Miguel Silva — a passionate and detail-driven professional dedicated to building meaningful digital experiences.
              With a strong foundation in Mobile App Development, e.g., software development, UI/UX design, digital marketing, I specialize in turning complex ideas into clean, functional, and impactful solutions.
              I thrive on solving problems, learning new technologies, and collaborating with others to create work that not only performs well but also inspires.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether it's developing scalable applications, designing intuitive interfaces, or crafting effective strategies, 
              I bring creativity, precision, and a deep commitment to quality to everything I do.
              Let’s connect and create something remarkable together!
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-cyber-dark border border-cyber-blue text-cyber-blue text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-cyber-dark border border-cyber-pink text-cyber-pink text-sm">
                Innovation Driver
              </span>
              <span className="px-4 py-2 bg-cyber-dark border border-cyber-purple text-cyber-purple text-sm">
                Code Artist
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GlobVideo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 