import {motion} from "framer-motion";
import {HERO_CONTENT} from "../constants";
import alan from "../assets/alan-webb.webp";
import {FaDownload} from "react-icons/fa";

const textVariants = {
	hidden: {opacity: 0, y: 50},
	visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}},
};

const containerVariants = {
	hidden: {opacity: 1},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const imageVariants = {
	hidden: {clipPath: "inset(0 50% 0 50%"},
	visible: {
		clipPath: "inset(0 0% 0 0%",
		transition: {duration: 1.2, ease: "easeInOut"},
	},
};

const Hero = () => {
	return (
		<section>
			<div className="z-10 min-h-screen flex flex-col md:flex-row items-center text-white mt-12">
				<motion.div
					className="w-full md:w-1/2 p-8 xl:ps-80"
					initial="hidden"
					animate="visible"
					variants={containerVariants}>
					<motion.h1
						className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-4"
						variants={textVariants}>
						{HERO_CONTENT.name}
					</motion.h1>
					<motion.h2
						className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-4"
						variants={textVariants}>
						{HERO_CONTENT.title}
					</motion.h2>
					<motion.p
						className="text-xl md:text-2xl lg:text-4xl mb-4"
						variants={textVariants}>
						{HERO_CONTENT.introduction}
					</motion.p>
					<motion.p
						className="text-xl md:text-2xl lg:text-4xl"
						variants={textVariants}>
						{HERO_CONTENT.description}
					</motion.p>
					<motion.a
						className="bg-pink-600 text-white text-lg p-3 lg:p-4 mt-8 inline-block rounded-2xl hover:bg-pink-500"
						href={HERO_CONTENT.resumeLink}
						download
						rel="noopener noreferrer"
						target="_blank"
						variants={textVariants}>
						{HERO_CONTENT.resumeLinkText}
						<FaDownload className="inline-block mx-3 mb-1 text-sm" />
					</motion.a>
				</motion.div>

				<motion.div
					className="w-full md:w-1/2 px-8"
					initial="hidden"
					animate="visible"
					variants={imageVariants}>
					<img
						src={alan}
						alt="Alan Webb"
						width={500}
						height={500}
						className="rounded-4xl"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
