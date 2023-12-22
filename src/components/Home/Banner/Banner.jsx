import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useEffect, useRef } from 'react';
import './Banner.css';
import profile from '../../../../public/profile.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../../shared/Navbar/Navbar';

const Banner = () => {
	useEffect(() => {
		Aos.init({ duration: '1000' });
	}, []);

	const [text] = useTypewriter({
		words: [
			'a Web Designer',
			'a Front-End Developer',
			'a Back-End Developer',
			'a Full Stack Developer',
		],
		loop: {},
		typeSpeed: 40,
		deleteSpeed: 20,
	});

	return (
		<>
			{/* <Particle></Particle> */}
			{/* <Navbar /> */}
			<div
				id="banner"
				className=" bg-gradient-to-b from-black to-gray-800 md:flex justify-between items-center px-5 md:px-20 pt-10 md:pt-48 pb-20"
			>
				<div className="flex justify-center items-center mb-20">
					<div
						data-aos="fade-right"
						className="text-white text-center "
					>
						<h3 className="text-2xl md:text-5xl font-semibold">
							Hello!
						</h3>

						<div>
							<h1 className="text-4xl md:text-6xl font-bold my-5">
								I'm{' '}
								<span className="text-gradient-to-r from-[#00F29C] to-[#07F7F2]">
									Tobibor Rahman
								</span>
							</h1>
							<h3 className="text-xl md:text-5xl font-bold">
								<span className="text-3xl text-[#cd9777] md:text-5xl font-bold">
									{text}
								</span>
								<span>
									<Cursor cursorStyle="|"></Cursor>{' '}
								</span>
							</h3>
						</div>

						<p className="text-xl md:text-2xl font-semibold my-3">
							Based in Dhaka, Bangladesh
						</p>
						<button className="border border-blue-500 px-6 py-2 text-blue-500 rounded-full text-xl mt-5 hover:text-white hover:bg-blue-500 duration-500">
							Hire Me
						</button>
					</div>
				</div>

				<div data-aos="fade-left">
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
