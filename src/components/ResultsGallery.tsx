import React from 'react';
import GradientText from './GradientText';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const results = [
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
    name: "John Smith",
    position: "Agency Owner",
    testimonial: "Generated 150+ qualified appointments in the first month",
    stats: "127% increase in client acquisition"
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    name: "Sarah Johnson",
    position: "Marketing Consultant",
    testimonial: "Consistently booking 50+ strategy calls monthly",
    stats: "85% close rate on qualified leads"
  },
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    name: "David Williams",
    position: "Business Coach",
    testimonial: "Transformed my practice with high-quality leads",
    stats: "200+ appointments in 3 months"
  }
];

const ResultsGallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-[900] text-start mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                        <GradientText
                                colors={["#60A5FA", "#FFFFFF","#60A5FA"]}
                                animationSpeed={6}
                                showBorder={false}
                                className="font-[800]"
                                >
                        
                          Real Results
                        </GradientText>
                        
                        
                        </h2>
          <p className="text-xl text-gray-400">See what our clients are saying about their success</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{result.name}</h3>
                  <p className="text-gray-400 text-sm">{result.position}</p>
                </div>
              </div>
              
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-4">
                "{result.testimonial}"
              </blockquote>
              
              <div className="text-blue-400 font-semibold">
                {result.stats}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-2 text-blue-400 font-semibold">
            100% Satisfaction Guaranteed
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsGallery;