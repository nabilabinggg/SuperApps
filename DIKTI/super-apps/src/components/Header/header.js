import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 body-font bg-blue-500 h-22">
      <div className="container flex flex-wrap flex-col md:flex-row items-center">
        <img className="mx-11 py-3.5" src="/Logoditjen.png" />

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/">
          <a className="mr-5 text-lg hover:text-black text-active ">Beranda</a>
          </Link>
          <Menu as="div" className="relative inline-block text-left z-10 ">
            <div className="mr-2">
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-lg text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
          <a className="mr-5 text-lg text-white hover:text-black">FAQ</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
