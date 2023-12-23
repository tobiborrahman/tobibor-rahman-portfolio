import React, { useEffect, useState } from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTOTop = () => {
	const [scrolling, setScrolling] = useState(false);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 600; // Change this value based on your needs
			setScrolling(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div>
			<div>
				<a href="#" onClick={scrollToTop}>
					<FontAwesomeIcon
						icon={faArrowUp}
						className={`w-3 h-3 border-gray-800 bg-[#F59E0B] ${
							scrolling
								? 'fixed bottom-6 right-6 overflow-x-hidden'
								: 'hidden'
						} rounded-full p-[10px] text-white`}
					></FontAwesomeIcon>
				</a>
			</div>
		</div>
	);
};

export default ScrollTOTop;
