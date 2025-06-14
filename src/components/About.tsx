import { motion } from 'framer-motion';
import Image from 'next/image';

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
              Hi, I&apos;m Miguel Silva — a passionate and detail-driven professional dedicated to building meaningful digital experiences.
              With a strong foundation in Mobile App Development, e.g., software development, UI/UX design, digital marketing, I specialize in turning complex ideas into clean, functional, and impactful solutions.
              I thrive on solving problems, learning new technologies, and collaborating with others to create work that not only performs well but also inspires.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether it&apos;s developing scalable applications, designing intuitive interfaces, or crafting effective strategies, 
              I bring creativity, precision, and a deep commitment to quality to everything I do.
              Let&apos;s connect and create something remarkable together!
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
            className="relative flex justify-center"
          >
            <div className="relative group">
              {/* Cyberpunk border effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 border border-cyber-blue/50 rounded-2xl group-hover:border-cyber-blue transition-colors duration-300"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-cyber-dark bg-cyber-dark/50 backdrop-blur-sm">
                <Image
                  src="/images/about/profilephoto.jpg"
                  alt="Miguel Silva - Professional Photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                  priority
                />
                
                {/* Cyberpunk overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyber-pink rounded-full animate-pulse delay-500"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyber-blue opacity-70"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyber-pink opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyber-purple opacity-70"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyber-blue opacity-70"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border border-cyber-pink rotate-45 opacity-50"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyber-blue/30 rotate-12"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 