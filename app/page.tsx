import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import KakaoFloat from "@/components/KakaoFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Templates />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <KakaoFloat />
    </>
  );
}
