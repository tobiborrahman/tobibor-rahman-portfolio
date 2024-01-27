import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDribbble,
	faBehance,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { MdOutlineMenu } from 'react-icons/md';

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50;
			setScrolling(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<section
				className={`md:fixed w-full px-[80px] ${
					scrolling
						? 'bg-white shadow-sm dark:bg-[#161C2D] dark:shadow-b-md'
						: 'bg-transparent'
				}  z-50 md:opacity-100 py-5 transition-all duration-300`}
			>
				<div className="custom-container">
					<div className="flex justify-between items-center">
						<div>
							<h1 className="text-3xl font-bold">TOBIBOR.</h1>
						</div>
						<div className="md:flex justify-center items-center">
							<ul className="hidden md:menu-horizontal gap-8 px-1 font-semibold mr-4">
								<li>
									<Link
										to="home"
										className="text-md font-medium text-black dark:text-gray-400 dark:hover:text-white hover:text-[#F59E0B]"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="about"
										className="text-md font-medium text-black dark:text-gray-400 dark:hover:text-white hover:text-[#F59E0B]"
									>
										About
									</Link>
								</li>
								<li>
									<Link
										to="services"
										className="text-md font-medium text-black dark:text-gray-400 dark:hover:text-white hover:text-[#F59E0B]"
									>
										What I Do
									</Link>
								</li>
								<li>
									<Link
										to="resume"
										className="text-md font-medium text-black dark:text-gray-400 dark:hover:text-white hover:text-[#F59E0B]"
									>
										Resume
									</Link>
								</li>
								<li>
									<Link
										to="portfolio"
										className="text-md font-medium text-black dark:text-gray-400 dark:hover:text-white hover:text-[#F59E0B]"
									>
										Portfolio
									</Link>
								</li>
								<li>
									<Link
										to="blog"
										className="text-md font-medium text-black dark:text-gray-400 dark:hover:text-white hover:text-[#F59E0B]"
									>
										Blogs
									</Link>
								</li>
								<li>
									<Link
										to="contact"
										className="text-md font-medium text-black dark:text-gray-400 dark:hover:text-white hover:text-[#F59E0B]"
									>
										Contact
									</Link>
								</li>
							</ul>
							<div className="flex justify-between items-center ml-5 list-none gap-1">
								<FontAwesomeIcon
									icon={faDribbble}
									className={`w-4 h-4 border-[.2px] dark:border-gray-700 rounded-full p-[8px]  ${
										scrolling
											? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
											: 'bg-[#F59E0B] hover:bg-[#D97706] md:bg-white md:hover:bg-gray-200 text-white md:text-black dark:bg-[#0F172A] dark:hover:bg-[#374151] dark:text-white'
									} text-black  duration-300`}
								></FontAwesomeIcon>
								<FontAwesomeIcon
									icon={faBehance}
									className={`w-4 h-4 border-[.2px] dark:border-gray-700 rounded-full p-[8px]  ${
										scrolling
											? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
											: 'bg-[#F59E0B] hover:bg-[#D97706] md:bg-white md:hover:bg-gray-200 text-white md:text-black dark:bg-[#0F172A] dark:hover:bg-[#374151] dark:text-white'
									} text-black  duration-300`}
								></FontAwesomeIcon>
								<FontAwesomeIcon
									icon={faInstagram}
									className={`w-4 h-4 border-[.2px] dark:border-gray-700 rounded-full p-[8px]  ${
										scrolling
											? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
											: 'bg-[#F59E0B] hover:bg-[#D97706] md:bg-white md:hover:bg-gray-200 text-white md:text-black dark:bg-[#0F172A] dark:hover:bg-[#374151] dark:text-white'
									} text-black  duration-300`}
								></FontAwesomeIcon>
								<div className="md:hidden text-2xl ml-1">
									<MdOutlineMenu />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Navbar;
