import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">See How We Work</h2>
          <p className="text-xl text-gray-400">
            Watch our process of transforming businesses through strategic acquisitions
          </p>
        </div>
        
        <motion.div 
          className="relative aspect-video rounded-2xl overflow-hidden fade-in"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center group cursor-pointer">
            <motion.div
              className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </motion.div>
          </div>
          <video
            poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
          >
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;