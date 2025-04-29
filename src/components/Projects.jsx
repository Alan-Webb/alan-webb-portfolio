import {motion} from "framer-motion";
import {PROJECTS} from "../constants";

const Projects = () => {
	return (
		<section className="px-6 py-10 min-h-screen mt-12" id="projects">
			<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
				Projects
			</h1>
			<div className="h-1 w-20 bg-white mb-10"></div>

			<div className="flex flex-wrap justify-center">
				{PROJECTS.map((project) => (
					<div
						key={project.id}
						className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3">
						<div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								<img
									src={project.imgSrc}
									alt={project.title}
									className="h-60 w-full object-cover"
								/>
							</a>
							<div className="p-6">
								<h3 className="mb-2 text-lg font-medium lg:text-2xl">
									{project.title}
								</h3>
								<p className="mb-4">{project.description}</p>
								<div className="mb-4">
									<strong>Tech Stack:</strong>
									<ul>
										{project.techStack.map((tech, index) => (
											<li
												key={index}
												className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold">
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
