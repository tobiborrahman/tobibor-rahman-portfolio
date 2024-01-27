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
		<section className="bg-[#F9FAFB] dark:bg-[#1E293B]">
			<div className="custom-container">
				<div id="contact">
					<SectionTitle upperTitle="get in touch"></SectionTitle>

					<div className="md:flex items-center z-5 px-3 md:px-20 py-14 md:py-20">
						<div data-aos="fade-right" className="md:w-1/4 mr-20">
							<div className="flex">
								<TbPhone className="text-[20px] dark:text-white" />
								<div className="ml-7">
									<h4 className="text-black dark:text-white font-medium">
										Phone
									</h4>
									<p className="text-gray-500">
										+880 1316433225
									</p>
								</div>
							</div>

							<div className="flex py-5">
								<div className="text-[20px] dark:text-white">
									<MdMailOutline />
								</div>
								<div className="ml-7">
									<h4 className="text-black dark:text-white font-medium">
										Email
									</h4>
									<p className="text-gray-500">
										r.tobibor16@gmail.com
									</p>
								</div>
							</div>
							<div className="flex">
								<div className="text-[20px] dark:text-white">
									<HiOutlineLocationMarker />
								</div>
								<div className=" ml-7">
									<h4 className="text-black dark:text-white font-medium">
										Location
									</h4>
									<p className="text-gray-500">
										Gazipur City, Dhaka, Bangladesh
									</p>
								</div>
							</div>
						</div>
						<div className="shadow mt-7 md:mt-0 rounded-md p-6 w-full bg-white dark:bg-[#0F172A]">
							<form>
								<div className="md:flex">
									<input
										data-aos="fade-right"
										className="py-2 mr-5 border dark:border-gray-700 pl-3 bg-transparent rounded-md w-full focus:border-[#F59E0B] dark:focus:border-[#F59E0B] focus:outline-none focus:border focus:ring-[#F59E0B]"
										type="text"
										placeholder="Name :"
									/>
									<input
										data-aos="fade-left"
										className="py-2 border mt-5 md:mt-0 dark:border-gray-700 pl-3 bg-transparent rounded-md w-full focus:border-[#F59E0B] dark:focus:border-[#F59E0B] focus:outline-none focus:border focus:ring-[#F59E0B]"
										type="text"
										placeholder="Email :"
									/>
								</div>
								<input
									data-aos="fade-left"
									className="py-2 my-5 border dark:border-gray-700 pl-3 bg-transparent rounded-md w-full focus:border-[#F59E0B] dark:focus:border-[#F59E0B] focus:outline-none focus:border focus:ring-[#F59E0B]"
									type="text"
									placeholder="Subject :"
								/>
								<textarea
									data-aos="fade-up"
									className="py-2 border dark:border-gray-700 pl-3 bg-transparent rounded-md w-full focus:border-[#F59E0B] dark:focus:border-[#F59E0B] focus:outline-none focus:border focus:ring-[#F59E0B] h-[100px]"
									type="text"
									placeholder="Message :"
								/>
								<button className=" px-6 py-2 rounded-md mt-5 text-white bg-[#F59E0B] hover:bg-[#D97706] duration-500">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
