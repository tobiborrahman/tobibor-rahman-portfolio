import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';

import aboutImg from '../../../../public/about.png';

const About = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div>
			<div id="about">
				<div className="md:flex justify-between items-center px-6 md:px-20 py-10 md:py-20 pb-10">
					<img
						className="w-[380px] h-[550px] md:mr-20 rounded-full bg-[#FEB641]"
						src={aboutImg}
						alt=""
					/>
					<div data-aos="fade-right" className="md:w-[800px]">
						<h3 className="text-2xl mb-5 font-bold">
							I am a passionate Web Designer and Developer
						</h3>
						<p className="text-justify text-gray-400">
							I help you build brand for your business at an
							affordable price. Thousands of clients have procured
							exceptional results while working with our dedicated
							team. when an unknown printer took a galley of type
							and scrambled it to make a type specimen book.
							<br />
							<br />
							Delivering work within time and budget which meets
							client’s requirements is our moto. Lorem Ipsum has
							been the industry's standard dummy text ever when an
							unknown printer took a galley.
						</p>
						<button className="px-6 py-2 border-[.5px] text-[#F59E0B] border-[#F59E0B] rounded-md mt-5 ml-2  bg-[#FDF1DB] hover:bg-[#F59E0B] hover:text-white duration-500">
							See Works
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
