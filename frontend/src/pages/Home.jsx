import MainLayout from "../layouts/MainLayout";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import BenefitsSection from "../components/home/BenefitsSection";
import EventPromoSection from "../components/home/EventPromo";
import CountdownSection from "../components/home/CountdownTimer";
import TestimonialsSection from "../components/home/Testimonials";
import FAQSection from "../components/home/FAQSection";
import CoachesSection from "../components/home/Coaches";

const Home = () => {
  return (
    <MainLayout>

      <HeroSection />

      <AboutSection />

      <BenefitsSection />

      <EventPromoSection />

      <CoachesSection />

      <CountdownSection />

      <TestimonialsSection />

      <FAQSection />

    </MainLayout>
  );
};

export default Home;