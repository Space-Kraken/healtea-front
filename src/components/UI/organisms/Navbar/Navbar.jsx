import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import logo from "./../../../../assets/images/logo.png";
import ReactSession from "./../../../../tools/ReactSession";

export default function Navbar(props) {
  let { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose">
        <div className="max-w-7x1 mx-auto px-5 sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img src={logo} alt="Workflow" className="h-20 w-28" />
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className={`px-3 py-2 rounded bg-purple-200 ${
                      pathname === "/" ? "font-bold italic" : "text-black"
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`px-3 py-2 bg-purple-200 rounded ${
                      pathname === "/login" ? "font-bold italic" : "text-black"
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open Main Menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-300 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="ml-10 flex items-baseline space-x-4">
                {console.log(pathname)}
                <Link
                  className={`${
                    pathname === "/" ? "text-fresh-god-900" : "text-gray-300"
                  }`}
                  to="/"
                >
                  Home
                </Link>
                {console.log(pathname)}
                <Link
                  className={`${
                    pathname === "/login"
                      ? "text-fresh-god-900"
                      : "text-gray-300"
                  }`}
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </>
  );
}
