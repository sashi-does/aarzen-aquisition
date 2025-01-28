import { Mail } from 'lucide-react';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import GradientText from './GradientText';
import TiltedScroll from "./TiltedScroll";
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <section className="relative py-16 bg-gray-950 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black animate-gradient-xy"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left Column */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-8">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <h2 className="w-fit text-4xl md:text-5xl font-[900] relative z-10">
                <GradientText
                  colors={["#60A5FA", "#FFFFFF","#60A5FA"]}
                  animationSpeed={6}
                  showBorder={false}
                  className="font-[800]"
                >
                  Get in Touch
                </GradientText>
              </h2>
              <p className="text-gray-400 text-lg mt-4">
                Ready to transform your business? Let's make it happen.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a 
                href="mailto:ritamsamanta@aarzenacquisition.com"
                className="group flex items-center gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-800/50 
                         hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 rounded-lg bg-black/30 border border-gray-700">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  ritamsamanta@aarzenacquisition.com
                </span>
              </motion.a>

              <motion.a 
                href="https://wa.me/1234567890"
                className="group flex items-center gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-800/50 
                         hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 rounded-lg bg-black/30 border border-gray-700">
                  <FaWhatsapp className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  91+ 96744 94784
                </span>
              </motion.a>
            </div>

            <div className="flex items-center gap-4 pt-6">
              {[
                { icon: FaTwitter, color: "text-blue-400", href: "https://x.com/theritamsamanta" },
                { icon: FaYoutube, color: "text-red-400", href: "https://www.youtube.com/@theritamsamanta" },
                { icon: FaLinkedin, color: "text-blue-500", href: "https://www.linkedin.com/company/aarzen-acquisition/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-gray-900/30 rounded-xl border border-gray-800/50 
                            hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300 
                            ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="hidden md:block w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltedScroll />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;