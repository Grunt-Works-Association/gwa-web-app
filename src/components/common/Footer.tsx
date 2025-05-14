import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#182940] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Logo className="h-16 w-auto" />
            <p className="text-gray-300 mt-4">
              A veteran-led nonprofit organization dedicated to enhancing the lives of military service members, veterans, their families, and supporters.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#D6C7A9]">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#D6C7A9]">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#D6C7A9]">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D6C7A9]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Shop</Link></li>
              <li><Link to="/training" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Training</Link></li>
              <li><Link to="/calendar" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Calendar</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Training Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D6C7A9]">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/training/fitness" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Elite Fitness</Link></li>
              <li><Link to="/training/firearms" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Firearms Training</Link></li>
              <li><Link to="/training/martial-arts" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Martial Arts</Link></li>
              <li><Link to="/training/tactical" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Tactical Consulting</Link></li>
              <li><Link to="/training/outdoor" className="text-gray-300 hover:text-[#D6C7A9] transition-colors">Outdoor Recreation</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D6C7A9]">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-[#D6C7A9] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">info@gruntworksassociation.org</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-[#D6C7A9] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <form className="mt-4">
                <p className="text-gray-300 mb-2">Subscribe to our newsletter:</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 w-full focus:outline-none text-gray-900 rounded-l"
                  />
                  <button
                    type="submit"
                    className="bg-[#2C5530] text-white px-4 py-2 rounded-r hover:bg-opacity-90 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Grunt Works Association. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-[#D6C7A9]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#D6C7A9]">Terms of Service</Link></li>
              <li><Link to="/refund" className="hover:text-[#D6C7A9]">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;