import React from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { FaDownload } from 'react-icons/fa';

import html from '../../../../public/html.png';
import css from '../../../../public/css.png';
import Bootstrap from '../../../../public/bootstrap-icon.jpg';
import tailwind from '../../../../public/tailwind.png';
import javascript from '../../../../public/javascript-fi.png';
import react from '../../../../public/logo-react-icon.png';
import node from '../../../../public/pngwing.com.png';
import express from '../../../../public/express-fi.png';
import mongodb from '../../../../public/mongodb-fi.png';
import jwt from '../../../../public/jwt-fin.png';
import firebase from '../../../../public/firebase-fin.png';
import github from '../../../../public/github-logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div id="resume" className="bg-[#22252C]">
			<div>
				<div>
					<SectionTitle
						title="summary"
						upperTitle="Resume"
					></SectionTitle>

					<div className="px-20 text-white">
						<h2 className="text-5xl text-gradient py-5 mb-5 font-bold">
							My Education
						</h2>
						<div data-aos="fade-down" className="border p-10">
							<h5 className="bg-sky-300 px-2 text-2xl w-[130px] text-white rounded-md">
								2015-2019
							</h5>
							<h4 className="text-3xl py-2">Bachelor of Arts</h4>
							<p className="text-red-700 text-3xl">
								National University
							</p>
							<p className="text-xl">
								I have completed my honours in 2019 from Bhawal
								Badre Alam Govt.College, Gazipur .
							</p>
						</div>
					</div>
				</div>

				<div className="px-20 pb-10">
					<h2 className="text-5xl my-5 text-white pt-5 font-bold">
						My Skills
					</h2>
				</div>
				<div className="md:mx-20">
					<div className="md:flex md:justify-around justify-between items-center mb-3">
						<img
							data-aos="fade-down"
							data-aos-duration="100"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={html}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="200"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={css}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="300"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={Bootstrap}
							alt=""
						/>

						<img
							data-aos="fade-down"
							data-aos-duration="400"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={tailwind}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="500"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={javascript}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="600"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={react}
							alt=""
						/>
					</div>

					<div className="md:flex justify-between items-center">
						<img
							data-aos="fade-up"
							data-aos-duration="600"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={node}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="500"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={mongodb}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="400"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={express}
							alt=""
						/>

						<img
							data-aos="fade-up"
							data-aos-duration="300"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={jwt}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="200"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={firebase}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="100"
							className="w-44 h-44 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={github}
							alt=""
						/>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<a
						className="py-2 my-10 px-5 bg-gradient-to-r from-[#00F29C] to-[#07F7F2] border rounded-full text-xl flex justify-center items-center"
						href="../../../public/resume.pdf"
						download="final resume.pdf"
					>
						Download Resume <FaDownload className="ml-3" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Resume;
