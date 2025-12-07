import NavBar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />
            <CaseStudies />
            <Footer />
        </div>
    );
};

export default HomePage;
