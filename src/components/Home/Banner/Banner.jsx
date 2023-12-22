import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useEffect } from 'react';
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
			<div className="bg-[#FEFAF3]">
				<Navbar />
				<div
					id="banner"
					className="md:flex justify-between items-center px-5 md:px-20 pt-10 md:pt-48 pb-20"
				>
					<div className="flex justify-center items-center mb-20">
						<div data-aos="fade-right">
							<h3 className="text-2xl md:text-3xl font-semibold">
								Hello!
							</h3>

							<div>
								<h1 className="text-4xl md:text-5xl font-bold my-5">
									I'm{' '}
									<span className="text-gradient-to-r from-[#00F29C] to-[#07F7F2]">
										Tobibor Rahman
									</span>
								</h1>
								<h3 className="text-xl flex justify-right items-center md:text-5xl font-bold">
									<span className="text-3xl text-[#F59E0B] md:text-4xl font-bold">
										{text}
									</span>
									<span>
										<Cursor
											cursorColor="#F59E0B"
											cursorStyle="|"
										></Cursor>{' '}
									</span>
								</h3>
							</div>

							<p className="text-xl md:text-2xl font-semibold my-3">
								Based in Dhaka, Bangladesh
							</p>

							<div>
								<button className="border px-6 py-2 rounded-md mt-5 text-white bg-[#F59E0B] hover:bg-[#D97706] duration-500">
									Hire Me
								</button>
								<a
									className="px-6 py-2 border-[.5px] text-[#F59E0B] border-[#F59E0B] rounded-md mt-5 ml-2  bg-[#FDF1DB] hover:bg-[#F59E0B] hover:text-white duration-500"
									href="../../../public/resume.pdf"
									download="final resume.pdf"
								>
									Download Resume
								</a>
							</div>
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
			</div>
		</>
	);
};

export default Banner;
