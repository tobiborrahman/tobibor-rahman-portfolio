import React from 'react';
import Banner from '../Banner/Banner';
import About from './About';
import Services from './Services';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { Helmet } from 'react-helmet';
import Freelancer from './Freelancer';
import Review from './Review';
import ScrollTOTop from '../../../shared/Scroll/ScrollTOTop';
import ThemeSwitch from '../../common/ThemeSwitch';

const Home = () => {
	return (
		<div id="home">
			<Helmet>
				<title>Portfolio - Tobibor Rahman</title>
			</Helmet>
			<ThemeSwitch />
			<ScrollTOTop />
			<Banner></Banner>
			<About></About>
			<Services></Services>
			<Freelancer />
			<Resume></Resume>
			<Portfolio></Portfolio>
			<Review />
			<Contact></Contact>
		</div>
	);
};

export default Home;
