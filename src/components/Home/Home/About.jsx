import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import aboutImg from '../../../../public/about.png';

const About = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<>
			<div className="dark:bg-[#0F172A]">
				<div className="custom-container">
					<div className="container ">
						<div className="flex justify-between items-center">
							<div id="about">
								<div className="md:flex justify-between items-center px-6 md:px-20 py-10 md:py-20 pb-10">
									<img
										className="w-[380px] h-[550px] md:mr-20 rounded-full bg-[#FEB641]"
										src={aboutImg}
										alt=""
									/>
									<div
										data-aos="fade-right"
										className="md:w-[800px]"
									>
										<h3 className="text-2xl mb-5 mt-8 md:mt-0 font-bold dark:text-white">
											I am a passionate Frontend Developer & Software Engineer
										</h3>
										<p className=" text-gray-400 text-lg leading-relaxed">
											I specialize in building scalable, modular, and high-performance web applications using modern technologies like React.js, Next.js, and TypeScript. With a strong focus on UI/UX and performance optimization, I deliver seamless user experiences that drive business results.
											<br />
											<br />
											I am dedicated to writing clean, maintainable code and staying ahead of industry trends. Whether it's developing complex service management systems or interactive e-commerce platforms, I strive for excellence in every project I undertake.
										</p>
										<button className="py-[10px] px-6 bg-amber-500/10 hover:bg-amber-500 border font-semibold border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md mt-6 duration-300">
											See Works
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
