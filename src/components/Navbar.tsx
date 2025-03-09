import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md flex justify-center space-x-6">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/about" className="hover:text-gray-400">About Us</Link>
    </nav>
  );
};

export default Navbar;
