import About from "./about/page";
import ThreeDCard from "./certificates/Certificates";
import Contact from "./components/ContactUs";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Projects />
      <Experience />
      <SkillsSection />
      {/* Blogs */}
      {/* <Newsletter /> */}
      <ThreeDCard />
      <Contact />
      <Footer />
    </>
  );
}
