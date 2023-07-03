import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import img1 from '../../../../public/project-1.png';
import img2 from '../../../../public/project-2.png';
import img3 from '../../../../public/project-3.png';
import img4 from '../../../../public/project-4.png';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
	const fadeInVariants = {
		hidden: {
			opacity: 0,
			x: 200,
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

	const handleClick = () => {
		window.open('https://sport-toys-network.web.app/');
	};

	const handleClick2 = () => {
		window.open('https://the-chef-world.web.app/');
	};

	const handleClick3 = () => {
		window.open('https://final-photography-client.web.app/');
	};

	return (
		<div className="bg-[#313741]">
			<motion.div
				ref={elementRef}
				variants={fadeInVariants}
				initial="hidden"
				animate={controls}
				id="portfolio"
			>
				<SectionTitle title="portfolio" upperTitle="my work" />

				<div className="md:flex justify-between px-20 pb-28">
					<div className="card card-compact md:w-[490px]  bg-base-100 shadow-xl">
						<figure>
							<img
								className="overflow-hidden object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
								src={img2}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Key Features!</h2>
							<p>
								On this website, you will come to know about the
								famous chefs of United States.
							</p>
							<p>
								You can subscribe to get notifications about
								their new recipe
							</p>
							<p>
								You can know about their famous recipes and add
								them to your favorite list.
							</p>

							<h2 className="card-title">Technologies</h2>
							<p>
								On this website, you will come to know about the
								famous chefs of United States.
							</p>

							<button
								onClick={handleClick2}
								className="uppercase text-2xl flex items-center text-blue-500"
							>
								view details{' '}
								<FaArrowRight className="ml-2"></FaArrowRight>
							</button>
						</div>
					</div>
					<div className="card card-compact md:w-[490px] bg-base-100 shadow-xl">
						<figure>
							<img
								className="overflow-hidden object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
								src={img1}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Key Features!</h2>
							<p>
								On this website, you will come to know about the
								famous chefs of United States.
							</p>
							<p>
								You can subscribe to get notifications about
								their new recipe
							</p>
							<p>
								You can know about their famous recipes and add
								them to your favorite list.
							</p>

							<h2 className="card-title">Technologies</h2>
							<p>
								On this website, you will come to know about the
								famous chefs of United States.
							</p>
							<button
								onClick={handleClick}
								className="uppercase flex text-2xl items-center text-blue-500"
							>
								view details{' '}
								<FaArrowRight className="ml-2"></FaArrowRight>
							</button>
						</div>
					</div>
					<div className="card card-compact md:w-[490px] bg-base-100 shadow-xl">
						<figure>
							<img
								className="overflow-hidden object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
								src={img3}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Key Features!</h2>
							<p>
								On this website, you will come to know about the
								famous chefs of United States.
							</p>
							<p>
								You can subscribe to get notifications about
								their new recipe
							</p>
							<p>
								You can know about their famous recipes and add
								them to your favorite list.
							</p>

							<h2 className="card-title">Technologies</h2>
							<p>
								On this website, you will come to know about the
								famous chefs of United States.
							</p>
							<button
								onClick={handleClick3}
								className="uppercase flex text-2xl items-center text-blue-500"
							>
								view details{' '}
								<FaArrowRight className="ml-2"></FaArrowRight>
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Portfolio;
