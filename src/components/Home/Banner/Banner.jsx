import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useEffect } from 'react';
import './Banner.css';
import profile from '../../../../public/profile.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../../shared/Navbar/Navbar';
import Expertise from '../../common/expertise';

const Banner = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		Aos.init({ duration: '1000' });
	}, []);

	const [text] = useTypewriter({
		words: [
			'Web Designer',
			'Front-End Developer',
			'Back-End Developer',
			'Full Stack Developer',
		],
		loop: {},
		typeSpeed: 40,
		deleteSpeed: 20,
	});

	return (
		<>
			<div className="bg-[#FEFAF3] dark:bg-[#1A1E29] dark:text-white">
				<Navbar />
				<Expertise />

				<div
					id="banner"
					className="md:flex justify-between items-center px-5 md:px-20 pt-28 md:pt-48 pb-20"
				>
					<div className="flex justify-center items-center mb-20">
						<div data-aos="fade-right">
							<h3 className="text-2xl md:text-3xl font-semibold dark:text-white">
								Hello!
							</h3>

							<div>
								<button onClick={handleThemeSwitch}>
									Theme
								</button>
							</div>

							<div>
								<h1 className="text-4xl md:text-5xl font-bold my-5 dark:text-white">
									I'm{' '}
									<span className="text-gradient-to-r from-[#00F29C] to-[#07F7F2]">
										Tobibor Rahman
									</span>
								</h1>
								<h3 className="text-xl flex justify-right items-center md:text-5xl font-bold">
									<span className="text-3xl text-[#F59E0B] md:text-4xl font-bold">
										a {text}
									</span>
									<span>
										<Cursor
											cursorColor="#F59E0B"
											cursorStyle="|"
										></Cursor>{' '}
									</span>
								</h3>
							</div>

							<p className="text-xl md:text-2xl dark:text-white font-semibold my-3">
								Based in Dhaka, Bangladesh
							</p>

							<div className="mt-6">
								<button className="py-[10px] px-6 bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 font-semibold text-white rounded-md duration-300">
									Hire Me
								</button>
								<a
									className="py-[10px] px-6 font-semibold bg-amber-500/10 hover:bg-amber-500 border border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md ml-2 duration-300"
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
