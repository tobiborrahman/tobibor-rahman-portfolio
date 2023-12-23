import React from 'react';
import { useEffect, useRef } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { FaPhone, FaVoicemail } from 'react-icons/fa';

import { TbPhone } from 'react-icons/tb';
import { MdMailOutline } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { SiMaildotru } from 'react-icons/si';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className="">
			<div id="contact">
				<SectionTitle upperTitle="get in touch"></SectionTitle>

				<div className="md:flex items-center z-5 px-20 py-20">
					<div data-aos="fade-right" className="md:w-1/4 mr-20">
						<div className="flex text-xl">
							<TbPhone className="text-[25px]" />
							<div className="ml-7">
								<h4 className="text-black font-medium">
									Phone
								</h4>
								<p className="text-gray-500">+880 1316433225</p>
							</div>
						</div>

						<div className="flex py-5">
							<div className="text-[25px]">
								<MdMailOutline />
							</div>
							<div className=" text-xl ml-7">
								<h4 className="text-black font-medium">
									Email
								</h4>
								<p className="text-gray-500">
									r.tobibor16@gmail.com
								</p>
							</div>
						</div>
						<div className="flex text-xl">
							<div className="text-[25px]">
								<HiOutlineLocationMarker />
							</div>
							<div className=" ml-7">
								<h4 className="text-black font-medium">
									Location
								</h4>
								<p className="text-gray-500">
									Gazipur City, Dhaka, Bangladesh
								</p>
							</div>
						</div>
					</div>
					<div className="border rounded-md p-6 w-full">
						{/* <h2 className="text-5xl mb-8">Hire Me</h2> */}
						<form>
							<div className="md:flex">
								<input
									data-aos="fade-right"
									className="py-2 mr-5 pl-3 rounded-md w-full border"
									type="text"
									placeholder="Name"
								/>
								<input
									data-aos="fade-left"
									className="border rounded-md pl-3 w-full"
									type="text"
									placeholder="Email"
								/>
							</div>
							<input
								data-aos="fade-left"
								className="py-2 border pl-3 rounded-md my-5 w-full"
								type="text"
								placeholder="Subject"
							/>
							<textarea
								data-aos="fade-up"
								className="border w-full pl-3 pt-3 rounded-md h-[100px]"
								type="text"
								placeholder="Tell Me More About The project"
							/>
							<button className="border px-6 py-2 rounded-md mt-5 text-white bg-[#F59E0B] hover:bg-[#D97706] duration-500">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
