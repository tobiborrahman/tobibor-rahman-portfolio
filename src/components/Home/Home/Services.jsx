import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { useEffect } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
	useEffect(() => {
		Aos.init({ duration: '1000' });
	}, []);
	return (
		<div id="services" className="bg-[#313741]">
			
			<div>
				<SectionTitle title="services" upperTitle="what i do" />

				<div className="lg:flex  justify-between text-white px-20 pb-20">
					<div
						data-aos="fade-right"
						className="lg:flex justify-center items-center mb-3"
					>
						<FaBeer className="w-20 h-20 border p-5 text-blue-500"></FaBeer>
						<div className="w-64 ml-3">
							<h3 className="text-2xl font-semibold">
								Web Design{' '}
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
					<div
						data-aos="fade-up"
						className="flex justify-center items-center mb-3"
					>
						<FaBeer className="w-20 h-20 border p-5 text-blue-500"></FaBeer>
						<div className="w-64 ml-3">
							<h3 className="text-2xl font-semibold">
								Web Development
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
					<div
						data-aos="fade-left"
						className="flex justify-center items-center"
					>
						<FaBeer className="w-20 h-20 border p-5 text-blue-500"></FaBeer>
						<div className="w-64 ml-3">
							<h3 className="text-2xl font-semibold">
								Full Stack Development
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
