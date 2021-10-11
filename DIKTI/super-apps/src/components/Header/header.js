import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { defaults } from "autoprefixer";

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-blue-500 p-3 ">
      <Link href="/">
        <a className="inline-flex items-center mx-11 ">
          <img src="/Logoditjen.png" className="mx-auto" alt="" />
        </a>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-yellow-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-semibold text-lg items-center justify-center hover:bg-yellow-500 hover:text-white ">
              Beranda
            </a>
          </Link>
          <Menu
            as="div"
            className="relative inline-block hover:bg-yellow-500 hover:text-white rounded text-left z-10 "
          >
            <div className="mr-2">
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-lg font-semibold  text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Layanan
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
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
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://pddikti.kemdikbud.go.id/">
                        <a target="_blank" rel="noreferrer">
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-gray-400"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {/* {active ? (
                  <EditActiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                ) : (
                  <EditInactiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                )} */}
                            PDDikti
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://kampusmerdeka.kemdikbud.go.id/">
                        <a target="_blank" rel="noreferrer">
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-gray-400"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {/* {active ? (
                  <DuplicateActiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                ) : (
                  <DuplicateInactiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                )} */}
                            Kampus Merdeka
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://kedaireka.id/">
                        <a target="_blank" rel="noreferrer">
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-gray-400"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {/* {active ? (
                  <ArchiveActiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                ) : (
                  <ArchiveInactiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                )} */}
                            Kedaireka
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://ijazahln.kemdikbud.go.id/ijazahln/">
                        <a target="_blank" rel="noreferrer">
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-gray-400"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {/* {active ? (
                  <MoveActiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                ) : (
                  <MoveInactiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                )} */}
                            Ijazah LN
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://ijazah.kemdikbud.go.id/">
                        <a target="_blank" rel="noreferrer">
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-gray-400"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {/* {active ? (
                    <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                    />
                    ) : (
                    <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                    />
                    )} */}
                            SIVIL
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://pak.kemdikbud.go.id/portalv2/selancar-pak/">
                        <a target="_blank" rel="noreferrer">
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-gray-400"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {/* {active ? (
                    <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                    />
                    ) : (
                    <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                    />
                    )} */}
                            Selancar PAK
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="http://silemkerma.kemdikbud.go.id/">
                        <a target="_blank" rel="noreferrer">
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-gray-400"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {/* {active ? (
                    <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                    />
                    ) : (
                    <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                    />
                    )} */}
                            Silemkerma
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link href="/faqpage">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-semibold text-lg items-center justify-center hover:bg-yellow-500 hover:text-white">
              Tentang
            </a>
          </Link>
          <Link href="/infopage">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-semibold text-lg items-center justify-center hover:bg-yellow-500 hover:text-white">
              Pengumuman
            </a>
          </Link>
          <Link href="/newspage">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-semibold text-lg items-center justify-center hover:bg-yellow-500 hover:text-white">
              Berita
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Header;
