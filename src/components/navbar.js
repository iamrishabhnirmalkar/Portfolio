import React, { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700  relative ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="My Logo" className="h-8 mr-3" />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              RisCode
            </span>
          </a>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer dark:text-white md:hidden"
          >
            {nav ? <FaX size={30} /> : <FaBars size={30} />}
          </div>

          <div
            className={`${
              nav ? "block" : "hidden"
            } w-full  md:block md:w-auto md:flex`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                >
                  <Link
                    to={link.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
