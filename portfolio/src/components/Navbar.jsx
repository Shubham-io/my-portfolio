import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = ["Home", "About", "Portfolio", "Tech Stack", "Contact"];

  const navigate = useNavigate();

  return (
    <nav className="w-full px-4 md:px-24 shadow-md fixed top-0 left-0 right-0 z-10 bg-white ">
      <div className="flex justify-between items-center h-16">
        {/* Logo and Title */}
        <Link
          to="Home"
          smooth={true}
          duration={500}
          offset={-70}
          activeClass="active"
        >
          <div className="flex items-center space-x-2">
            <img
              src={assets.profile_pic1}
              className="h-12 w-12 rounded-full cursor-pointer"
              alt="Profile"
            />
            <div className="text-sm">
              <p className="font-semibold cursor-pointer">Shubham</p>
              <p className="font-semibold cursor-pointer">Vishwakarma</p>
            </div>
          </div>
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:scale-105 duration-200 cursor-pointer "
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="text-red-700 hover:text-red-700"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar and Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenu(!menu)}
            // accessibility feature for screen readers
            aria-label="Toggle menu"
            className="text-2xl"
          >
            {menu ? <IoClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="md:hidden flex flex-col items-center space-y-3 text-lg font-medium mt-4">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-700">
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                onClick={() => setMenu(!menu)}
                className="text-red-700 hover:text-red-700"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
