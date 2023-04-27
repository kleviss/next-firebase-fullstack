"use client";
import React from "react";
import Link from "next/link";
import signOutUser from "@/firebase/auth/signout";
import { useRouter } from "next/navigation";

const NavTop = ({ user }) => {
  console.log("user from navtop", user);
  const router = useRouter();

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
    <nav className="bg-white shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src="/Vfavicon-150x150.jpg" alt="Logo" />
              <span className="font-medium text-black px-3 py-2 rounded-md text-sm">
                {" "}
                <Link
                  className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                  href={"/"}
                >
                  VISION FX
                </Link>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href={"/login"}
                  className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
