import styles from "./page.module.css";
import LandingPageHeader from "../components/LandingPageHeader";
import LandingPageMainContent from "../components/LandingPageMainContent";
import LandingPageBottomActions from "../components/LandingPageBottomActions";
import LandingPageFooter from "../components/LandingPageFooter";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <LandingPageHeader />
        <LandingPageMainContent />
        <LandingPageBottomActions />
      </main>
      {/* <LandingPageFooter /> */}
    </>
  );
};

export default Home;
