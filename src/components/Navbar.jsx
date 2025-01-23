import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            TechConsult
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};