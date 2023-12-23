import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDribbble,
	faBehance,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50; // Change this value based on your needs
			setScrolling(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`flex justify-between items-center fixed top-0 w-full ${
				scrolling ? 'bg-white shadow-sm' : 'bg-transparent'
			} md:px-20 z-50 md:opacity-100 py-5 transition-all duration-300`}
		>
			<div>
				<h1 className="text-3xl font-bold">TOBIBOR.</h1>
			</div>
			<div className="hidden lg:flex">
				<ul className="gap-5 menu-horizontal px-1 font-semibold">
					<li>
						<Link
							to="home"
							spy={true}
							smooth={true}
							duration={500}
							className="hover:text-[#F59E0B]"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="about"
							spy={true}
							smooth={true}
							duration={500}
							className="hover:text-[#F59E0B]"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="services"
							spy={true}
							smooth={true}
							duration={500}
							className="hover:text-[#F59E0B]"
						>
							What I Do
						</Link>
					</li>
					<li>
						<Link
							to="resume"
							spy={true}
							smooth={true}
							duration={500}
							className="hover:text-[#F59E0B]"
						>
							Resume
						</Link>
					</li>
					<li>
						<Link
							to="portfolio"
							spy={true}
							smooth={true}
							duration={500}
							className="hover:text-[#F59E0B]"
						>
							Portfolio
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							duration={500}
							className="hover:text-[#F59E0B]"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex justify-between items-center ml-5 list-none gap-1">
				<FontAwesomeIcon
					icon={faDribbble}
					className={`w-4 h-4 border-[.2px] rounded-full p-[8px]  ${
						scrolling
							? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
							: 'bg-white hover:bg-gray-200'
					} text-black  duration-300`}
				></FontAwesomeIcon>
				<FontAwesomeIcon
					icon={faBehance}
					className={`w-4 h-4 border-[.2px] rounded-full p-[8px]  ${
						scrolling
							? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
							: 'bg-white hover:bg-gray-200'
					} text-black  duration-300`}
				></FontAwesomeIcon>
				<FontAwesomeIcon
					icon={faInstagram}
					className={`w-4 h-4 border-[.2px] rounded-full p-[8px]  ${
						scrolling
							? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
							: 'bg-white hover:bg-gray-200'
					} text-black  duration-300`}
				></FontAwesomeIcon>
			</div>
		</div>
	);
};

export default Navbar;
