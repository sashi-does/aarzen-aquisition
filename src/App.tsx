import { Routes, Route, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ExplainerVideo from './components/ExplainerVideo';
import ResultsGallery from './components/ResultsGallery';
import ThreeStepProcess from './components/ThreeStepProcess';

import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <header id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Modern Building"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Scale <span className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Smarter</span> <br /> Not <span className='text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>Harder</span>
          </motion.h1>
         
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Agency Owners, Coaches and Consultants: Get 50-150+ Qualified Appointments Every Single Month{" "}
            <span className="text-blue-400 font-semibold">GUARANTEED</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 mb-8"
          >
            The best part is… if you don't get appointments we don't get paid
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <a href="https://app.lemcal.com/@aarzenacquisition/demo-call" target="_blank">Book Your Call Now</a>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </header>

      {/* Video Section */}
      <section id="process">
        <ExplainerVideo />
      </section>

      {/* Process Section */}
      <section>
        <ThreeStepProcess />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Results Gallery Section */}
      <section>
        <ResultsGallery />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
};

export default App;