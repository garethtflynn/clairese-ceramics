import React, { useState } from "react";
import logo from '../../assets/cclogo.png';

import { FaBars, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa";
//import { Link } from "react-router-dom";

// menu landing pages

const shopPage = ": Shop";
const aboutPage = ": About";
const contactPage = ": Contact";
const settingsPage = ": Settings";
const ordersPage = ": Orders";
const signOutPage = ": Sign Out";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const menuLinks = [
    {
      id: 1,
      item: "Shop Collections",
      itemLink: shopPage,
    },
    {
      id: 2,
      item: "About",
      itemLink: aboutPage,
    },
    {
      id: 3,
      item: "Contact",
      itemLink: contactPage,
    },
  ];

  const [profile, setProfile] = useState(false);
  const profileLinks = [
    {
      id: 1,
      item: "Settings",
      itemLink: settingsPage,
    },
    {
      id: 2,
      item: "Orders",
      itemLink: ordersPage,
    },
    {
      id: 3,
      item: "Sign out",
      itemLink: signOutPage,
    },
  ];

  return (
    <div className="sticky mx-auto max-w-7xl px-2 py-6 sm:px-6 sm:py-6 lg:px-8 ">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu */}
          <div
            onClick={() => setMenu(!menu)}
            className="rounded inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#B0BEC7] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            {menu ? <FaTimes size={20} /> : <FaBars size={20} />}

            <div>
              {/* hide menu until hamburger is clicked */}
              <div
                className=""
                role="menu"
                aria-orientation="vertical"
                labelled="user-menu-item"
              >
                {menu && (
                  <ul className="absolute left-0 z-18 mt-12 w-48 origin-top-left rounded-md bg-white py-1">
                    {menuLinks.map(({ id, item, itemLink }) => (
                      <li key={id} className="px-4 py-2 text-gray-800 italic">
                        {item}
                        {itemLink}
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
                href="./Login"
                className="text-black font-light italic hover:bg-[#B0BEC7] hover:text-white px-3 py-2 rounded-md text-md font-regular"
                aria-current="page"
              >
                Shop Collections
              </a>

              <a
                href="./Login"
                className="text-black font-light italic hover:bg-[#B0BEC7] hover:text-white px-3 py-2 rounded-md text-md font-regular"
              >
                About
              </a>

              <a
                href="./Login"
                className="text-black font-light italic hover:bg-[#B0BEC7] hover:text-white px-3 py-2 rounded-md text-md font-regular"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="rounded-full p-2 text-black hover:bg-[#B0BEC7] hover:text-white hover:p-2"
          >
            <span className="sr-only">View notifications</span>

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
                className="rounded-full p-2 text-black hover:bg-[#B0BEC7] hover:text-white hover:p-2"
              >
                <span className="sr-only">profile menu</span>

                <FaUser size={20} />
              </div>
            </div>

            <div>
              {/* hide menu until profile is clicked */}
              <div
                className=""
                role="menu"
                aria-orientation="vertical"
                labelled="user-menu-item"
              >
                {profile && (
                  <ul className="absolute right-0 z-18 mt-8 w-48 origin-top-right rounded-md bg-white py-1">
                    {profileLinks.map(({ id, item, itemLink }) => (
                      <li key={id} className="px-4 py-2 text-gray-800 italic">
                        {item}
                        {itemLink}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
