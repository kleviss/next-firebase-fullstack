import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>FOREX TRADING ACADEMY&nbsp;</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rregjistrohu
                </a>
              </span>
            </p>
          </div>
        </div>

        <Image
          src="/head.png"
          alt="VisionFX Head Hero"
          width={464}
          height={436}
          style={{ marginLeft: 100 }}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Mesime Falas <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Mesime falas per te gjithe qe deshiron te futen ne boten e Forex-it
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Kursi me pagese <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Analizat teknike dhe pergatitje e avancuar per te bere i suksesshem
            ne forex
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Analiza Teknike <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Shpjegimi i disa koncepteve bazike te menyres sesi funksionon
            analiza teknike
          </p>
        </a>
      </div>
    </main>
  );
}
