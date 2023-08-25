import HomeMain from "@/components/HomeMain";
import PricingSection from "@/components/PricingSection";
import FeatureSection from "@/components/FeatureSection";
import BlogSection from "@/components/BlogSection";
import LandingPageFooter from "@/components/LandingPageFooter";

const Home = () => {
  return (
    <>
      <HomeMain />
      <FeatureSection />
      <PricingSection />
      <BlogSection />
      <LandingPageFooter />
    </>
  );
};

export default Home;
