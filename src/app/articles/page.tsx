"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FreeLessons from "@/components/FreeLessons";
import NavTop from "@/components/NavTop";
import Link from "next/link";

const ArticlesPage = () => {
  const router = useRouter();

  return (
    <main className="bg-gray-100 min-h-screen">
      <NavTop user={null} />
      <h1 className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900 px-30 py-20 rounded-md text-sm">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          // eslint-disable-next-line react/jsx-key
          <p>
            <Link href={`/article/${i}`}> Article {i} </Link>
          </p>
        ))}
      </h1>
    </main>
  );
};

export default ArticlesPage;
