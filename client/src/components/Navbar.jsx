import React, { useState } from "react";
import logo from "../assets/cclogo.png";

import { FaBars, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa";
//import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const menuLinks = [
    {
      id: 1,
      link: "Shop Collections",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Contact",
    },
  ];

  const [profile, setProfile] = useState(false);
  const profileLinks = [
    {
      id: 1,
      link: "Settings",
    },
    {
      id: 2,
      link: "Orders",
    },
    {
      id: 3,
      link: "Sign out",
    },
  ];

  return (
    <div className="sticky mx-auto max-w-7xl px-2 py-6 sm:px-6 sm:py-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu */}
          <div
            onClick={() => setMenu(!menu)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#B0BEC7] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            {/*             <svg
              className="block h-6 w-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
 */}
            {menu ? <FaTimes size={20} /> : <FaBars size={20} />}
            {/*             <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
 */}
            <div>
              {/* hide menu until menu is clicked */}
              <div
                className=""
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-item"
              >
                {menu && (
                  <ul className="absolute left-0 z-18 mt-12 w-48 origin-top-left rounded-md bg-white py-1">
                    {menuLinks.map(({ id, link }) => (
                      <li key={id} className="px-4 py-2 text-gray-800 italic">
                        {link}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-28 w-auto lg:hidden"
              src={logo}
              alt="Your Company"
            />
            <img
              className="hidden h-28 w-auto lg:block"
              src={logo}
              alt="Your Company"
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 py-12">
              <a
                href="../pages/Login.jsx"
                className="text-black italic hover:bg-[#B0BEC7] hover:text-white px-3 py-2 rounded-md text-md font-regular"
                aria-current="page"
              >
                Shop Collections
              </a>

              <a
                href="./pages/Login.jsx"
                className="text-black italic hover:bg-[#B0BEC7] hover:text-white px-3 py-2 rounded-md text-md font-regular"
              >
                About
              </a>

              <a
                href="./pages/Login.jsx"
                className="text-black italic hover:bg-[#B0BEC7] hover:text-white px-3 py-2 rounded-md text-md font-regular"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="rounded-full p-1 text-[#B0BEC7] hover:text-white hover:bg-[#B0BEC7] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-[#B0BEC7]"
          >
            <span className="sr-only">View notifications</span>
            {/* Heroicon - cart  */}
            {/*             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              class="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
 */}
            <FaShoppingCart size={20} />
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="./src/pages/Cart"
                alt="cart"
              >
                {" "}
              </a>
            </div>
          </button>

          {/* Profile dropdown */}
          <div className="relative ml-3">
            <div>
              {/* change state to toggle user menu */}
              <div
                onClick={() => setProfile(!profile)}
                className="rounded-full p-1 text-[#B0BEC7] hover:text-white hover:bg-[#B0BEC7] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-[#B0BEC7]"
              >
                <span className="sr-only">profile menu</span>
                {/* Heroicon  */}
                {/*                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clip-rule="evenodd"
                  />
                </svg>

 */}
                <FaUser size={20} />
              </div>
            </div>

            {/* hide menu until profile is clicked */}
            <div
              className=""
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-item"
            >
              {profile && (
                <ul className="absolute right-0 z-18 mt-8 w-48 origin-top-right rounded-md bg-white py-1">
                  {profileLinks.map(({ id, link }) => (
                    <li key={id} className="px-4 py-2 text-gray-800 italic">
                      {link}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}

      {/*       <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-6 pb-3">
          <a
            href="./pages/Login.jsx"
            className="text-black italic hover:bg-[#B0BEC7] hover:text-white block px-3 py-2 rounded-md text-md font-regular"
            aria-current="page"
          >
            Shop Collections
          </a>

          <a
            href="./pages/Login.jsx"
            className="text-black italic hover:bg-[#B0BEC7] hover:text-white block px-3 py-2 rounded-md text-md font-regular"
          >
            About
          </a>

          <a
            href="./pages/Login.jsx"
            className="text-black italic hover:bg-[#B0BEC7] hover:text-white block px-3 py-2 rounded-md text-md font-regular"
          >
            Contact
          </a>
        </div>
      </div>
 */}
    </div>
  );
};

export default NavBar;
