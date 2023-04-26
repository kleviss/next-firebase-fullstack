"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "../../app/page.module.css";
import FreeLessons from "@/components/FreeLessons";
import Link from "next/link";

const FreeLessonsPage = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <>
        <div>
          <h1>Mesime pa lek</h1>
          <Link href="/"> Faqja Kryesore </Link>
        </div>
        <FreeLessons />
      </>
    </main>
  );
};

export default FreeLessonsPage;
