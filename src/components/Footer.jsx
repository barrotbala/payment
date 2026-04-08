import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../assets/prolync-logo.png';

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logoImg} alt="Prolync Logo" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              Partnering with institutions to offer affordable student success programs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-main mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-sm text-text-muted hover:text-primary transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-text-muted hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund" className="text-sm text-text-muted hover:text-primary transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold text-text-main mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-text-muted hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-text-muted hover:text-primary transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text-main mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>XYZ Building, Tech Park<br />Chennai, TamilNadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 6385499454</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@prolync.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Prolync Platform Owner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
