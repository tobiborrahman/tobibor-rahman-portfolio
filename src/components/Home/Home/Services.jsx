import React from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { PiDesktopLight } from 'react-icons/pi';
import { IoIosArrowRoundForward } from 'react-icons/io';

import { IoServerOutline } from 'react-icons/io5';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { SiWebcomponentsdotorg } from 'react-icons/si';
import { CiMobile2 } from 'react-icons/ci';
import { MdOutlineHdrAuto } from 'react-icons/md';
import { MdOutlineAutoAwesomeMotion } from 'react-icons/md';

const Services = () => {
	useEffect(() => {
		Aos.init({ duration: '1000' });
	}, []);

	return (
		<section id="services" className="bg-[#F9FAFB] dark:bg-[#1E293B]">
			<div className="custom-container">
				<SectionTitle upperTitle="what do I offer?" />

				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px] px-3 md:px-20 py-10 md:py-20">
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition rounded-2xl bg-white dark:bg-slate-900 md:h-[290px] duration-500"
					>
						<p>
							<PiDesktopLight className="text-5xl text-[#F59E0B] font-thin" />
						</p>
						<h4 className="text-xl pt-5 dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B]">
							Web Developer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<CiMobile2 className="text-5xl text-[#F59E0B] font-thin" />
						</p>
						<h4 className="text-xl pt-5 dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B]">
							Responsiveness
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<MdOutlineHdrAuto className="text-5xl text-[#F59E0B] font-thin" />
						</p>
						<h4 className="text-xl pt-5 dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B]">
							Authentication
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<IoServerOutline className="text-5xl text-[#F59E0B] font-thin" />
						</p>
						<h4 className="text-xl pt-5 dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B]">
							Database Designer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<HiOutlineCog8Tooth className="text-5xl text-[#F59E0B] font-thin" />
						</p>
						<h4 className="text-xl pt-5 dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B]">
							SEO Expert
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
					<div
						data-aos="fade-right"
						className="px-6 py-10 shadow shadow-gray-200 hover:shadow-lg dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 h-[290px]"
					>
						<p>
							<MdOutlineAutoAwesomeMotion className="text-5xl text-[#F59E0B] font-thin" />
						</p>
						<h4 className="text-xl pt-5 dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B]">
							UI/Ux Designer
						</h4>
						<p className="text-md py-5 text-[#94A3B8]">
							The phrasal sequence of the is now so that many
							campaign and benefit
						</p>

						<button className="flex justify-center items-center dark:text-white hover:text-[#F59E0B] dark:hover:text-[#F59E0B] duration-500">
							Read More <IoIosArrowRoundForward className="" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
