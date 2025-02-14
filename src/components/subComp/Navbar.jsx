import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-10 left-0 w-full flex items-center justify-between font-sans p-4 lg:h-[5rem] transition-all duration-300  lg:border-b-[1px]  lg:border-gray-300 lg:px-10  bg-white lg:bg-transparent lg:backdrop-blur-xl ${
          isScrolled ? " lg:w-[50vw] lg:rounded-2xl lg:ml-[25%] lg:mt-5 lg:border-[1px] lg:border-slate-300 sm:mt-0 md:mt-0 sm:w-full md:w-full sm:rounded-none md:rounded-none sm:ml-0 md:ml-0 backdrop-blur-2xl" : " "
        }`}
      >
        <div className="w-36">
          <img
            src="https://framerusercontent.com/images/WqI3UYiTd2qMFxPSa0gRIFcv4U.png?scale-down-to=512"
            alt="Logo"
          />
        </div>

        <ul
          className={`hidden lg:flex text-lg items-center space-x-5  transition-all duration-300`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/feature"
            >
              Feature
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
        </ul>

        <div className="hidden lg:block">
          <Button text={"Get Started"} />
        </div>

        <button
          onClick={handleNav}
          className="lg:hidden group flex items-center justify-center relative z-10 transition-all duration-500 rounded p-2 border border-gray-500 outline-none"
        >
          <svg
            fill="currentColor"
            stroke="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 transition-transform duration-300 group-hover:rotate-45"
          >
            <path
              d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
            ></path>
            <path
              d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
            ></path>
            <path
              d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"
            ></path>
          </svg>
        </button>

        <ul
          className={`absolute top-16  left-0 w-full bg-white text-black flex flex-col items-center space-y-5 py-5  ${
            show ? "block h-[100vh] " : "hidden"
          } lg:hidden`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/home"
              onClick={() => setShow(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/feature"
              onClick={() => setShow(false)}
            >
              Feature
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/pricing"
              onClick={() => setShow(false)}
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <Button text={"Get Started"} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
