import AnimatedBG from "./components/AnimatedBG.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";

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
