import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall, ChevronDown } from 'lucide-react';
import logoImg from '../assets/prolync-logo.png';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Products', path: '#' },
    { name: 'Features', path: '#' },
    { name: 'Pricing', path: '/' },
    { name: 'Customers', path: '#' },
    { name: 'Resources', path: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoImg} alt="Prolync Logo" className="h-9 w-auto object-contain" />
        </Link>

        {/* Center: Main Nav (Empty as requested) */}
        <nav className="hidden lg:flex items-center h-full"></nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-5 shrink-0">
          <Link to="/contact" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            <PhoneCall size={16} />
            Support
          </Link>
          <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
          <Link to="/" className="text-sm font-bold text-primary hover:text-primary-hover transition-colors">
            Sign In
          </Link>
          <Link to="/" className="hidden md:inline-flex text-sm font-semibold text-white bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-md transition-colors shadow-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
