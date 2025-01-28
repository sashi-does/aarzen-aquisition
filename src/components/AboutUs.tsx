import React from 'react';
import GradientText from './GradientText';
import { ChevronRight, Sparkles, Trophy, Clock, ArrowRight, Target, Users2 } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gray-950 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black animate-gradient-xy"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* Left column */}
          <div className="md:w-1/2">
            <div className="relative">
              <Sparkles className="absolute -left-6 -top-6 w-12 h-12 text-gray-500/30 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-[700] text-start mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              A short story about us
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                We're not just another agency – we're your partner in growth. 
                With years of experience and a passion for innovation, we've helped 
                businesses like yours achieve remarkable success.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/2">
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl p-8 border border-gray-800 
                          transform transition-all duration-500 hover:border-gray-600 hover:bg-gray-800/50">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Aarzen Acquisition started with a simple goal: to make it easier
                for businesses to get high-quality clients. We saw the struggles
                agencies face and created a system that actually works.
              </p>
              <button className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                Learn more about our journey
                <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 my-16">
          {[
            { 
              icon: <Trophy className="w-8 h-8" />, 
              number: "20+", 
              label: "Happy clients",
              gradient: "from-black via-gray-900 to-black"
            },
            { 
              icon: <Clock className="w-8 h-8" />, 
              number: "2", 
              label: "Years of experience",
              gradient: "from-black via-gray-900 to-black"
            }
          ].map((stat, index) => (
            <div key={index} 
                 className={`group relative overflow-hidden rounded-xl border border-gray-800/50
                           transform transition-all duration-500 hover:border-gray-700
                           bg-gradient-to-br ${stat.gradient} w-full md:w-[280px]`}>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="p-4 rounded-xl bg-black/30 text-gray-300 
                                border border-gray-800/50 group-hover:border-gray-700
                                group-hover:scale-110 transform transition-all duration-500
                                shadow-lg shadow-black/50">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
                      {stat.number}
                    </span>
                    <p className="text-gray-400 mt-1 text-lg">{stat.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Precision Targeting",
              description: "We identify and connect with your ideal clients using data-driven strategies.",
              bgImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=2940"
            },
            {
              icon: <Users2 className="w-6 h-6" />,
              title: "Client Success",
              description: "Our proven methods ensure long-term client satisfaction and growth.",
              bgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2940"
            },
            {
              icon: <ArrowRight className="w-6 h-6" />,
              title: "Fast Results",
              description: "Quick implementation and rapid scaling of your client acquisition.",
              bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
            }
          ].map((feature, index) => (
            <div key={index} 
                 className="group relative h-[300px] overflow-hidden rounded-xl">
              {/* Background Image with zoom effect */}
              <div 
                className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${feature.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end
                            backdrop-blur-sm bg-gray-900/20 border border-gray-800
                            transform transition-all duration-500 
                            group-hover:bg-gray-800/40 group-hover:border-gray-600">
                <div className="p-3 rounded-lg bg-black/40 text-gray-300 w-fit mb-4
                              group-hover:scale-110 transform transition-all duration-300
                              border border-gray-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;