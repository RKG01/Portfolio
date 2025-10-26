import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import CodingProfiles from "@/components/CodingProfiles";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechStack />
      <CodingProfiles />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
