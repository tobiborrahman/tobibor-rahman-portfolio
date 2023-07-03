import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, upperTitle }) => {
	return (
		<div className="text-center relative py-20">
			<h1 className="text-6xl md:text-[200px] font-bold uppercase text-gray-800">
				{title}
			</h1>
			<h3 className="md:title-border text-xl md:text-6xl text-center font-bold capitalize absolute w-full align-middle top-[43%] md:top-[43%] text-transparent  bg-clip-text bg-gradient-to-r from-[#00F29C] to-[#07F7F2]">
				{upperTitle}
				<span className="border-[3px] border-b mt-1 border-primary block mx-auto w-20"></span>
			</h3>
		</div>
	);
};

export default SectionTitle;
