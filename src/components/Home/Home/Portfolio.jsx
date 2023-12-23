import React from 'react';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import img1 from '../../../../public/motion-mingle.png';
import img2 from '../../../../public/magical-music.png';
import img3 from '../../../../public/chef-world.png';
import { FaArrowRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
	useEffect(() => {
		Aos.init();
	}, []);

	const handleClick = () => {
		window.open('https://toy-market-network.web.app/');
	};

	const handleClick2 = () => {
		window.open('https://the-chef-world.web.app/');
	};

	const handleClick3 = () => {
		window.open('https://final-photography-client.web.app/');
	};

	return (
		<div className="bg-[#F9FAFB]">
			<div id="portfolio">
				<SectionTitle upperTitle="my work & projects" />

				<div className="md:flex justify-between gap-7 px-3 md:px-20 py-5 md:py-20">
					<div
						data-aos="flip-right"
						className="mb-5 shadow rounded-lg shadow-gray-200 hover:shadow-lg transition duration-300"
					>
						<figure>
							<img
								className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
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
						className=" mb-5 shadow rounded-lg shadow-gray-200 hover:shadow-lg transition duration-300"
					>
						<figure>
							<img
								className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
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
						className=" mb-5 shadow rounded-lg shadow-gray-200 hover:shadow-lg transition duration-300"
					>
						<figure>
							<img
								className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
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
