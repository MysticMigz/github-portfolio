import { motion } from 'framer-motion';

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
            <h3 className="text-3xl font-bold text-cyber-blue mb-4">Digital Architect</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer who thrives in the digital realm. 
              With expertise spanning from frontend interfaces to backend architectures, 
              I craft digital experiences that push the boundaries of what's possible.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey through the cyberpunk landscape of modern web development 
              has equipped me with cutting-edge skills in React, Next.js, Node.js, 
              and emerging technologies that shape tomorrow's web.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
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
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20 rounded-lg"></div>
              <div className="absolute inset-2 bg-cyber-dark border-2 border-cyber-blue rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyber-blue to-cyber-pink rounded-full mx-auto mb-4"></div>
                  <h4 className="text-cyber-blue text-xl font-bold">Profile.jpg</h4>
                  <p className="text-gray-400 text-sm mt-2">// Add your image here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 