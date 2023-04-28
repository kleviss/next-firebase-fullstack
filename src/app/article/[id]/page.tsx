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
    <main>
      <h1> Article {params.id} </h1>

      <p>
        <Link href={"/articles"}> Back to Articles </Link>
      </p>
    </main>
  );
};

export default ArticlePage;
