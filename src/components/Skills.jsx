import {FaHtml5, FaCss3Alt, FaBootstrap} from "react-icons/fa";
import {
	RiJavascriptFill,
	RiReactjsFill,
	RiTailwindCssFill,
} from "react-icons/ri";
import {TbBrandFramerMotion, TbBrandFigma} from "react-icons/tb";
import {IoMdGitBranch} from "react-icons/io";

import {motion} from "framer-motion";

const iconVariants = (duration) => ({
	initial: {y: -10},
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Skills = () => {
	return (
		<section className="my-48 px-6 py-10 min-h-screen" id="skills">
			<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
				Skills
			</h1>
			<div className="h-1 w-20 bg-white mb-10"></div>

			<div className="pb-24">
				<motion.h1
					whileInView={{opacity: 1, y: 0}}
					initial={{opacity: 0, y: -100}}
					transition={{duration: 1.5}}
					className="my-20 text-center text-4xl">
					My Webdev Toolkit
				</motion.h1>
				<div className="flex flex-wrap items-center justify-center gap-4">
					<motion.div
						variants={iconVariants(2.5)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<FaHtml5 className="text-7xl text-red-500" />
					</motion.div>

					<motion.div
						variants={iconVariants(3)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<FaCss3Alt className="text-7xl text-blue-500" />
					</motion.div>

					<motion.div
						variants={iconVariants(5)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<RiJavascriptFill className="text-7xl text-yellow-300" />
					</motion.div>

					<motion.div
						variants={iconVariants(2)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<RiReactjsFill className="text-7xl text-blue-600" />
					</motion.div>

					<motion.div
						variants={iconVariants(6)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<RiTailwindCssFill className="text-7xl text-cyan-400" />
					</motion.div>

					<motion.div
						variants={iconVariants(3)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<FaBootstrap className="text-7xl text-blue-600" />
					</motion.div>

					<motion.div
						variants={iconVariants(4)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<TbBrandFramerMotion className="text-7xl text-yellow-200" />
					</motion.div>

					<motion.div
						variants={iconVariants(2)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<IoMdGitBranch className="text-7xl text-green-600" />
					</motion.div>

					<motion.div
						variants={iconVariants(1)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-pink-500 p-4">
						<TbBrandFigma className="text-7xl text-stone-500" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
