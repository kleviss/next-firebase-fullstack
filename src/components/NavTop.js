import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import signOutUser from "@/firebase/auth/signout";
import { useRouter } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Tooltip } from "flowbite-react";

const userNavigation = [
  // { name: "Admin Portal", href: "admin" },
  //{ name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavTop = ({ user, href }) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Free Lessons",
      href: "/free-lessons",
      current: href === "/free-lessons",
    },
    {
      name: "Paid Lessons",
      href: "/dashboard",
      current: href === "/dashboard",
    },
    { name: "Analiza Teknike", href: "/dashboard", current: href === "" },
    { name: "Kalendari Ekonomik", href: "/dashboard", current: href === "" },
  ];

  const handleSignOut = async () => {
    const { error } = await signOutUser();
    if (error) {
      console.log("Error signing out:", error);
    } else {
      console.log("Successfully signed out");
      // Redirect the user to the login page or homepage
      router.push("/");
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full z-50 top-0 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 mobile:px-6 laptop:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href={"/"}>
                    <Image
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                      width={8}
                      height={8}
                    />
                  </Link>
                </div>
                <div className="hidden laptop:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Tooltip
                        style="light"
                        content={
                          item.name === "Analiza Teknike" ||
                          item.name === "Kalendari Ekonomik"
                            ? "Së shpejti..."
                            : item.name
                        }
                        key={item.name}
                      >
                        <Link
                          href={item.href}
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",

                            "rounded-md px-3 py-2 text-sm font-medium",
                            item.name === "Analiza Teknike" ||
                              item.name === "Kalendari Ekonomik"
                              ? "cursor-not-allowed"
                              : ""
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
              {user ? (
                <div className="hidden laptop:block">
                  <div className="ml-4 flex items-center tablet:ml-6 text-gray-400">
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    ></button>
                    {user.email}
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={
                              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80\n"
                            }
                            alt=""
                            width={32}
                            height={32}
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                  onClick={handleSignOut}
                                >
                                  {item.name}{" "}
                                  <span>
                                    <svg
                                      className="h-5 w-5 inline-block ml-1 pb-0.5"
                                      strokeWidth="3"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </span>
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              ) : (
                <Link
                  href={"/login"}
                  className="text-gray-300 hover:text-white text-sm hidden tablet:block"
                >
                  Mësimet premium{" "}
                  <svg
                    className="h-5 w-5 inline-block ml-1 pb-0.5"
                    strokeWidth="3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
              <div className="-mr-2 flex laptop:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="laptop:hidden">
            <div className="space-y-1 px-2 pb-4 pt-12 mobile:px-3 text-center">
              <h1 className="text-2xl font-bold text-white mt-0 mb-24">
                VisionFX Academy
              </h1>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 w-full">
                    {navigation.map((item) => {
                      const isComingSoon =
                        item.name === "Analiza Teknike" ||
                        item.name === "Kalendari Ekonomik";

                      return (
                        <React.Fragment key={item.name}>
                          {isComingSoon ? (
                            <Link
                              href={item.href}
                              className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700 cursor-not-allowed w-full"
                            >
                              {item.name}{" "}
                              <span className="text-xs">(së shpejti)</span>
                            </Link>
                          ) : (
                            <Link
                              href={item.href}
                              className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700 w-full"
                            >
                              {item.name}
                            </Link>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="h-12" />
              </div>
              {user ? (
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image
                        className="rounded-full"
                        src={
                          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80\n"
                        }
                        alt="Profile picture"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base text-sm font-medium leading-none text-gray-400">
                        {user?.displayName || "User:"}
                      </div>
                      <div className="text-sm font-medium leading-none text-white">
                        {user?.email.split("@")[0] || "email"}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Link
                            href={item.href}
                            key={item.name}
                            className={
                              "text-sm block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-gray-700"
                            }
                            onClick={handleSignOut}
                          >
                            {item.name}
                            <span>
                              <svg
                                className="h-5 w-5 inline-block ml-1 pb-0.5"
                                strokeWidth="3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                          </Link>
                        ))}
                      </div>{" "}
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href={"/login"}
                  className="text-gray-300 hover:text-white text-sm "
                >
                  Login
                  <svg
                    className="h-5 w-5 inline-block ml-1 pb-0.5"
                    strokeWidth="3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavTop;
