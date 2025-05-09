import {motion} from "framer-motion";
import {ABOUT_CONTENT} from "../constants";

const textVariants = {
	hidden: {opacity: 0, y: 50},
	visible: {
		opacity: 1,
		y: 0,
		transition: {duration: 0.6, ease: "easeOut"},
	},
};

const About = () => {
	return (
		<section className="px-6 py-10" id="about">
			<h1 className="text-2xl md:text-6xl font-medium tracking-tight mb-10">
				About
			</h1>
			<div className="h-1 w-20 mb-10 bg-white"></div>

			<div className="max-w-4xl mx-auto pb-6">
				{ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
					<motion.p
						key={index}
						className="lg:text-3xl mb-10 leading-relaxed"
						initial="hidden"
						whileInView="visible"
						viewport={{once: true, amount: 0.5}}
						variants={textVariants}>
						{paragraph}
					</motion.p>
				))}
			</div>
		</section>
	);
};

export default About;
