import React from 'react';
import Banner from '../Banner/Banner';
import About from './About';
import Services from './Services';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<div id="home">
			<Helmet>
				<title>Portfolio - Tobibor Rahman</title>
			</Helmet>
			<Banner></Banner>
			<About></About>
			<Services></Services>
			<Resume></Resume>
			<Portfolio></Portfolio>
			<Contact></Contact>
		</div>
	);
};

export default Home;
