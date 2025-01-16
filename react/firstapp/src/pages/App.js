import { Accordion } from "react-accessible-accordion";
import Hero from "../components/Hero";
import AmazonLogo from "../components/AmazonLogo";
import Faq from "../components/Faq";
import StatSection from "../components/StatSection";
import Pricing from "../components/Pricing";
// import Navbar2 from "../components/Nabar2";
import ServicesSection from "../components/ServicesSection";

export default function App() {
  return (
    <div>
      {/* <Navbar2 /> */}
      <Hero />

      <AmazonLogo />
      <Pricing />
      <ServicesSection/>
      <StatSection />

      <Accordion />
    </div>
  );
}
