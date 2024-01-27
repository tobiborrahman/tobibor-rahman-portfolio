import React from 'react';

const Freelancer = () => {
	return (
		<div className="bg-[#575C69] dark:bg-[#0F172A] py-20">
			<div className="custom-container text-center">
				<h1 className="text-xl md:text-2xl text-white font-semibold capitalize">
					I am available for freelancer project
				</h1>
				<p className="py-4 text-gray-300 px-3 md:w-[50%] mx-auto">
					I am a Web Designer and Developer with over 2 years of
					experience. I am working with all stages of the designing
					and development.
				</p>
				<button className="py-[10px] px-6 bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 font-semibold text-white rounded-md duration-300 mt-4">
					Hire Me
				</button>
			</div>
		</div>
	);
};

export default Freelancer;
