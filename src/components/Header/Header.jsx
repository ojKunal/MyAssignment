import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex gap-5 justify-between px-0.5 w-full text-lg whitespace-nowrap text-neutral-700 max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src={"/Assets/Component 40 (2).png"}
        alt="Logo"
        className="shrink-0 my-auto max-w-full aspect-[5] w-[191px] cursor-pointer"
      />
      <nav className="flex gap-5 justify-between items-center max-md:flex-wrap">
        <ul className="flex gap-5 justify-between self-stretch my-auto cursor-pointer">
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending
                ? "cursor-pointer"
                : isActive
                ? "cursor-pointer font-bold text-blue-900 "
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/flashcard"
            className={({ isActive, isPending }) =>
              isPending
                ? "cursor-pointer"
                : isActive
                ? "cursor-pointer font-bold text-blue-900 "
                : ""
            }
          >
            Flashcard
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "cursor-pointer"
                : isActive
                ? "cursor-pointer font-bold text-blue-900 "
                : ""
            }
          >
            Contact
          </NavLink>
        </ul>
        <NavLink to="/faq"  className={({ isActive, isPending }) =>
              isPending
                ? "cursor-pointer"
                : isActive
                ? "cursor-pointer font-bold text-blue-900 "
                : ""
            }>
          <div className=" self-stretch my-auto cursor-pointer">FAQ</div>
        </NavLink>
        <button className=" bg-gradient-to-r from-indigo-900 to-blue-500 h-13 justify-center self-stretch px-10 py-3.5 font-medium text-white rounded-[32px] max-md:px-5">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
