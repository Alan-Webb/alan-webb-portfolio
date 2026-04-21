import projects1 from "../assets/iron-asylum.webp";
import projects2 from "../assets/cinephilia-hq.webp";
import projects3 from "../assets/gist-o-tron.webp";
import projects4 from "../assets/nova-haven.webp";
import projects5 from "../assets/paragon-studios.webp";
import projects6 from "../assets/tech-noir.webp";
import projects7 from "../assets/retro-meta.webp";
import {RiReactjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiVite} from "react-icons/si";
import {TbBrandFramerMotion} from "react-icons/tb";
import {MdArrowOutward} from "react-icons/md";

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "Iron Asylum",
			description: "Gym Website",
			techStack: [
				<RiReactjsFill className="text-purple-400" />,
				<RiTailwindCssFill className="text-blue-300" />,
				<TbBrandFramerMotion className="text-yellow-300" />,
			],
			imgSrc: projects1,
			link: "https://iron-asylum.vercel.app/",
		},
		{
			id: 2,
			title: "Cinephilia HQ",
			description: "Movie Database App",
			techStack: [
				<RiReactjsFill className="text-purple-400" />,
				<SiVite className="text-blue-500" />,
				<RiTailwindCssFill className="text-blue-300" />,
			],
			imgSrc: projects2,
			link: "https://cinephilia-hq.vercel.app/",
		},
		{
			id: 3,
			title: "Gist-O-Tron",
			description: "AI Text Summarizer",
			techStack: [
				<RiReactjsFill className="text-purple-400" />,
				<SiVite className="text-blue-500" />,
				<RiTailwindCssFill className="text-blue-300" />,
			],
			imgSrc: projects3,
			link: "https://gist-o-tron.vercel.app/",
		},
		{
			id: 4,
			title: "Nova Haven",
			description: "Real Estate Web Site",
			techStack: [
				<RiReactjsFill className="text-purple-400" />,
				<SiVite className="text-blue-500" />,
				<RiTailwindCssFill className="text-blue-300" />,
			],
			imgSrc: projects4,
			link: "https://nova-haven-fawn.vercel.app/",
		},
		{
			id: 5,
			title: "Paragon Studios",
			description: "Martial Arts Training Web Site",
			techStack: [
				<RiReactjsFill className="text-purple-400" />,
				<RiTailwindCssFill className="text-blue-300" />,
				<TbBrandFramerMotion className="text-yellow-300" />,
			],
			imgSrc: projects5,
			link: "https://paragon-studio.vercel.app//",
		},
		{
			id: 6,
			title: "Tech Noir",
			description: "Cinematic Special Effects Web Site",
			techStack: [
				<RiReactjsFill className="text-purple-400" />,
				<SiVite className="text-blue-500" />,
				<RiTailwindCssFill className="text-blue-300" />,
			],
			imgSrc: projects6,
			link: "https://tech-noir.vercel.app/",
		},
		{
			id: 7,
			title: "Retro Metamorphosis",
			description: "Analogue to Digital Transcription Web Site",
			techStack: [
				<RiReactjsFill className="text-purple-400" />,
				<RiTailwindCssFill className="text-blue-300" />,
				<TbBrandFramerMotion className="text-yellow-300" />,
			],
			imgSrc: projects7,
			link: "https://retro-metamorphosis.vercel.app/",
		},
	];

	return (
		<section className="px-6 pb-10 min-h-screen mt-12" id="projects">
			<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
				Projects
			</h1>
			<div className="h-1 w-20 bg-white mb-10"></div>
			{/* PROJECT CARD */}
			<div className="flex flex-wrap justify-center ">
				{projects.map((project) => (
					<div
						key={project.id}
						className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3">
						<div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20 hover:scale-110 transition duration-400">
							{/* Image */}
							<img
								src={project.imgSrc}
								alt={project.title}
								className="h-80 w-full object-cover"
							/>
							{/* Title */}
							<div className="p-6 text-center">
								<h3 className="mb-3 text-lg font-bold lg:text-2xl">
									{project.title}
								</h3>
								<p className="mb-4">{project.description}</p>
								{/* Project Link */}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-pink-600 border border-pink-50 text-white text-md font-bold p-3 lg:p-4 inline-block rounded-2xl mb-6 hover:bg-pink-500">
									<p>
										View Project
										<MdArrowOutward className="inline-block ms-2 mb-1" />
									</p>
								</a>
								{/* Tech Icons */}
								<div className="flex flex-col">
									<p className="font-bold mb-3">Tech Stack</p>
									<ul className="flex justify-center gap-6">
										{project.techStack.map((tech, index) => (
											<li
												key={index}
												className="text-4xl md:text-5xl lg:text-6xl p-1">
												{tech}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
