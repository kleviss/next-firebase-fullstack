"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <h1
        className={
          "text-4xl text-center font-medium text-black hover:text-gray-900"
        }
      >
        {" "}
        Article {params.id}{" "}
      </h1>

      <p
        className={
          "text-4xl text-center font-medium text-gray-500 hover:text-gray-900"
        }
      >
        <Link href={"/articles"}> Back to Articles </Link>
      </p>
    </main>
  );
};

export default ArticlePage;
