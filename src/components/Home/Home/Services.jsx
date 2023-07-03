import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';

const Services = () => {
	const fadeInVariants = {
		hidden: {
			opacity: 0,
			x: 200,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
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
			{ threshold: 0.3 }
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
		<div className="bg-[#313741]">
			<motion.div
				id="services"
				ref={elementRef}
				variants={fadeInVariants}
				initial="hidden"
				animate={controls}
			>
				<SectionTitle title="services" upperTitle="what i do" />

				<div className="md:flex justify-between text-white px-20 pb-20">
					<div className="flex justify-center items-center">
						<FaBeer className="w-20 h-20 border p-5 text-blue-500"></FaBeer>
						<div className="w-64 ml-3">
							<h3 className="text-2xl font-semibold">
								Web Design{' '}
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<FaBeer className="w-20 h-20 border p-5 text-blue-500"></FaBeer>
						<div className="w-64 ml-3">
							<h3 className="text-2xl font-semibold">
								Web Development
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<FaBeer className="w-20 h-20 border p-5 text-blue-500"></FaBeer>
						<div className="w-64 ml-3">
							<h3 className="text-2xl font-semibold">
								Full Stack Development
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Services;
