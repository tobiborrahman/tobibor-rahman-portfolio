import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import logo from '../../../public/logo-1.gif';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!isOpen);
	};

	return (
		<div className="navbar lg:fixed bg-black md:px-20 z-50 md:opacity-100 py-3">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="text-white lg:hidden">
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							onToggle={handleClick}
						/>
					</label>
					<ul
						tabIndex={0}
						className="w-[300px] dropdown-content text-center mt-3 z-40 p-2 shadow bg-base-100 rounded-box "
					>
						<ul className="menu z-40">
							<li className="hover:text-[#cd9777]">
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#services">What I Do</a>
							</li>
							<li>
								<a href="#resume">Resume</a>
							</li>
							<li>
								<a href="#portfolio">Portfolio</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
						<div>
							<a
								className="md:p-4 shadow-2xl text-2xl font-semibold bg-gradient-to-r from-[#00F29C] to-[#07F7F2] "
								href="../../../public/resume.pdf"
								download="final resume.pdf"
							>
								Download Resume
							</a>
						</div>
					</ul>
				</div>
				<h1 className="text-3xl font-bold text-white">TOBIBOR.</h1>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-white font-semibold">
					<li>
						<a className="hover:text-[#cd9777]" href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="hover:text-[#cd9777]" href="#about">
							About
						</a>
					</li>
					<li>
						<a className="hover:text-[#cd9777]" href="#services">
							What I Do
						</a>
					</li>
					<li>
						<a className="hover:text-[#cd9777]" href="#resume">
							Resume
						</a>
					</li>
					<li>
						<a className="hover:text-[#cd9777]" href="#portfolio">
							Portfolio
						</a>
					</li>
					<li>
						<a className="hover:text-[#cd9777]" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div className="hidden lg:inline-flex lg:navbar-end">
				<a
					className="md:p-2 shadow-2xl  bg-gradient-to-r from-[#00F29C] to-[#07F7F2] "
					href="../../../public/resume.pdf"
					download="final resume.pdf"
				>
					Download Resume
				</a>
			</div>
		</div>
	);
};

export default Navbar;
