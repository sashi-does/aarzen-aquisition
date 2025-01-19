import React from "react";
import { ArrowRight, Sparkles, Target, Users } from "lucide-react";
import GradientText from "./GradientText";

const ThreeStepProcess: React.FC = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Lead Generation",
      description:
        "We identify and attract your ideal clients with proven strategies, ensuring a consistent flow of high-quality leads tailored to your business needs.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lead Conversion",
      description:
        "Our expert systems turn prospects into clients efficiently, optimizing every touchpoint to maximize results.",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Closing Leads",
      description:
        "We streamline the process, closing qualified appointments that drive real business growth, ensuring your time is spent where it matters most.",
      bgImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2940"
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 animate-gradient-xy"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center">
        <GradientText
        colors={["#60A5FA", "#FFFFFF","#60A5FA"]}
        animationSpeed={5}
        showBorder={false}
        className="custom-class font-[800]"
        >
        Our Three Step Process
      </GradientText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative h-[400px] overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
              
              {/* Card Content */}
              <div className="relative h-full bg-gray-900/30 backdrop-blur-sm p-8 border border-gray-800 
                           transform transition-all duration-500 ease-out
                           group-hover:bg-gray-800/50 group-hover:border-blue-500/50
                           flex flex-col items-center text-center">
                
                {/* Icon container with glow effect */}
                <div className="mb-6 p-4 rounded-full bg-gray-800/50 border border-gray-700
                              group-hover:border-blue-500/50 group-hover:glow-blue-500
                              transform transition-all duration-500">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-100 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group relative px-8 py-3 bg-blue-600 text-white rounded-full 
                         transform transition-all duration-300
                         hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950">
            <a href="https://app.lemcal.com/@aarzenacquisition/demo-call" target="_blank">Book A Demo Call</a>
            <ArrowRight className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;