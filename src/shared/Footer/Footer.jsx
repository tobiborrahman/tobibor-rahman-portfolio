import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-8 pt-20">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				<div className="flex items-center justify-center md:justify-start space-x-4">
					<img
						className="h-56 w-56 bg-transparent"
						src="../../../public/logo-gif2.gif"
						alt="Logo"
					/>
				</div>
				<div className="flex space-x-4 mt-4 md:mt-0">
					<a
						href="mailto:contact@example.com"
						className="hover:text-white"
					>
						contact@example.com
					</a>
					<a href="tel:+1234567890" className="hover:text-white">
						+1234567890
					</a>
				</div>
				<div className="flex space-x-4 mt-4 md:mt-0">
					<a
						href="https://twitter.com/example"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white"
					>
						Twitter
					</a>
					<a
						href="https://linkedin.com/in/example"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/example"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white"
					>
						GitHub
					</a>
				</div>
			</div>
			<div className="container mx-auto mt-4 text-center">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Your Company. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
