"use client";
import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

const LandingPageHeader = () => {
  return (
    <div className={styles.description}>
      <p>
        <code className={styles.code}>FOREX TRADING ACADEMY&nbsp;</code>
      </p>
      <div>
        <a
          href="https://visionfx.cc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/visionfx-brardhe.png"
            alt="VisionFX Logo"
            className={styles.vercelLogo}
            width={110}
            height={45}
            priority
          />
        </a>
      </div>
    </div>
  );
};

export default LandingPageHeader;
