import React from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { FaDownload } from 'react-icons/fa';

import html from '/html.png';
import css from '/css.png';
import Bootstrap from '../../../../public/bootstrap-icon.jpg';
import tailwind from '/tailwind.png';
import javascript from '/javascript-fi.png';
import react from '/logo-react-icon.png';
import node from '/pngwing.com.png';
import express from '/express-fi.png';
import mongodb from '/mongodb-fi.png';
import jwt from '/jwt-fin.png';
import firebase from '/firebase-fin.png';
import github from '/github-logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div id="resume">
			<div>
				<div>
					<SectionTitle upperTitle="Resume"></SectionTitle>

					<div className="px-20 ">
						<h2 className="text-5xl text-gradient py-5 mb-5 font-bold">
							Education
						</h2>
						<div data-aos="fade-down" className="border p-10">
							<h5 className="bg-sky-300 px-2 text-2xl w-[133px]  rounded-md">
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
					<h2 className="text-5xl my-5 pt-5 font-bold">Skills</h2>
				</div>
				<div className="md:mx-20">
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-3">
						<img
							data-aos="fade-down"
							data-aos-duration="100"
							className="w-40 h-40 rounded-full shadow-lg"
							src={html}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="200"
							className="w-40 h-40 rounded-full shadow-lg"
							src={css}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="300"
							className="w-40 h-40 rounded-full shadow-lg"
							src={Bootstrap}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="400"
							className="w-40 h-40 rounded-full shadow-lg"
							src={tailwind}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="500"
							className="w-40 h-40 rounded-full shadow-lg"
							src={javascript}
							alt=""
						/>
						<img
							data-aos="fade-down"
							data-aos-duration="600"
							className="w-36 h-36 rounded-full shadow-lg"
							src={react}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="600"
							className="w-36 h-36 rounded-full shadow-lg"
							src={node}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="500"
							className="w-36 h-36 rounded-full shadow-lg"
							src={express}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="400"
							className="w-36 h-36 rounded-full shadow-lg"
							src={mongodb}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="300"
							className="w-36 h-36 rounded-full shadow-lg"
							src={firebase}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="200"
							className="w-36 h-36 rounded-full shadow-lg"
							src={github}
							alt=""
						/>
						<img
							data-aos="fade-up"
							data-aos-duration="100"
							className="w-36 h-36 rounded-full shadow-lg"
							src={jwt}
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
