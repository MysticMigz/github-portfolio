import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import GlobVideo from './GlobVideo';
import { useState, FormEvent, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_FORM } from '@/constants/contact';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize EmailJS
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS initialization failed: Missing public key');
      return;
    }

    try {
      emailjs.init(publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
    
    // Log environment variables on component mount
    console.log('Environment Variables Check:', {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'Missing',
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'Missing',
      publicKey: publicKey ? 'Present' : 'Missing'
    });
    
    // Validate EmailJS configuration
    if (!publicKey || !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      console.error('EmailJS Configuration Error: Missing required environment variables');
      console.log('Please check your .env.local file and ensure all variables are set');
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!formRef.current) {
        throw new Error('Form reference is missing');
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is incomplete');
      }

      // Get form data
      const formData = new FormData(formRef.current);
      const templateParams = {
        [CONTACT_FORM.FIELDS.NAME.id]: formData.get(CONTACT_FORM.FIELDS.NAME.id),
        [CONTACT_FORM.FIELDS.EMAIL.id]: formData.get(CONTACT_FORM.FIELDS.EMAIL.id),
        [CONTACT_FORM.FIELDS.SUBJECT.id]: formData.get(CONTACT_FORM.FIELDS.SUBJECT.id),
        [CONTACT_FORM.FIELDS.MESSAGE.id]: formData.get(CONTACT_FORM.FIELDS.MESSAGE.id)
      };

      console.log('Attempting to send email with configuration:', {
        serviceId,
        templateId,
        templateParams,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Present' : 'Missing'
      });

      try {
        const result = await emailjs.send(
          serviceId,
          templateId,
          templateParams
        );

        console.log('EmailJS Response:', result);
        
        if (result.status === 200) {
          setIsSubmitted(true);
          formRef.current.reset();
          setTimeout(() => {
            setIsSubmitted(false);
          }, CONTACT_FORM.TIMEOUTS.RESET_FORM);
        } else {
          // Log the template parameters for debugging
          console.log('Template parameters that were attempted:', templateParams);
          throw new Error(`EmailJS returned status ${result.status}`);
        }
      } catch (emailJsError) {
        console.error('EmailJS send error:', {
          error: emailJsError,
          message: emailJsError instanceof Error ? emailJsError.message : 'Unknown error',
          name: emailJsError instanceof Error ? emailJsError.name : 'Unknown name',
          stack: emailJsError instanceof Error ? emailJsError.stack : 'No stack trace'
        });
        throw emailJsError; // Re-throw to be caught by outer catch
      }
    } catch (err) {
      console.error('Detailed email sending error:', {
        error: err,
        message: err instanceof Error ? err.message : 'Unknown error',
        name: err instanceof Error ? err.name : 'Unknown name',
        stack: err instanceof Error ? err.stack : 'No stack trace'
      });
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (err instanceof Error) {
        console.error('Error details:', {
          message: err.message,
          name: err.name,
          stack: err.stack
        });
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      setTimeout(() => {
        setError(null);
      }, CONTACT_FORM.TIMEOUTS.CLEAR_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const renderField = (field: keyof typeof CONTACT_FORM.FIELDS) => {
    const fieldConfig = CONTACT_FORM.FIELDS[field];
    return (
      <div key={fieldConfig.id}>
        <label className={CONTACT_FORM.STYLES.LABEL}>
          {fieldConfig.label}
        </label>
        {fieldConfig.type === 'textarea' ? (
          <textarea
            name={fieldConfig.id}
            rows={fieldConfig.rows}
            className={CONTACT_FORM.STYLES.INPUT}
            placeholder={fieldConfig.placeholder}
            required={fieldConfig.required}
          />
        ) : (
          <input
            type={fieldConfig.type}
            name={fieldConfig.id}
            className={CONTACT_FORM.STYLES.INPUT}
            placeholder={fieldConfig.placeholder}
            required={fieldConfig.required}
          />
        )}
      </div>
    );
  };

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
                href="mailto:miguelangelosilva@hotmail.co.uk"
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
            
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              {(Object.keys(CONTACT_FORM.FIELDS) as Array<keyof typeof CONTACT_FORM.FIELDS>).map(renderField)}

              <div className="relative">
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-12 left-0 right-0 text-center"
                    >
                      <span className={CONTACT_FORM.STYLES.MESSAGE.SUCCESS}>
                        {CONTACT_FORM.MESSAGES.SUCCESS}
                      </span>
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-12 left-0 right-0 text-center"
                    >
                      <span className={CONTACT_FORM.STYLES.MESSAGE.ERROR}>
                        {error}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={CONTACT_FORM.STYLES.BUTTON.BASE}
                  disabled={isSubmitted || isLoading}
                >
                  {isLoading ? (
                    <span className={CONTACT_FORM.STYLES.BUTTON.LOADING}>
                      <span className={CONTACT_FORM.STYLES.BUTTON.LOADING_TEXT}>
                        {CONTACT_FORM.BUTTON_STATES.LOADING}
                      </span>
                      <span className={CONTACT_FORM.STYLES.BUTTON.LOADING_DOTS}>
                        {CONTACT_FORM.MESSAGES.LOADING}
                      </span>
                    </span>
                  ) : isSubmitted ? (
                    CONTACT_FORM.BUTTON_STATES.SUCCESS
                  ) : (
                    CONTACT_FORM.BUTTON_STATES.INITIAL
                  )}
                </motion.button>
              </div>
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