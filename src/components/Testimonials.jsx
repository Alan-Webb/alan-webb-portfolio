import {motion} from "framer-motion";
import person1 from "../assets/test-user-1.webp";
import person2 from "../assets/test-user-2.webp";
import person3 from "../assets/test-user-3.webp";
import person4 from "../assets/test-user-4.webp";
import person5 from "../assets/test-user-5.webp";
import person6 from "../assets/test-user-6.webp";

const childVariants = {
	hidden: {opacity: 0, y: 50},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay: i * 0.5,
		},
	}),
};

const Testimonials = () => {
	const testimonials = [
		{
			name: "Ysolde Ripley",
			title: "Engineer, Nova Haven",
			feedback:
				"If you want to take your business to the next level, use AWDev and don't look any further. I strongly recommend their services.",
			image: person1,
		},
		{
			name: "Diana Prince",
			title: "Recruitment, Paragon Studios",
			feedback:
				"I would recommend AWDev for anyone trying to get the word out about their business. AWDev seems to instinctively know the right layout for your businesses website.",
			image: person2,
		},
		{
			name: "Bryce Conner",
			title: "Event Manager, Tech Noir",
			feedback:
				"This is an amazing service and it has saved me and my small business so much time. I plan to use it for as long as I am running my business.",
			image: person3,
		},
		{
			name: "Mathilda Hex",
			title: "High Priestess, Matilda Hex Ltd",
			feedback:
				"I have been using AWDev for nearly a year now and I love it! It really boosted my very niche business when I thought it wasn't going to take off.",
			image: person4,
		},
		{
			name: "Danica Miller",
			title: "Maitre, Gist-o-Tron Systems",
			feedback:
				"Working with AWDev was a fantastic experience. They truly understood our vision and translated it into a sleek, user-friendly website that has significantly boosted our online sales.",
			image: person5,
		},
		{
			name: "Sarah Chen",
			title: "Marketing, Retro-metamorphosis Ltd",
			feedback:
				"From the initial consultation to the final launch, their attention to detail and commitment to quality were evident. The website they created perfectly reflects our brand identity.",
			image: person6,
		},
	];

	return (
		<section className="px-6 py-10 min-h-screen" id="testimonials">
			<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
				What People Are Saying
			</h1>
			<div className="h-1 w-20 bg-white mb-10"></div>
			{/* TESTIMONIALS CARD */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{testimonials.map((testimonial, index) => (
					<motion.div
						key={index}
						className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
						custom={index}
						initial="hidden"
						whileInView="visible"
						variants={childVariants}>
						<div className="flex items-center mb-4">
							{/* Image */}
							<img
								src={testimonial.image}
								alt={testimonial.name}
								className="w-12 h-12 rounded-full mr-4"
								loading="lazy"
							/>
							{/* Name & Title */}
							<div>
								<h2 className="text-lg font-semibold">{testimonial.name}</h2>
								<p className="text-sm font-light">{testimonial.title}</p>
							</div>
						</div>
						{/* Feedback */}
						<p className="leading-relaxed">{testimonial.feedback}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
