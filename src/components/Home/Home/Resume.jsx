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
		<section id="resume" className="bg-[#F9FAFB] dark:bg-[#1E293B]">
			<div className="custom-container">
				<SectionTitle upperTitle="Resume"></SectionTitle>
				<div className="pt-8">
					<div>
						<div className="px-3 md:px-20">
							<h2 className="text-xl md:text-5xl dark:text-white text-gradient md:pt-16 mb-5 font-bold">
								Experiences
							</h2>
							<div
								data-aos="fade-down"
								className="border p-3 md:p-10 rounded mb-8"
							>
								<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
									<div>
										<h3 className="text-3xl dark:text-white font-bold text-gradient">
											AgencyHandy
										</h3>
										<h4 className="text-[#F59E0B] text-xl font-semibold">
											Software Engineer (Frontend)
										</h4>
									</div>
									<h3 className="text-gray-600 dark:text-gray-400 text-lg font-medium mt-2 md:mt-0">
										April 2025 - Present
									</h3>
								</div>
								<ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2 text-gray-700">
									<li>Built Service Management v2.0 using React.js + TypeScript, enabling efficient service creation, grouping, and editing workflows.</li>
									<li>Developed scalable, modular UI components with Material UI, ensuring design consistency across the app.</li>
									<li>Implemented state management with Zustand, simplifying data flow and improving app responsiveness.</li>
									<li>Designed and validated complex forms with React Hook Form + Zod, reducing form submission errors and improving user experience.</li>
								</ul>
							</div>

							<div
								data-aos="fade-up"
								className="border p-3 md:p-10 rounded mb-8"
							>
								<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
									<div>
										<h3 className="text-3xl dark:text-white font-bold text-gradient">
											KrazyIT
										</h3>
										<h4 className="text-[#F59E0B] text-xl font-semibold">
											Front End Developer
										</h4>
									</div>
									<h3 className="text-gray-600 dark:text-gray-400 text-lg font-medium mt-2 md:mt-0">
										Sep. 2023 - March. 2025
									</h3>
								</div>
								<ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2 text-gray-700">
									<li>Built Next.js + TypeScript applications with a mobile-first approach, improving load times by 40% and ensuring 100% responsiveness.</li>
									<li>Developed responsive, scalable UI components with Tailwind CSS, ensuring design consistency and faster development.</li>
									<li>Managed global state with Redux, optimizing data flow and reducing unnecessary re-renders, which cut API calls by 50%.</li>
									<li>Designed and implemented dynamic forms with React Hook Form, integrating validation to reduce user input errors.</li>
									<li>Integrated REST APIs using Axios, enabling smooth real-time data fetching and display.</li>
									<li>Streamlined service workflows (create, edit, group, delete) using React.js and Zustand, reducing setup time by 35% and improving efficiency.</li>
								</ul>
							</div>

							<h2 className="text-xl md:text-5xl dark:text-white text-gradient md:pt-16 mb-5 font-bold">
								Education
							</h2>
							<div
								data-aos="fade-down"
								className="border p-3 md:p-10 rounded"
							>
								<h3 className="text-gray-600 dark:text-gray-300 text-lg font-medium mb-2">
									Completed
								</h3>
								<h4 className="text-3xl dark:text-white font-bold mb-2">
									M.A in English Language and Literature
								</h4>
								<p className="text-[#F59E0B] text-2xl font-bold">
									National University
								</p>
							</div>
						</div>
					</div>

					<div className="px-3 md:px-20 pt-16">
						<h2 className="text-xl text-center dark:text-white md:text-left md:text-5xl py-5 font-bold">
							Skills
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 md:mx-20">
						<div data-aos="fade-up" className="bg-white dark:bg-[#0F172A] p-6 rounded-lg shadow-md border dark:border-gray-700">
							<h3 className="text-2xl font-bold dark:text-white mb-4 text-[#F59E0B]">Frontend</h3>
							<div className="flex flex-wrap gap-2">
								{['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Shadcn UI'].map(skill => (
									<span key={skill} className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold">{skill}</span>
								))}
							</div>
						</div>

						<div data-aos="fade-up" data-aos-delay="100" className="bg-white dark:bg-[#0F172A] p-6 rounded-lg shadow-md border dark:border-gray-700">
							<h3 className="text-2xl font-bold dark:text-white mb-4 text-[#F59E0B]">State & Validation</h3>
							<div className="flex flex-wrap gap-2">
								{['Redux', 'Zustand', 'Zod', 'React Hook Form'].map(skill => (
									<span key={skill} className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold">{skill}</span>
								))}
							</div>
						</div>

						<div data-aos="fade-up" data-aos-delay="200" className="bg-white dark:bg-[#0F172A] p-6 rounded-lg shadow-md border dark:border-gray-700">
							<h3 className="text-2xl font-bold dark:text-white mb-4 text-[#F59E0B]">APIs & Data</h3>
							<div className="flex flex-wrap gap-2">
								{['REST APIs', 'Axios', 'React Query', 'WebSocket', 'JWT', 'Firebase', 'MongoDB'].map(skill => (
									<span key={skill} className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold">{skill}</span>
								))}
							</div>
						</div>

						<div data-aos="fade-up" data-aos-delay="300" className="bg-white dark:bg-[#0F172A] p-6 rounded-lg shadow-md border dark:border-gray-700">
							<h3 className="text-2xl font-bold dark:text-white mb-4 text-[#F59E0B]">Tools & Testing</h3>
							<div className="flex flex-wrap gap-2">
								{['React Testing Library', 'Postman', 'Vite', 'Npm/Yarn'].map(skill => (
									<span key={skill} className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold">{skill}</span>
								))}
							</div>
						</div>

						<div data-aos="fade-up" data-aos-delay="400" className="bg-white dark:bg-[#0F172A] p-6 rounded-lg shadow-md border dark:border-gray-700">
							<h3 className="text-2xl font-bold dark:text-white mb-4 text-[#F59E0B]">DevOps & Cloud</h3>
							<div className="flex flex-wrap gap-2">
								{['Git', 'GitHub', 'GitHub Actions', 'Bitbucket', 'Vercel', 'Netlify', 'Docker (basic)'].map(skill => (
									<span key={skill} className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold">{skill}</span>
								))}
							</div>
						</div>

						<div data-aos="fade-up" data-aos-delay="500" className="bg-white dark:bg-[#0F172A] p-6 rounded-lg shadow-md border dark:border-gray-700">
							<h3 className="text-2xl font-bold dark:text-white mb-4 text-[#F59E0B]">Languages</h3>
							<div className="flex flex-wrap gap-2">
								{['English (Professional)', 'Bengali (Native)'].map(skill => (
									<span key={skill} className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold">{skill}</span>
								))}
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center pb-7 md:pb-20 pt-3 md:pt-10 ">
						<a
							className="py-[10px] px-6 bg-amber-500/10 hover:bg-amber-500 border font-semibold border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md mt-6 duration-300  flex justify-center items-center"
							href="../../../public/resume.pdf"
							download="final resume.pdf"
						>
							Download Resume <FaDownload className="ml-3" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
