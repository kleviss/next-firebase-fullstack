"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FreeLessons from "@/components/FreeLessons";
import NavTop from "@/components/NavTop";

const FreeLessonsPage = () => {
  const router = useRouter();

  return (
    <main className="bg-gray-100 min-h-screen">
      <NavTop user={null} />
      <FreeLessons />
    </main>
  );
};

export default FreeLessonsPage;
