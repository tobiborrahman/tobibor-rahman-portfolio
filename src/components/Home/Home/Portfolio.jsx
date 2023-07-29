import React from 'react';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import img1 from '../../../../public/project-1.png';
import img2 from '../../../../public/project-2.png';
import img3 from '../../../../public/project-3.png';
import { FaArrowRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
	useEffect(() => {
		Aos.init();
	}, []);

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
			
			<div id="portfolio">
			
				<SectionTitle title="portfolio" upperTitle="my work" />

				<div className="md:flex justify-between px-20 pb-28">
					<div
						data-aos="flip-right"
						className="card card-compact md:w-[350px]  bg-gray-300 shadow-xl"
					>
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
								JavaScript, React JS, Node JS, Express JS,
								MongoDB, Firebase.
							</p>

							<button
								onClick={handleClick2}
								className="uppercase text-md font-bold flex items-center text-blue-500"
							>
								view details{' '}
								<FaArrowRight className="ml-2"></FaArrowRight>
							</button>
						</div>
					</div>
					<div
						data-aos="flip-down"
						className="card card-compact md:w-[350px] bg-gray-300 shadow-xl"
					>
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
								JavaScript, React JS, Node JS, Express JS,
								MongoDB, Firebase.
							</p>
							<button
								onClick={handleClick}
								className="uppercase flex text-md font-bold items-center text-blue-500"
							>
								view details{' '}
								<FaArrowRight className="ml-2"></FaArrowRight>
							</button>
						</div>
					</div>
					<div
						data-aos="flip-left"
						className="card card-compact md:w-[350px] bg-gray-300 shadow-xl"
					>
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
								JavaScript, React JS, Node JS, Express JS,
								MongoDB, Firebase.
							</p>
							<button
								onClick={handleClick3}
								className="uppercase flex text-md font-bold items-center text-blue-500"
							>
								view details{' '}
								<FaArrowRight className="ml-2"></FaArrowRight>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
