import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import GlobVideo from './GlobVideo';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">CONTACT.INIT</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-cyber-blue mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Ready to dive into the digital realm together? Whether you have a project 
                in mind or just want to chat about the future of technology, I'm always 
                excited to connect with fellow digital pioneers.
              </p>
            </div>

            <div className="space-y-6">
              <Link 
                href="mailto:your.email@cyberpunk.dev"
                className="block transition-transform duration-300 hover:scale-[1.02]"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-cyber-dark/80 border border-cyber-blue/50 rounded-lg backdrop-blur-sm hover:border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue/20"
                >
                  <div className="w-12 h-12 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyber-blue text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-cyber-blue font-semibold">Email</h4>
                    <p className="text-gray-300">miguelangelosilva@hotmail.co.uk</p>
                  </div>
                </motion.div>
              </Link>

              <Link 
                href="https://www.linkedin.com/in/miguelangelosilva123/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-[1.02]"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-cyber-dark/80 border border-cyber-pink/50 rounded-lg backdrop-blur-sm hover:border-cyber-pink hover:shadow-lg hover:shadow-cyber-pink/20"
                >
                  <div className="w-12 h-12 bg-cyber-pink/20 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/icons8-linkedin-64.png"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                      className="text-cyber-pink"
                    />
                  </div>
                  <div>
                    <h4 className="text-cyber-pink font-semibold">LinkedIn</h4>
                    <p className="text-gray-300">linkedin.com/in/miguelangelosilva123</p>
                  </div>
                </motion.div>
              </Link>

              <Link 
                href="https://github.com/MysticMigz"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-[1.02]"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-cyber-dark/80 border border-cyber-purple/50 rounded-lg backdrop-blur-sm hover:border-cyber-purple hover:shadow-lg hover:shadow-cyber-purple/20"
                >
                  <div className="w-12 h-12 bg-cyber-purple/20 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/github.png"
                      alt="GitHub"
                      width={32}
                      height={32}
                      className="text-cyber-purple"
                    />
                  </div>
                  <div>
                    <h4 className="text-cyber-purple font-semibold">GitHub</h4>
                    <p className="text-gray-300">https://github.com/MysticMigz</p>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Globe Video underneath the links */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="relative w-full h-80">
                <GlobVideo />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-cyber-dark/80 border-2 border-cyber-blue/50 rounded-lg p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-cyber-blue mb-6">Send Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full bg-cyber-gray border-2 border-cyber-blue/50 rounded px-4 py-3 text-white focus:border-cyber-blue focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full bg-cyber-gray border-2 border-cyber-blue/50 rounded px-4 py-3 text-white focus:border-cyber-blue focus:outline-none transition-colors"
                  placeholder="your.email@domain.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  className="w-full bg-cyber-gray border-2 border-cyber-blue/50 rounded px-4 py-3 text-white focus:border-cyber-blue focus:outline-none transition-colors"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-cyber-gray border-2 border-cyber-blue/50 rounded px-4 py-3 text-white focus:border-cyber-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full cyber-button py-4 text-lg font-semibold"
              >
                TRANSMIT MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-cyber-blue/30"
        >
          <p className="text-gray-400">
            © 2024 Cyberpunk Portfolio. Built with Next.js and passion for the future.
          </p>
        </motion.div>
      </div>


    </section>
  );
};

export default Contact; 