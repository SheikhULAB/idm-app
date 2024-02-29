import Link from "next/link";

const Header = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Text */}
        <div className="flex items-center">
          <Link href="/">
            <img
              className="h-6 w-auto" // Adjust height and width as needed
              src="icons8-internet-download-manager.svg"
              alt="Your logo alt text"
            />
          </Link>
          <span className="ml-2 text-sm">Internet Download Manager 10.36</span>
        </div>

        {/* Colored Elements */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
