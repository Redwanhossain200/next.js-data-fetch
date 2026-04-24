import Link from 'next/link';

const Header = () => {
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="text-cyan-500 font-bold text-sm hover:bg-cyan-500 hover:text-black transition-all">
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/posts"
          className="text-cyan-500 font-bold text-sm hover:bg-cyan-500 hover:text-black transition-all">
          Posts
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className="text-cyan-500 font-bold text-sm hover:bg-cyan-500 hover:text-black transition-all">
          Products
        </Link>
      </li>
    </>
  );

  return (
    // Fixed: added fixed/sticky positioning properly and backdrop blur
    <nav className="sticky top-0 z-50 w-full border-b border-fuchsia-300/30 bg-black/20 backdrop-blur-md">
      <div className="navbar px-6 py-2 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-cyan-500">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
              {links}
            </ul>
          </div>
          <Link
            href="/"
            className="font-bold text-2xl animate-text tracking-wider">
            MY APP
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <Link
            href="/products"
            className="btn bg-fuchsia-400 hover:bg-fuchsia-500 text-fuchsia-950 font-bold border-none px-6 rounded-full transition-transform hover:scale-105">
            Get Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
