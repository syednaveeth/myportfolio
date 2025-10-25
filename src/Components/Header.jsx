import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white text-white flex justify-between lg:px-10 py-6 text-center ">
      {/* Logo / Brand Name */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent">
        Syed Naveeth S
      </h1>

      {/* Navigation Links */}
      <div className=" text-black space-x-6 cursor-pointer text-lg  bg-gradient-to-r   from-blue-500 to-black bg-clip-text">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/project">Project</Link>
      </div>
    </div>
  );
};

export default Header;
