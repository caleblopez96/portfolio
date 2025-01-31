import NavBar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Footer from "../components/Footer/Footer"
import Contact from "../components/Contact/Contact"

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;