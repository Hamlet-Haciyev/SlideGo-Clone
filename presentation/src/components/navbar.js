import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "About", to: "/About", current: false },
  { name: "Presentation", to: "/Presentation", current: false },
  { name: "Contact", to: "/Contact", current: false },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-brandColor">
        {/* App header */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold no-underline text-white">
            Presentation.io
          </Link>
        </div>
        {/* Links shown in a row on larger screens */}
        <nav className="hidden md:block space-x-6">{navLinks}</nav>
        {/* Button to toggle mobile menu shown on smaller screens */}
        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
        ></button>
      </div>
    </>
  );
};
const navLinks = navigation.map((page, index) => (
  <Link
    className="no-underline text-white font-semibold hover:text-white"
    to={`${page.to}`}
    key={index}
  >
    {page.name}
  </Link>
));

export default Navbar;
