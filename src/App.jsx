import AnimatedBG from "./components/AnimatedBG.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
	return (
		<>
			<AnimatedBG />
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Testimonials />
			<Contact />
		</>
	);
};

export default App;
