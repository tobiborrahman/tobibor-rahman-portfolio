import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../../public/logo-gif2.gif';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 ">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-20 mb-5 md:mb-0">
				<div className="flex items-center justify-center md:justify-start space-x-4">
					<img
						className="h-56 w-56 bg-transparent"
						src={logo}
						alt="Logo"
					/>
				</div>
				<div className="space-x-4 text-center mt-4 md:mt-0">
					<h4 className="text-2xl font-semibold">Address</h4>
					<p>Chandana Chourasta, Gazipur</p>

					<p
						href="mailto:r.tobibor16@gmail.com"
						className="hover:text-white"
					>
						r.tobibor16@gmail.com
					</p>
					<p href="tel:+1234567890" className="hover:text-white">
						+8801316433225
					</p>
				</div>
				<div className="flex space-x-4 mt-4 md:mt-0">
					<FaTwitter className="text-2xl hover:text-white" />
					<FaLinkedin className="text-2xl hover:text-white" />
					<FaGithub className="text-2xl hover:text-white" />
				</div>
			</div>
			<hr />
			<div className="container mx-auto py-4 text-center">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Tobibor Rahman. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
