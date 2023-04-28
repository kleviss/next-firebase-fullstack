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
          Mesime Falas{" "}
          <span>
            <svg
              className="h-5 w-5 inline-block ml-1 pb-0.5"
              strokeWidth="3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </h2>
        <p className={inter.className}>
          Mesime falas per te gjithe qe deshiron te futen ne boten e Forex-it
          dhe per te mesuar
        </p>
      </Link>

      <Link href="/dashboard" className={styles.card} rel="noopener noreferrer">
        <h2 className={inter.className}>
          Kursi me pagese{" "}
          <span>
            <svg
              className="h-5 w-5 inline-block ml-1 pb-0.5"
              strokeWidth="3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </h2>
        <p className={inter.className}>
          Analizat teknike dhe pergatitje e avancuar per te bere i suksesshem ne
          forex dhe per te bere para
        </p>
      </Link>

      <Link href="/" className={styles.card} rel="noopener noreferrer">
        <h2 className={inter.className}>
          Artikuj Teknik{" "}
          <span>
            <svg
              className="h-5 w-5 inline-block ml-1 pb-0.5"
              strokeWidth="3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </h2>
        <p className={inter.className}>
          Shpjegimi i disa koncepteve bazike te menyres sesi funksionon analiza
          teknike plus artikuj te ndryshem nga bota e forex-it
        </p>
      </Link>
    </div>
  );
};

export default LandingPageBottomActions;
