import AnimatedBG from "./components/AnimatedBG.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	return (
		<main>
			<AnimatedBG />
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Testimonials />
			<Contact />
		</main>
	);
};

export default App;
