import Hero from "../components/Hero";
import About from "../components/About";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Tools />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
