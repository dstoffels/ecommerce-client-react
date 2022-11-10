import React, { useState } from 'react';
import './Section.css';

const Section = ({ id, title, children }) => {
	return (
		<section id={id}>
			<h2 className='section-title'>{title}</h2>
			{children}
		</section>
	);
};

export default Section;
