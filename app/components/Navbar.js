import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="py-4 shadow-md">
      <div className="container mx-auto md:flex justify-between items-center">
        {/* Left Side Navigation */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/tasks">
              <span className="hover:text-gray-300">Tasks</span>
            </Link>
          </li>
          <li>
            <Link href="/files">
              <span className="hover:text-gray-300">Files</span>
            </Link>
          </li>
          <li>
            <Link href="/downloads">
              <span className="hover:text-gray-300">Downloads</span>
            </Link>
          </li>
          <li>
            <Link href="/view">
              <span className="hover:text-gray-300">View</span>
            </Link>
          </li>
          <li>
            <Link href="/help">
              <span className="hover:text-gray-300">Help</span>
            </Link>
          </li>
        </ul>

        {/* Right Side Search */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search in the list"
            className="py-2 pl-10 pr-4 w-64 rounded-md focus:outline-none bg-[#22222A]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
