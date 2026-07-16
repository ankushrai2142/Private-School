import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Academics from "./components/Academics";
import Admission from "./components/Admission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Academics />
        <Admission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
