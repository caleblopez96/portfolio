import NavBar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Footer from "../components/Footer/Footer"

const HomePage = () => {
  return (
    <div>
      <NavBar /> {/* Use NavBar as a component */}
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;