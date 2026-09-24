import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import About from "@/components/About";
import Services from "@/components/Services";
import Vlogs from "@/components/Vlogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Books />
        <About />
        <Services />
        <Vlogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
