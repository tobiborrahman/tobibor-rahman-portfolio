import { Rating, ThinStar } from '@smastrom/react-rating';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdFormatQuote } from 'react-icons/md';
import { useEffect, useState } from 'react';

import css from '/css.png';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';

const myStyles = {
	itemShapes: ThinStar,
	activeFillColor: '#ffb700',
	inactiveFillColor: '#fbf1a9',
};

import man1 from '/man-1.jpg';
import man2 from '/man-2.jpg';
import man3 from '/man-3.jpg';
import man4 from '/man-4.jpg';

const Review = () => {
	const [rating, setRating] = useState(5);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className="container px-3 md:px-20 pb-7 md:pb-20  bg-[#F9FAFB] dark:bg-[#1E293B]">
			<SectionTitle upperTitle="clients review" />
			<Swiper
				spaceBetween={30}
				slidesPerView={
					windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3
				}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide className="w-[400px] pt-28">
					<div className="p-6 arrow-tooltip bg-white dark:bg-[#0F172A]">
						<MdFormatQuote className="text-[#ffb700] text-6xl" />
						<p className="text-gray-500">
							Obviously I am a Web Designer. Web Developer with
							over 7 years of experience. Experienced with all
							stages of the development.
						</p>
						<Rating
							style={{ maxWidth: 100, padding: '15px 0' }}
							value={rating}
							onChange={setRating}
							itemStyles={myStyles}
						/>
					</div>

					<div className="flex justify-center items-center">
						<div className="">
							<img
								className="w-20 ml-7 h-20 mt-4 rounded-full"
								src={man1}
								alt=""
							/>

							<div className="text-center">
								<h5 className="text-black dark:text-white font-medium">
									Tobibor Rahman
								</h5>
								<p className="text-gray-500 ">Manager</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-[400px] pt-28">
					<div className="p-6 bg-white arrow-tooltip dark:bg-[#0F172A]">
						<MdFormatQuote className="text-[#ffb700] text-6xl" />
						<p className="text-gray-500">
							Obviously I am a Web Designer. Web Developer with
							over 7 years of experience. Experienced with all
							stages of the development.
						</p>
						<Rating
							style={{ maxWidth: 100, padding: '15px 0' }}
							value={rating}
							onChange={setRating}
							itemStyles={myStyles}
						/>
					</div>
					<div className="flex justify-center items-center">
						<div className="">
							<img
								className="w-20 ml-7 h-20 mt-4 rounded-full"
								src={man2}
								alt=""
							/>

							<div className="text-center">
								<h5 className="text-black dark:text-white font-medium">
									Mizanur Rahman
								</h5>
								<p className="text-gray-500 ">Manager</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-[400px] pt-28">
					<div className="p-6 bg-white arrow-tooltip dark:bg-[#0F172A]">
						<MdFormatQuote className="text-[#ffb700] text-6xl" />
						<p className="text-gray-500">
							Obviously I am a Web Designer. Web Developer with
							over 7 years of experience. Experienced with all
							stages of the development.
						</p>
						<Rating
							style={{ maxWidth: 100, padding: '15px 0' }}
							value={rating}
							onChange={setRating}
							itemStyles={myStyles}
						/>
					</div>
					<div className="flex justify-center items-center">
						<div className="">
							<img
								className="w-20 ml-7 h-20 mt-4 rounded-full"
								src={man3}
								alt=""
							/>

							<div className="text-center">
								<h5 className="text-black dark:text-white font-medium">
									Muzibur Rahman
								</h5>
								<p className="text-gray-500 ">Manager</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-[400px] pt-28">
					<div className="p-6 bg-white arrow-tooltip dark:bg-[#0F172A]">
						<MdFormatQuote className="text-[#ffb700] text-6xl" />
						<p className="text-gray-500">
							Obviously I am a Web Designer. Web Developer with
							over 7 years of experience. Experienced with all
							stages of the development.
						</p>
						<Rating
							style={{ maxWidth: 100, padding: '15px 0' }}
							value={rating}
							onChange={setRating}
							itemStyles={myStyles}
						/>
					</div>
					<div className="flex justify-center items-center">
						<div className="">
							<img
								className="w-20 ml-3 h-20 mt-4 rounded-full"
								src={man4}
								alt=""
							/>

							<div className="text-center">
								<h5 className="text-black dark:text-white font-medium">
									Asif Rahman
								</h5>
								<p className="text-gray-500 ">Manager</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Review;
