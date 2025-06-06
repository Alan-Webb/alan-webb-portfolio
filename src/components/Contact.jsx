import {useState} from "react";
import emailjs from "@emailjs/browser";
import toast, {Toaster} from "react-hot-toast";
import {motion} from "framer-motion";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isSending, setIsSending] = useState(false);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validate = () => {
		let errors = {};
		if (!formData.name) errors.name = "Name is required";
		if (!formData.email) {
			errors.email = "Please enter a valid Email";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = "Email is invalid";
		}
		if (!formData.message) errors.message = "Please enter your message";
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			setErrors({});
			setIsSending(true);

			emailjs
				.send(
					"service_updws7n",
					"template_5k8z1qm",
					formData,
					"6q1bs_-46t8jkufU1"
				)
				.then(() => {
					toast.success("Message sent successfully!");
					setFormData({name: "", email: "", message: ""});
				})
				.catch(() => {
					toast.error("Failed to send message. Please try again");
				})
				.finally(() => {
					setIsSending(false);
				});
		}
	};

	return (
		<section className="px-6 pb-10 min-h-screen" id="contact">
			<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
				Contact
			</h1>
			<div className="h-1 w-20 bg-white mb-10"></div>

			<div className="max-w-3xl mx-auto">
				<Toaster />
				<h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
					Let's Connect
				</h2>
				<motion.form
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{duration: 0.8, delay: 1}}
					onSubmit={handleSubmit}>
					{/* Name input */}
					<div className="mb-4">
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							placeholder="Name"
							onChange={handleChange}
							className="mb-8 w-full appearance-none rounded-lg border border-pink-600 bg-transparent px-3 py-3 text-sm focus:border-pink-500 focus:outline:none"
						/>
						{errors.name && (
							<motion.p
								initial={{opacity: 0}}
								whileInView={{opacity: 1}}
								aria-live="polite"
								className="text-sm text-pink-700 mt-[-1.5rem]">
								{errors.name}
							</motion.p>
						)}
					</div>
					{/* Email input */}
					<div className="mb-4">
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							placeholder="Email"
							onChange={handleChange}
							className="mb-8 w-full appearance-none rounded-lg border border-pink-600 bg-transparent px-3 py-3 text-sm focus:border-pink-500 focus:outline:none"
						/>
						{errors.email && (
							<motion.p
								initial={{opacity: 0}}
								whileInView={{opacity: 1}}
								aria-live="polite"
								className="text-sm text-pink-700 mt-[-1.5rem]">
								{errors.email}
							</motion.p>
						)}
					</div>
					{/* Message input */}
					<div className="mb-4">
						<textarea
							id="message"
							name="message"
							value={formData.message}
							placeholder="Type your message here"
							onChange={handleChange}
							className="mb-8 w-full appearance-none rounded-lg border border-pink-600 bg-transparent px-3 py-3 text-sm focus:border-pink-500 focus:outline:none resize-none"
							rows="4"
						/>
						{errors.message && (
							<motion.p
								initial={{opacity: 0}}
								whileInView={{opacity: 1}}
								aria-live="polite"
								className="text-sm text-pink-700 mt-[-1.5rem]">
								{errors.message}
							</motion.p>
						)}
					</div>
					{/* Submit Button */}
					<button
						type="submit"
						className={`w-full rounded-md bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-500 cursor-pointer ${
							isSending ? "cursor-not-allowed opacity-50" : ""
						}`}
						disabled={isSending}>
						{isSending ? "Sending..." : "Send"}
					</button>
				</motion.form>
			</div>
			<footer>
				<p className="text-center text-sm text-pink-600 font-bold pt-36 tracking-wide">
					&copy; AWDev. All rights reserved.
				</p>
			</footer>
		</section>
	);
};

export default Contact;
