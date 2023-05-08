"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NavTop from "@/components/NavTop";
import FreeLessons from "@/components/FreeLessons";

const FreeLessonsPage = () => {
  const router = useRouter();

  return (
    <main className="bg-gray-100 min-h-full">
      <NavTop user={null} href={"/free-lessons"} />
      <FreeLessons />
    </main>
  );
};

export default FreeLessonsPage;
