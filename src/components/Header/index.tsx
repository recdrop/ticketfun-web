import classNames from "@/src/utils/classNames";
import { getFirstName } from "@/src/utils/stringUtils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { User, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { auth } from "../../../firebase";

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userPhotoUrl, setUserPhotoUrl] = useState<string | null>(null);
  const [userInitials, setUserInitials] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user) {
        setUserPhotoUrl(user.photoURL);
        setUserInitials(getUserInitials(user.displayName));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      if (isMenuOpen) setIsMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
    }
  };

  function getUserInitials(name: string | null): string | null {
    if (!name) return null;
    const initials = name.match(/\b\w/g) || [];
    return initials.join("").toUpperCase();
  }

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
              className="w-full pl-10 p-4 bg-white text-black rounded-xl border-gray-200 focus:border-blue-tf-700 outline-none border lg:min-w-[380px] text-lg"
            />
          </div>
        </div>
        {/* Menu */}
        <div className="hidden md:flex items-center">
          {!user && (
            <>
              <Link
                href="/produtor"
                className="mr-4 text-lg text-gray-tf-400 hover:text-gray-400 hidden xl:flex"
              >
                Seja um produtor{" "}
                <img className="ml-3" src="/assets/svg/arrow.svg" alt="Arrow" />
              </Link>
              <Link
                href="/get-started"
                className="mr-4 text-lg text-gray-tf-400 hover:text-gray-400 hidden xl:flex"
              >
                Get Started{" "}
                <img className="ml-3" src="/assets/svg/arrow.svg" alt="Arrow" />
              </Link>

              {/* Botão de login */}
              <Link
                href="/Login"
                className="bg-blue-tf-700 hover:bg-blue-tf-900 p-5 border-radius-tf box-border border-transparent-tf active:bg-blue-tf-700 focus:outline-none focus:ring focus:ring-blue-tf-300 not-italic font-bold text-xl text-center text-white"
              >
                Log in
              </Link>
            </>
          )}

          {user && (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="bg-blue-tf-700 hover:bg-blue-tf-900 p-5 border-radius-tf box-border border-transparent-tf active:bg-blue-tf-700 focus:outline-none focus:ring focus:ring-blue-tf-300 not-italic font-bold text-xl text-center text-white flex">
                  {user && userPhotoUrl ? (
                    <>
                      <img
                        src={userPhotoUrl + "?type=large"}
                        alt={user?.displayName ?? ""}
                        referrerPolicy="no-referrer"
                        className="rounded-full w-9 h-9 absolute mt-[-5px] ml-[-8px] border-2 border-white"
                      />
                    </>
                  ) : null}

                  {user && userPhotoUrl ? <div className="w-10"></div> : null}

                  {getFirstName(user?.displayName ?? "...")}

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-2 mt-1 h-5 text-white cursor-pointer"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-tf-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-white-700",
                            "block px-4 py-2 text-lg"
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-white-700",
                            "block px-4 py-2 text-lg"
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-white-700",
                            "block px-4 py-2 text-lg"
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>{" "}
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-white-700",
                            "block px-4 py-2 text-lg"
                          )}
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white bg-blue-tf-700 hover:text-white hover:bg-blue-tf-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menu principal</span>
            <img
              className="block h-6 w-6"
              src="/assets/svg/list.svg"
              alt="Menu"
              aria-hidden="true"
            />
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
            {!user && (
              <Link
                href="/Login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Login
              </Link>
            )}
            {user && (
              <a
                className="block cursor-pointer px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={handleLogout}
              >
                Logout ({user?.displayName ?? ""})
              </a>
            )}
          </div>
          <button onClick={closeMenu} className="absolute top-3 right-3">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="#999"
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
