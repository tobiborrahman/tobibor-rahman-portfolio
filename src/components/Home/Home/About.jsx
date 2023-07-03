import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';

const About = () => {
	const fadeInVariants = {
		hidden: {
			opacity: 0,
			y: -150,
		},
		visible: {
			opacity: 1,
			y: 0,
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
				ref={elementRef}
				variants={fadeInVariants}
				initial="hidden"
				animate={controls}
				id="about"
			>
				<SectionTitle
					title="about me"
					upperTitle="know me more"
				></SectionTitle>

				<div className="md:flex text-white mx-20 py-10">
					<div className="md:w-3/4">
						<h3 className="text-3xl mb-5">
							I am{' '}
							<span className="text-blue-500">
								Tobibor Rahman,
							</span>{' '}
							a Full Stack Developer
						</h3>
						<p>
							I help you build brand for your business at an
							affordable price. Thousands of clients have procured
							exceptional results while working with our dedicated
							team. when an unknown printer took a galley of type
							and scrambled it to make a type specimen book.
						</p>
						<br />
						<p>
							Delivering work within time and budget which meets
							client’s requirements is our moto. Lorem Ipsum has
							been the industry's standard dummy text ever when an
							unknown printer took a galley.
						</p>
					</div>
					<div className="md:w-1/4">
						<p className="my-2">
							<span className="text-black font-bold">Name:</span>{' '}
							Tobibor Rahman.
						</p>
						<hr />
						<p className="my-2">
							<span className="text-black font-bold">Email:</span>{' '}
							r.tobibor16@gmail.com
						</p>
						<hr />
						<p className="my-2">
							<span className="text-black font-bold">Age:</span>{' '}
							25
						</p>
						<hr />
						From: Satkhira, Khulna, Bangladesh
						<button className="py-3 px-7 text-white bg-blue-500 my-5 rounded-full ">
							Download CV
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default About;
