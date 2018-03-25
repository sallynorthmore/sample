import React from 'react';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Carousel from '../index';

const testProps = {
	items: [''],
	firstSlide: 0,
	responsive: true,
	width: 540,
};

describe('<Carousel /> snapshot', () => {
	it('renders correctly', () => {
		const wrapper = mount(
			<Carousel
				firstSlide={testProps.firstSlide}
				responsive
				width={testProps.width}
			>
				{testProps.items}
			</Carousel>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('renders correctly without props', () => {
		const wrapper = mount(<Carousel />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
