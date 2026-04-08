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
		<section className="flex justify-center items-center dark:bg-[#0F172A]">
			<div className="custom-container">
				<div id="portfolio">
					<SectionTitle upperTitle="my work & projects" />

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-3 md:px-20 py-14 md:py-20">
						{/* Original Projects */}
						<div
							data-aos="flip-right"
							className="mb-5 shadow-lg rounded-lg dark:bg-[#1E293B] hover:shadow-xl transition duration-300"
						>
							<figure>
								<img
									className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
									src={img2}
									alt="Magical Music"
								/>
							</figure>
							<div className="card-body">
								<button
									onClick={handleClick}
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
									alt="Motion Mingle"
								/>
							</figure>
							<div className="card-body">
								<button
									onClick={handleClick2}
									className="uppercase flex text-md font-bold items-center text-[#F59E0B]"
								>
									view details{' '}
									<FaArrowRight className="ml-2"></FaArrowRight>
								</button>
							</div>
						</div>
						<div
							data-aos="flip-left"
							className=" mb-5 shadow-lg rounded-lg dark:bg-[#1E293B] hover:shadow-xl transition duration-300"
						>
							<figure>
								<img
									className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
									src={img3}
									alt="Chef World"
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

						{/* New Projects from Resume */}
						<div
							data-aos="flip-right"
							className="mb-5 shadow-lg rounded-lg dark:bg-[#1E293B] hover:shadow-xl transition duration-300"
						>
							<figure>
								<img
									className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
									src={img1}
									alt="AgencyHandy"
								/>
							</figure>
							<div className="card-body p-6">
								<h3 className="text-xl font-bold dark:text-white mb-2">AgencyHandy</h3>
								<p className="text-gray-500 mb-4 h-12 overflow-hidden">Project & Task management solution for mid to large teams (SaaS).</p>
								<button
									className="uppercase text-md font-bold flex items-center text-[#F59E0B]"
								>
									Live Demo{' '}
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
									src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop"
									alt="Geekify"
								/>
							</figure>
							<div className="card-body p-6">
								<h3 className="text-xl font-bold dark:text-white mb-2">Geekify</h3>
								<p className="text-gray-500 mb-4 h-12 overflow-hidden">Full-featured E-commerce Platform for modern shopping experiences.</p>
								<button
									className="uppercase flex text-md font-bold items-center text-[#F59E0B]"
								>
									Live Demo{' '}
									<FaArrowRight className="ml-2"></FaArrowRight>
								</button>
							</div>
						</div>
						<div
							data-aos="flip-left"
							className=" mb-5 shadow-lg rounded-lg dark:bg-[#1E293B] hover:shadow-xl transition duration-300"
						>
							<figure>
								<img
									className="overflow-hidden rounded-t-lg object-cover object-top hover:object-bottom w-full h-[300px] duration-1000"
									src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
									alt="Tech Repair Platform"
								/>
							</figure>
							<div className="card-body p-6">
								<h3 className="text-xl font-bold dark:text-white mb-2">Tech Repair Platform</h3>
								<p className="text-gray-500 mb-4 h-12 overflow-hidden">Service booking platform with real-time messaging and live chat.</p>
								<button
									className="uppercase flex text-md font-bold items-center text-[#F59E0B]"
								>
									Live Demo{' '}
									<FaArrowRight className="ml-2"></FaArrowRight>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
