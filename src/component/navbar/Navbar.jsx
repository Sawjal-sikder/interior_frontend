import React, { useState } from "react";
import Logo_img from "../../assets/include/logo.png";
import Logo from "./logo";
import NavButton from "./NavButton";
import NavRight from "./NavRight";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-200 w-full px-4 md:px-10 lg:px-20 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <Logo src_img={Logo_img} alt_img="Logo" className="w-36 sm:w-48" />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X className="cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu className="cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex gap-x-5 items-center">
          <NavButton to="/" text="Home" />
          <NavButton to="/service" text="Service" />
          <NavButton to="/product" text="Product" />
          <NavButton to="/protfolio" text="Protfolio" />
          <NavButton to="/project" text="Latest Project" />
          <NavButton to="/gallary" text="Gallary" />
          <NavButton to="/touch" text="Getting Touch" />
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex gap-x-5 items-center">
          <NavRight />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-3">
          <NavButton to="/" text="Home" />
          <NavButton to="/service" text="Service" />
          <NavButton to="/product" text="Product" />
          <NavButton to="/protfolio" text="Protfolio" />
          <NavButton to="/project" text="Latest Project" />
          <NavButton to="/gallary" text="Gallary" />
          <NavButton to="/touch" text="Getting Touch" />
          <div className="pt-2 border-t">
            <NavRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
