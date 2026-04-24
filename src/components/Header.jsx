'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'Products', href: '/products' },
    { name: 'Books', href: '/books' },
  ];

  const links = (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? 'text-white bg-indigo-500 shadow-lg shadow-indigo-500/50'
                  : 'text-gray-400 hover:text-white hover:bg-indigo-500/20'
              }`}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/40 backdrop-blur-xl">
      <div className="navbar px-6 py-3 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-gray-300 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#111827] rounded-xl z-1 mt-3 w-52 p-2 shadow-lg border border-gray-800">
              {links}
            </ul>
          </div>
          <Link
            href="/"
            className="font-bold text-2xl animate-text text-white tracking-wider hover:text-indigo-400 transition">
            MY APP
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/products"
            className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-2xl transition-all hover:scale-105 shadow-lg shadow-indigo-500/20">
            Get Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
