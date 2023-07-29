import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import logo from '../../../public/logo-1.gif';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!isOpen);
	};

	return (
		<div className="navbar lg:fixed bg-[#111827] md:px-20 z-50 md:opacity-50 p-0">
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
							<li>
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
				<img className="w-40 hidden md:inline h-20" src={logo} alt="" />
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-white text-xl font-semibold">
					<li>
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
