import Hero from "../components/Hero";
import AmazonLogo from "../components/AmazonLogo";
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
      <ServicesSection />
      <StatSection />
    </div>
  );
}
