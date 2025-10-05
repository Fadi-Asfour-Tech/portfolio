import About from "./about/page";
import Contact from "./components/ContactUs";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Projects />
      <Experience/>
      {/* Blogs */}
      {/* <Newsletter /> */}
      <Contact />
      <Footer />
    </>
  );
}
