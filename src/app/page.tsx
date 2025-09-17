import About from "./about/page";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Projects />
      {/* Blogs */}
      {/* <Newsletter /> */}
      <Contact />
      <Footer />
    </>
  );
}
