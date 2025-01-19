import { Mail } from 'lucide-react';
import TiltedScroll from "./TiltedScroll"; 
import { FaWhatsapp, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
        <div className="flex flex-row items-center justify-center md:justify-between">
        <div className='flex flex-col w-full items-start backdrop-blur-sm p-8 transform transition-all duration-500'>
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <div className="">
              <p>Reach out to us through any of these channels</p>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-6">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:contact@youragency.com" className="text-gray-300 hover:text-white transition-colors">
                ritamsamanta@aarzenacquisition.com
                </a>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-6">
            <FaWhatsapp className="h-5 w-5 text-gray-400" />
            <a
                href="https://wa.me/1234567890"  
                className="text-gray-300 hover:text-white transition-colors"
            >       
                91+ 96744 94784  
            </a>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-6">
            <a 
                href="https://twitter.com/yourprofile" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaTwitter className="h-5 w-5" />
            </a>
            <a 
                href="https://youtube.com/yourchannel" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaYoutube className="h-5 w-5" />
            </a>
            <a 
                href="https://linkedin.com/in/yourprofile" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaLinkedin className="h-5 w-5" />
            </a>
            </div>
        </div>
         <div className="hidden md:block lg:w-1/2">
            <TiltedScroll />
          </div>
        </div>
        
    </div>
    
  )
}

export default ContactUs