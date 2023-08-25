"use client";
import React from "react";
import Link from "next/link";

const PayPerView = () => {
  return (
    <div className=" py-20 flex flex-col justify-center items-center align-middle">
      <svg
        className="w-16 h-16 text-white mb-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="12" width="18" height="8" rx="2" ry="2"></rect>
        <path d="M7 12V7a5 5 0 0 1 10 0v5"></path>
      </svg>
      <h1 className="text-white text-3xl font-bold mb-4">Pay to View</h1>
      <p className="text-white text-lg text-center mr-24 ml-24">
        Mesa duket pagesa juaj nuk është procesuar ende. Për të parë këto video
        duhet më parë të abonoheni. Nëse jeni abonuar dhe nuk mund të shihni
        video, ju lutem na dërgoni një mesazh në Telegram.
      </p>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeOuU6-LL5nqqtZgIu7JPI6cVpEQk-fpCarkSSi24STWd9VpQ/viewform?usp=sf_link"
        target="_blank"
        className="bg-white text-red-500 hover:bg-black hover:text-white mt-8 py-2 px-4 rounded-lg font-medium transition duration-300"
      >
        Regjistrohu
      </Link>
    </div>
  );
};

export default PayPerView;
