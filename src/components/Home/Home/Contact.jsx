import React from 'react';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import {
	FaFacebook,
	FaGithub,
	FaGoogle,
	FaInstagram,
	FaLinkedin,
	FaMailBulk,
	FaPhone,
} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className="bg-[#22252C]">
			<div id="contact">
				<SectionTitle
					title="contact"
					upperTitle="get in touch"
				></SectionTitle>

				<div className="md:flex items-center z-5 px-20">
					<div
						data-aos="fade-right"
						className="md:w-1/4 mr-20 text-white"
					>
						<h2 className="text-5xl pb-5">Address</h2>
						<p className="text-2xl pb-5">
							Chandana Chowrasta, Gazipur
						</p>

						<p className="flex items-center text-2xl">
							<span>
								<FaPhone className="mr-2"></FaPhone>
							</span>
							+8801316433225
						</p>
						<p className="flex items-center text-2xl">
							<span>
								<FaMailBulk className="mr-2"></FaMailBulk>
							</span>
							r.tobibor16@gmail.com
						</p>

						<h2 className="text-5xl py-5">Address</h2>
						<div className="flex justify-between w-full">
							<FaFacebook className="text-3xl duration-300 hover:text-blue-500" />
							<FaInstagram className="text-3xl duration-300 hover:text-red-300" />
							<FaLinkedin className="text-3xl duration-300 hover:text-blue-500" />
							<FaGithub className="text-3xl duration-300 hover:text-black" />
							<FaGoogle className="text-3xl duration-300 hover:text-yellow-500" />
						</div>
					</div>
					<div className="md:w-3/4">
						<h2 className="text-5xl mb-8  text-white">Hire Me</h2>
						<form>
							<div className="md:flex">
								<input
									data-aos="fade-right"
									className="border mb-5 md:mb-0 w-full mr-4 pt-3 text-3xl p-3  rounded-xl"
									type="text"
									placeholder="Name"
								/>
								<input
									data-aos="fade-left"
									className="border w-full text-3xl p-3  rounded-xl"
									type="text"
									placeholder="Email"
								/>
							</div>
							<textarea
								data-aos="fade-up"
								className="border w-full mr-4 text-3xl p-2 h-[170px] rounded-xl mt-5"
								type="text"
								placeholder="Tell Me More About The project"
							/>
						</form>
					</div>
				</div>
				<div>
					<div className="flex justify-center items-center">
						<a className="py-3 bg-gradient-to-r my-10 from-[#00F29C] to-[#07F7F2] hover:bg-blue-500 text-white duration-300 px-7 text-xl border rounded-full  flex justify-center items-center">
							Send Message
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
