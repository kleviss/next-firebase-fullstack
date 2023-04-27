"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FreeLessons from "@/components/FreeLessons";
import Link from "next/link";

const FreeLessonsPage = () => {
  const router = useRouter();

  return (
      <main className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow-lg fixed top-0 w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img className="h-8 w-8" src="/Vfavicon-150x150.jpg" alt="Logo" />
                  <span className="font-medium text-black px-3 py-2 rounded-md text-sm">VISION FX</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block">
                  <Link className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm" href={"/"}>
                    Faqja Kryesore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>





        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-6">
          <FreeLessons />
        </div>

      </main>
  );
};

export default FreeLessonsPage;
