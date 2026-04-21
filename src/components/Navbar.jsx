import {useState} from "react";
import {FaTimes, FaGithub} from "react-icons/fa";
import {FaBars} from "react-icons/fa6";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const Links = [
		{href: "#about", label: "About"},
		{href: "#projects", label: "Projects"},
		{href: "#skills", label: "Skills"},
		{href: "#testimonials", label: "Testimonials"},
		{href: "#contact", label: "Contact"},
	];

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLinkClick = (e, href) => {
		e.preventDefault();
		const targetElement = document.querySelector(href);
		if (targetElement) {
			const offset = -85;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + scrollY + offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<div>
			<nav className="fixed left-0 right-0 top-4 z-50">
				{/* DESKTOP MENU */}
				<div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
					{/* Logo */}
					<div className="flex items-center justify-between gap-6">
						<div>
							<a href="#">
								<p className="uppercase me-36 hover:text-pink-400">AWDev</p>
							</a>
						</div>
						{/* Navigation */}
						<div>
							<ul className="flex items-center gap-4">
								{Links.map((item, index) => (
									<li key={index}>
										<a
											href={item.href}
											onClick={(e) => handleLinkClick(e, item.href)}
											className="text-sm hover:text-pink-400">
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* Github Link */}
					<div className="ms-6">
						<a
							href="https://github.com/Alan-Webb"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl hover:text-pink-400">
							<FaGithub />
						</a>
					</div>
				</div>
				{/* MOBILE MENU */}
				<div className="relative backdrop-blur-md lg:hidden">
					<div className="flex items-center justify-between mx-6">
						{/* Brand */}
						<div>
							<a href="#">
								<p className="uppercase font-bold hover:text-pink-600">
									Alan Webb
								</p>
							</a>
						</div>
						{/* Hamburger Button */}
						<div className="flex items-center">
							<button
								onClick={toggleMobileMenu}
								className="focus:outline-none lg:hidden">
								{isMobileMenuOpen ? (
									<FaTimes className="m-2 h-6 w-5 cursor-pointer hover:text-pink-600" />
								) : (
									<FaBars className="m-2 h-6 w-5 cursor-pointer hover:text-pink-600" />
								)}
							</button>
						</div>
					</div>
					{/* Navigation */}
					{isMobileMenuOpen && (
						<ul className="h-screen ml-4 mt-36 flex flex-col gap-4 backdrop-blur-lg">
							{Links.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className="block w-full text-5xl uppercase ps-16 pb-4 hover:text-pink-600"
										onClick={(e) => handleLinkClick(e, item.href)}>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
