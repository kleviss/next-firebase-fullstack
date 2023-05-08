"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NavTop from "@/components/NavTop";
import Link from "next/link";
import { useFetch } from "@/hooks/useSWR";
import { Article } from "@/types/article";

const ArticlesPage = () => {
  const router = useRouter();
  const { GetBusinessNews } = useFetch();
  const { data: newsData, error: newsError } = GetBusinessNews();

  return (
    <main className="bg-gray-100 min-h-screen">
      <NavTop user={null} href={"/articles"} />
      <h1 className=" px-30 py-20 ">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <p
            key={i}
            className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900"
          >
            <Link href={`/article/${i}`}>Article {i} </Link>
          </p>
        ))}
        {newsError ? (
          <div className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900">
            {newsError.toString()}
          </div>
        ) : !newsData ? (
          <div className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900">
            loading...
          </div>
        ) : (
          <h1 className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900">
            {newsData.map((article: Article) => (
              <div
                key={article.title}
                className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900"
              >
                <h1 className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900">
                  {article.title}
                </h1>
                <p className="text-4xl text-center font-medium text-gray-500 hover:text-gray-900">
                  {article.description}
                </p>
              </div>
            ))}
          </h1>
        )}
      </h1>
    </main>
  );
};

export default ArticlesPage;
