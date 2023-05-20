import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white text-white p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-8">
            <Link href="/" className="text-xl font-bold">
              <img src="/assets/imgs/logo.png" alt="Logo" />
            </Link>
          </div>
          {/* Campo de pesquisa */}
          <div className="max-w-96 relative hidden lg:flex">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img
                className="h-5 w-5 text-gray-400"
                src="/assets/svg/search.svg"
                alt="Search"
              />
            </span>
            <input
              type="text"
              placeholder="Pesquisar eventos, shows, cursos..."
              className="w-full pl-10 p-4 bg-white text-black rounded-xl border-gray-200 focus:border-purple-tf-900 outline-none border lg:min-w-[380px] text-lg"
            />
          </div>
        </div>
        {/* Menu */}
        <div className="hidden md:flex items-center">
          <Link
            href="/produtor"
            className="mr-4 text-lg text-gray-tf-400 hover:text-gray-400 flex"
          >
            Seja um produtor{" "}
            <img className="ml-3" src="/assets/svg/arrow.svg" alt="Arrow" />
          </Link>
          <Link
            href="/get-started"
            className="mr-4 text-lg text-gray-tf-400 hover:text-gray-400 flex"
          >
            Get Started{" "}
            <img className="ml-3" src="/assets/svg/arrow.svg" alt="Arrow" />
          </Link>
          {/* Botão de login */}
          <Link
            href="/Login"
            className="bg-purple-tf-900 hover:bg-purple-900 p-5 border-radius-tf box-border border-transparent-tf active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 not-italic font-bold text-xl text-center text-white"
          >
            Log in
          </Link>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white bg-purple-tf-900 hover:text-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menu principal</span>
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
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-white z-50 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="pt-5 pb-6 px-2 space-y-1">
            <Link
              href="/Producer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Seja um produtor
            </Link>
            <Link
              href="/SignUp"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Get Started
            </Link>
            <Link
              href="/Login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Login
            </Link>
          </div>
          <button onClick={closeMenu} className="absolute top-3 right-3">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 011.414-1.414L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
