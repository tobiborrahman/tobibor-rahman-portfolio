import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Banner.css';
import profile from '../../../../public/profile.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
	useEffect(() => {
		Aos.init({ duration: '1000' });
	}, []);

	const [text] = useTypewriter({
		words: [
			'a Designer',
			'a Front End Developer',
			'a Full Stack Developer',
		],
		loop: {},
		typeSpeed: 40,
		deleteSpeed: 20,
	});

	return (
		<>
			{/* <Particle></Particle> */}
			<div
				id="banner"
				className="w-100 md:h-[100vh] pt-56 bg-gradient-to-r from-[#00F29C] to-[#07F7F2]  md:pt-0 md:flex justify-around items-center px-20"
			>
				<div className="w-2/4 md:mr-40">
					<div
						data-aos="fade-right"
						className="text-white text-center md:w-[700px]"
					>
						<h3 className="text-5xl font-semibold">Hello!</h3>

						<div>
							<h1 className="text-4xl md:text-6xl font-bold my-5">
								I'm <span>Tobibor Rahman</span>
							</h1>
							<h3 className="text-2xl md:text-5xl font-bold">
								<span className="text-5xl font-bold">
									{text}
								</span>
								<span>
									<Cursor cursorStyle="|"></Cursor>{' '}
								</span>
							</h3>
						</div>

						<p className="text-2xl font-semibold my-3">
							Based in Dhaka, Bangladesh
						</p>
						<button className="border border-blue-500 px-6 py-2 text-blue-500 rounded-full text-xl mt-5 hover:text-white hover:bg-blue-500 duration-500">
							Hire Me
						</button>
					</div>
				</div>

				<div data-aos="fade-left" className="py-20 md:mt-0">
					<img
						className="w-[400px] h-[400px] profile-img border-2"
						src={profile}
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default Banner;
