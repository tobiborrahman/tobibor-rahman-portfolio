import React from 'react';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import img1 from '../../../../public/motion-mingle.jpg';
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
		window.open('https://final-photography-client.web.app/');
	};

	const handleClick2 = () => {
		window.open('https://motion-mingle.web.app/');
	};

	const handleClick3 = () => {
		window.open('https://the-chef-world.web.app/');
	};

	return (
		<div className="dark:bg-[#0F172A]">
			<div id="portfolio">
				<SectionTitle upperTitle="my work & projects" />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-3 md:px-20 py-5 md:py-20">
					<div
						data-aos="flip-right"
						className="mb-5 shadow-lg rounded-lg dark:bg-[#1E293B] hover:shadow-xl transition duration-300"
					>
						<figure>
							<img
								className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
								src={img2}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<button
								onClick={handleClick2}
								className="uppercase text-md font-bold flex items-center text-[#F59E0B]"
							>
								view details{' '}
								<FaArrowRight className="ml-2"></FaArrowRight>
							</button>
						</div>
					</div>
					<div
						data-aos="flip-down"
						className=" mb-5 shadow-lg rounded-lg dark:bg-[#1E293B] hover:shadow-xl transition duration-300"
					>
						<figure>
							<img
								className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
								src={img1}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<button
								onClick={handleClick}
								className="uppercase flex text-md font-bold items-center text-[#F59E0B]"
							>
								view details{' '}
								<FaArrowRight className="ml-2"></FaArrowRight>
							</button>
						</div>
					</div>
					<div
						data-aos="flip-left"
						className=" mb-5 shadow-lg rounded-lg dark:bg-[#1E293B] hover:shadow-xltransition duration-300"
					>
						<figure>
							<img
								className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
								src={img3}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<button
								onClick={handleClick3}
								className="uppercase flex text-md font-bold items-center text-[#F59E0B]"
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
