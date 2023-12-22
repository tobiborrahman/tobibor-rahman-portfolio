import React from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { PiDesktopLight } from 'react-icons/pi';
import { IoIosArrowRoundForward } from 'react-icons/io';

import img1 from '../../../../public/web-des.webp';
import img2 from '../../../../public/web-development.webp';
import img3 from '../../../../public/full-stack.jpg';

const Services = () => {
	useEffect(() => {
		Aos.init({ duration: '1000' });
	}, []);
	return (
		<div id="services" className="bg-[#F9FAFB]">
			<div>
				<SectionTitle upperTitle="what do I offer?" />

				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px] px-3 md:px-20 pb-10 md:pb-20">
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 md:h-[290px]"
					>
						<p>
							<PiDesktopLight className="text-5xl text-[#cd9777] font-thin" />
						</p>
						<h4 className="text-xl pt-5 hover:text-[#cd9777]">
							UI/Ux Designer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center hover:text-[#cd9777] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<PiDesktopLight className="text-5xl text-[#cd9777] font-thin" />
						</p>
						<h4 className="text-xl pt-5 hover:text-[#cd9777]">
							UI/Ux Designer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center hover:text-[#cd9777] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<PiDesktopLight className="text-5xl text-[#cd9777] font-thin" />
						</p>
						<h4 className="text-xl pt-5 hover:text-[#cd9777]">
							UI/Ux Designer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center hover:text-[#cd9777] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<PiDesktopLight className="text-5xl text-[#cd9777] font-thin" />
						</p>
						<h4 className="text-xl pt-5 hover:text-[#cd9777]">
							UI/Ux Designer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center hover:text-[#cd9777] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<PiDesktopLight className="text-5xl text-[#cd9777] font-thin" />
						</p>
						<h4 className="text-xl pt-5 hover:text-[#cd9777]">
							UI/Ux Designer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center hover:text-[#cd9777] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<PiDesktopLight className="text-5xl text-[#cd9777] font-thin" />
						</p>
						<h4 className="text-xl pt-5 hover:text-[#cd9777]">
							UI/Ux Designer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center hover:text-[#cd9777] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
