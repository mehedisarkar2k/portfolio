import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Classes from "./Nav.module.css";

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > "100");
    });
  }, []);

  console.log(scroll);

  return (
    <div className="bg-dark-blue w-full shadow-sm border-primary border-b-4">
      <div className={`my-container ${Classes.Nav}`}>
        <nav className="py-6">
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-xl font-light tracking-wide">
            <li className="hover:bg-primary-light transition rounded-lg">
              <NavLink
                activeClassName="bg-primary-light  px-4 py-2 transition rounded-lg"
                className="text-white"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="hover:bg-primary-light transition rounded-lg">
              <NavLink
                activeClassName="bg-primary-light  px-4 py-2 transition rounded-lg"
                className="text-white"
                to="/"
              >
                About
              </NavLink>
            </li>
            <li className="hover:bg-primary-light transition rounded-lg">
              <NavLink
                activeClassName="bg-primary-light  px-4 py-2 transition rounded-lg"
                className="text-white"
                to="/"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="hover:bg-primary-light transition rounded-lg">
              <NavLink
                activeClassName="bg-primary-light  px-4 py-2 transition rounded-lg"
                className="text-white"
                to="/"
              >
                Blog
              </NavLink>
            </li>
            <li className="hover:bg-primary-light transition  rounded-lg">
              <NavLink
                activeClassName="bg-primary-light  px-4 py-2 transition rounded-lg"
                className="text-white"
                to="/"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
