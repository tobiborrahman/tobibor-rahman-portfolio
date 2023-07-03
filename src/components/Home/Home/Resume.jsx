import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
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

const Resume = () => {
	const fadeInVariants = {
		hidden: {
			opacity: 0,
			x: -200,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
	};

	const elementRef = useRef(null);
	const controls = useAnimation();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						controls.start('visible');
					} else {
						controls.start('hidden');
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, [controls]);

	return (
		<div className="bg-[#22252C]">
			<div
				id="resume"
				ref={elementRef}
				variants={fadeInVariants}
				initial="hidden"
				animate={controls}
			>
				<SectionTitle
					title="summary"
					upperTitle="Resume"
				></SectionTitle>

				<div className="px-20 text-white">
					<h2 className="text-5xl text-gradient py-5 mb-5 font-bold">
						My Education
					</h2>
					<div className="border p-10">
						<h5 className="bg-sky-300 px-2 text-2xl w-[130px] text-white rounded-md">
							2015-2019
						</h5>
						<h4 className="text-3xl py-2">Bachelor of Arts</h4>
						<p className="text-red-700 text-3xl">
							National University
						</p>
						<p className="text-xl">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Ad corporis voluptas accusamus sed, ducimus
							perferendis est nesciunt placeat recusandae magni id
							facilis aperiam rerum doloremque.
						</p>
					</div>
				</div>

				<div className="px-20 pb-10">
					<h2 className="text-5xl my-5 text-white pt-5 font-bold">
						My Skills
					</h2>
				</div>
				<div className="mx-20">
					<div className="md:flex justify-between items-center mb-10">
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={html}
							alt=""
						/>
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={css}
							alt=""
						/>
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={Bootstrap}
							alt=""
						/>

						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={tailwind}
							alt=""
						/>
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={javascript}
							alt=""
						/>
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={react}
							alt=""
						/>
					</div>
					<div className="md:flex justify-between items-center">
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={node}
							alt=""
						/>
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={mongodb}
							alt=""
						/>
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={express}
							alt=""
						/>

						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={jwt}
							alt=""
						/>
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={firebase}
							alt=""
						/>
						<img
							className="w-48 h-48 border-2 p-5 rounded-full hover:border-[15px] duration-300"
							src={github}
							alt=""
						/>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<a
						className="py-4 my-10 px-10 bg-gradient-to-r from-[#00F29C] to-[#07F7F2] border rounded-full text-2xl flex justify-center items-center"
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
