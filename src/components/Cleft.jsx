import {PROJECTS} from "../constants";
import {MdArrowOutward} from "react-icons/md";

const Projects = () => {
	return (
		<section className="px-6 py-10 min-h-screen" id="projects">
			<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
				Projects
			</h1>
			<div className="h-1 w-20 bg-white mb-10"></div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className="relative overflow-hidden rounded-3xl max-w-[30rem]">
						<img
							src={project.image}
							alt={project.name}
							className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
							<h3 className="mb-2 text-xl">{project.name}</h3>
							<p className="mb-12 p-4">{project.description}</p>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300">
								<div className="flex items-center">
									<span>View Project</span>
									<MdArrowOutward />
								</div>
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
