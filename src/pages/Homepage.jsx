import NavBar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"

const HomePage = () => {
  return (
    <div>
      <NavBar /> {/* Use NavBar as a component */}
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;