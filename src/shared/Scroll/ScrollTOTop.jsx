import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTOTop = () => {
	const [scrolling, setScrolling] = useState(false);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 600;
			setScrolling(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div>
			<div className={`${scrolling ? '' : 'hidden'}`}>
				<a href="#" onClick={scrollToTop}>
					<FontAwesomeIcon
						icon={faArrowUp}
						className={`w-3 h-3 bg-[#F59E0B] fixed bottom-6 right-6 z-50  rounded-full p-[10px] text-white`}
					></FontAwesomeIcon>
				</a>
			</div>
		</div>
	);
};

export default ScrollTOTop;
