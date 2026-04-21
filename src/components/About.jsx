const About = () => {
	return (
		<section className="px-6 py-10" id="about">
			<h1 className="text-2xl md:text-6xl font-medium tracking-tight mb-10">
				About
			</h1>
			<div className="h-1 w-20 mb-10 bg-white"></div>
			<div className="max-w-4xl mx-auto pb-6 lg:text-3xl mb-10 leading-relaxed">
				<p>
					I am a dedicated frontend developer with a passion for building modern
					web applications that are both functional and aesthetically pleasing.
					Over the years, I have worked on numerous projects, always ensuring
					high performance and seamless user experiences.
				</p>
				<p className="mt-12">
					I specialize in using technologies like React, Tailwind CSS and
					Framer-motion to create responsive and scalable interfaces. My focus
					is on writing clean, maintainable code while aiming to deliver
					projects that meet both business goals and user needs.
				</p>
			</div>
		</section>
	);
};

export default About;
