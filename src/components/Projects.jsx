import {PROJECTS} from "../constants";
import {MdArrowOutward} from "react-icons/md";

const Projects = () => {
	return (
		<section className="px-6 py-10 min-h-screen mt-12" id="projects">
			<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
				Projects
			</h1>
			<div className="h-1 w-20 bg-white mb-10"></div>

			<div className="flex flex-wrap justify-center ">
				{PROJECTS.map((project) => (
					<div
						key={project.id}
						className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3">
						<div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20 hover:scale-110 transition duration-800">
							<img
								src={project.imgSrc}
								alt={project.title}
								className="h-80 w-full object-cover "
							/>

							<div className="p-6 text-center">
								<h3 className="mb-3 text-lg font-bold lg:text-2xl">
									{project.title}
								</h3>
								<p className="mb-4">{project.description}</p>

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
