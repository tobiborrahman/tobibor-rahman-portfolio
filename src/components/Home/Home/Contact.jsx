import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import {
	FaFacebook,
	FaGithub,
	FaGoogle,
	FaInstagram,
	FaLinkedin,
	FaMailBulk,
	FaPhone,
} from 'react-icons/fa';

const Contact = () => {
	const fadeInVariants = {
		hidden: {
			opacity: 0,
			x: -200,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
	};

	const elementRef = useRef(null);
	const controls = useAnimation();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						controls.start('visible');
					} else {
						controls.start('hidden');
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, [controls]);

	return (
		<div className="bg-[#22252C]">
			<motion.div
				id="resume"
				ref={elementRef}
				variants={fadeInVariants}
				initial="hidden"
				animate={controls}
			>
				<SectionTitle
					title="contact"
					upperTitle="get in touch"
				></SectionTitle>

				<div className="md:flex items-center z-5 px-20">
					<div className="md:w-1/4 mr-20 text-white">
						<h2 className="text-5xl pb-5">Address</h2>
						<p className="text-2xl pb-5">
							Chandana Chowrasta, Gazipur
						</p>

						<p className="flex items-center text-2xl">
							<span>
								<FaPhone className="mr-2"></FaPhone>
							</span>
							+8801316433225
						</p>
						<p className="flex items-center text-2xl">
							<span>
								<FaMailBulk className="mr-2"></FaMailBulk>
							</span>
							r.tobibor16@gmail.com
						</p>

						<h2 className="text-5xl py-5">Address</h2>
						<div className="flex justify-between">
							<FaFacebook className="text-3xl duration-300 hover:text-blue-500" />
							<FaInstagram className="text-3xl duration-300 hover:text-red-300" />
							<FaLinkedin className="text-3xl duration-300 hover:text-blue-500" />
							<FaGithub className="text-3xl duration-300 hover:text-black" />
							<FaGoogle className="text-3xl duration-300 hover:text-yellow-500" />
						</div>
					</div>
					<div className="md:w-3/4">
						<h2 className="text-5xl py-5 text-white">Hire Me</h2>
						<form>
							<div className="flex">
								<input
									className="border bg-transparent w-full mr-4 pt-3 text-3xl p-3  rounded-xl"
									type="text"
									placeholder="Name"
								/>
								<input
									className="border w-full bg-transparent text-3xl p-3  rounded-xl"
									type="text"
									placeholder="Email"
								/>
							</div>
							<textarea
								className="border w-full bg-transparent mr-4 text-3xl p-2 h-[170px] rounded-xl mt-5"
								type="text"
								placeholder="Tell Me More About The project"
							/>
						</form>
					</div>
				</div>
				<div>
					<div className="flex justify-center items-center">
						<a className="py-5 bg-gradient-to-r my-10 from-[#00F29C] to-[#07F7F2] hover:bg-blue-500 text-white duration-300 px-10 border rounded-full text-2xl flex justify-center items-center">
							Send Message
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
