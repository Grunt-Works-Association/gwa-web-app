import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useFirebase } from '../../contexts/FirebaseContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useFirebase();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Training', path: '/training' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#182940] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white font-medium hover:text-[#D6C7A9] transition-colors ${
                  location.pathname === item.path ? 'border-b-2 border-[#D6C7A9]' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Auth Links */}
            {user ? (
              <Link 
                to="/profile" 
                className="flex items-center space-x-1 text-white hover:text-[#D6C7A9]"
              >
                <User size={20} />
                <span>Profile</span>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="px-4 py-2 rounded bg-[#2C5530] text-white hover:bg-opacity-90 transition-all"
              >
                Login / Register
              </Link>
            )}
            
            {/* Cart Icon */}
            <Link 
              to="/shop/cart" 
              className="text-white hover:text-[#D6C7A9] relative"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center">
            <Link 
              to="/shop/cart" 
              className="text-white hover:text-[#D6C7A9] relative mr-4"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-[#D6C7A9]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#182940] shadow-xl">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-white font-medium hover:text-[#D6C7A9] py-2 ${
                    location.pathname === item.path ? 'border-l-4 border-[#D6C7A9] pl-2' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Auth Links for Mobile */}
              {user ? (
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-1 text-white hover:text-[#D6C7A9] py-2"
                >
                  <User size={20} />
                  <span>Profile</span>
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  className="px-4 py-2 rounded bg-[#2C5530] text-white hover:bg-opacity-90 transition-all w-full text-center"
                >
                  Login / Register
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;