import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div className="bg-[#22252C]">
			<div id="about">
				<SectionTitle
					title="about me"
					upperTitle="know me more"
				></SectionTitle>

				<div className="md:flex text-white px-10 md:px-20 pb-10">
					<div data-aos="fade-right" className="md:w-3/4">
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
					<div data-aos="fade-left" className="md:w-1/4">
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
						<button className="py-2 px-5 text-white bg-gradient-to-r from-[#00F29C] to-[#07F7F2] my-5 rounded-full ">
							Download CV
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
