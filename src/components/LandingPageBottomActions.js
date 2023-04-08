"use client";
import React from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const LandingPageBottomActions = () => {
  return (
    <div className={styles.grid}>
      <Link
        href="/free-lessons"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Mesime Falas <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Mesime falas per te gjithe qe deshiron te futen ne boten e Forex-it
        </p>
      </Link>

      <Link href="/dashboard" className={styles.card} rel="noopener noreferrer">
        <h2 className={inter.className}>
          Kursi me pagese <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Analizat teknike dhe pergatitje e avancuar per te bere i suksesshem ne
          forex
        </p>
      </Link>

      <Link
        href="/tech-analysis"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Analiza Teknike <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Shpjegimi i disa koncepteve bazike te menyres sesi funksionon analiza
          teknike
        </p>
      </Link>
    </div>
  );
};

export default LandingPageBottomActions;
