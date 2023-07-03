import React from 'react';
import Banner from '../Banner/Banner';
import About from './About';
import Services from './Services';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => {
	return (
		<div id="home">
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
