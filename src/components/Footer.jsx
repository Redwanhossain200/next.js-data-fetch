import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#0B0F1A] border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h2 className="font-bold text-3xl animate-text text-white tracking-wider hover:text-indigo-400 transition">
              MY APP
            </h2>
            <p className="text-sm leading-relaxed">
              The best platform to find your favorite books and digital tools.
              We ensure quality service and fast delivery for all our customers.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 animate-text rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-500 cursor-pointer hover:scale-110 transition-all text-white">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 animate-text rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-500 cursor-pointer hover:scale-110 transition-all text-white">
                <FaTwitter />
              </div>
              <div className="w-8 h-8 animate-text rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-500 cursor-pointer hover:scale-110 transition-all text-white">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-white font-semibold uppercase text-xs tracking-widest mb-2">
              Navigation
            </h6>
            <Link
              href="/"
              className="hover:text-indigo-400 transition-colors text-sm w-fit">
              Home
            </Link>
            <Link
              href="/posts"
              className="hover:text-indigo-400 transition-colors text-sm w-fit">
              Posts
            </Link>
            <Link
              href="/products"
              className="hover:text-indigo-400 transition-colors text-sm w-fit">
              Products
            </Link>
            <Link
              href="/books"
              className="hover:text-indigo-400 transition-colors text-sm w-fit">
              Books Collection
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-white font-semibold uppercase text-xs tracking-widest mb-2">
              Company
            </h6>
            <a className="hover:text-indigo-400 transition-colors text-sm w-fit cursor-pointer">
              About Us
            </a>
            <a className="hover:text-indigo-400 transition-colors text-sm w-fit cursor-pointer">
              Contact Info
            </a>
            <a className="hover:text-indigo-400 transition-colors text-sm w-fit cursor-pointer">
              Privacy Policy
            </a>
            <a className="hover:text-indigo-400 transition-colors text-sm w-fit cursor-pointer">
              Terms & Conditions
            </a>
          </div>

          <div className="space-y-4">
            <h6 className="text-white font-semibold uppercase text-xs tracking-widest mb-2">
              Stay Updated
            </h6>
            <p className="text-xs text-gray-500">
              Subscribe to our newsletter to get the latest offers and updates.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
              />
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-bold transition-all active:scale-95 shadow-lg shadow-indigo-500/20 cursor-pointer">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} MY APP. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition">
              English (US)
            </span>
            <span className="cursor-pointer hover:text-white transition">
              Support Help
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
