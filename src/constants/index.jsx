import projects1 from "../assets/paragon-studios.webp";
import projects2 from "../assets/tech-noir.webp";
import projects3 from "../assets/matilda-hex.webp";

import {FaHtml5, FaCss3Alt, FaGithub, FaBootstrap} from "react-icons/fa";

import {
	RiJavascriptFill,
	RiReactjsFill,
	RiTailwindCssFill,
} from "react-icons/ri";

import {TbBrandFramerMotion} from "react-icons/tb";

import person1 from "../assets/test-user-1.webp";
import person2 from "../assets/test-user-2.webp";
import person3 from "../assets/test-user-3.webp";
import person4 from "../assets/test-user-4.webp";
import person5 from "../assets/test-user-5.webp";
import person6 from "../assets/test-user-6.webp";

export const LINKS = [
	{href: "#about", label: "About"},
	{href: "#projects", label: "Projects"},
	{href: "#skills", label: "Skills"},
	{href: "#testimonials", label: "Testimonials"},
	{href: "#contact", label: "Contact"},
];

export const HERO_CONTENT = {
	name: "Alan Webb",
	title: "Frontend Developer",
	introduction:
		"I'm a creative frontend developer, crafting immersive and intuitive web experiences.",
	description:
		"I’m currently bringing independent projects to life through interactive digital solutions.",
	resumeLinkText: "Download Resume",
	resumeLink: "/resume.pdf",
};

export const ABOUT_CONTENT = {
	paragraphs: [
		"I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects, always ensuring high performance and seamless user experiences.",
		"I specialize in using technologies like React, Tailwind CSS and Framer-motion to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while aiming to deliver projects that meet both business goals and user needs.",
	],
};

export const PROJECTS = [
	{
		id: 1,
		title: "Paragon Studios",
		description: "Martial arts training videos",
		techStack: [
			<RiReactjsFill className="text-purple-400" />,
			<RiTailwindCssFill className="text-blue-300" />,
			<TbBrandFramerMotion className="text-yellow-300" />,
		],
		imgSrc: projects1,
		link: "https://paragon-studio.vercel.app//",
	},
	{
		id: 2,
		title: "Tech Noir",
		description: "Cinematic Special Effects",
		techStack: [
			<RiReactjsFill className="text-purple-400" />,
			<RiTailwindCssFill className="text-blue-300" />,
		],
		imgSrc: projects2,
		link: "https://tech-noir.vercel.app/",
	},
	{
		id: 3,
		title: "Matilda Hex",
		description: "Wiccan solutions",
		techStack: [
			<FaHtml5 className="text-red-600" />,
			<FaBootstrap className="text-blue-700" />,
			<RiJavascriptFill className="text-yellow-300" />,
		],
		imgSrc: projects3,
		link: "https://matilda-hex.vercel.app/",
	},
];

export const SKILLS = [
	{
		name: "HTML5",
		icon: <FaHtml5 className="text-orange-600" />,
	},
	{
		name: "CSS3",
		icon: <FaCss3Alt className="text-blue-500" />,
	},
	{
		name: "JavaScript",
		icon: <RiJavascriptFill className="text-yellow-500" />,
	},
	{
		name: "React",
		icon: <RiReactjsFill className="text-purple-400" />,
	},
	{
		name: "Tailwind CSS",
		icon: <RiTailwindCssFill className="text-green-500" />,
	},
	{
		name: "Github",
		icon: <FaGithub className="text-pink-400" />,
	},
];

export const TESTIMONIALS = [
	{
		name: "Ysolde Ripley",
		title: "Engineer, Bachaus LTD",
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
		title: "Maitre, Salle Pierre",
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
