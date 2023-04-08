"use client";
import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const LandingPageMainContent = () => {
  return (
    <div className={styles.headGrid}>
      {/* Hero Div with big title, subtitel and button */}
      <div className={styles.hero}>
        <h1 className={inter.className}>
          <span className={styles.heroTitleSpan}>
            Bëhu i sukseshëm në Forex Trading
          </span>
        </h1>
        <p className={inter.className}>
          <span className={styles.heroSubtitleSpan}>
            Kursi i vetem komplet në gjuhën shqipe që do ju duhet për tu bërë
            mjeshtra të forexit.{" "}
            <span style={{ textDecoration: "underline" }}>
              #leTaMarrimAtBuke
            </span>
            {" 🍞 "}
            se bashku djema!
          </span>
        </p>{" "}
        <div className={styles.button}>
          <p className={inter.className}>
            <span className={styles.subtitleSpan}>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOuU6-LL5nqqtZgIu7JPI6cVpEQk-fpCarkSSi24STWd9VpQ/viewform?usp=sf_link"
                target="_blank"
              >
                Regjistrohu
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          src="/head.png"
          alt="VisionFX Head Hero"
          width={464}
          height={436}
          style={{ marginLeft: 100 }}
          priority
        />
      </div>
    </div>
  );
};

export default LandingPageMainContent;
