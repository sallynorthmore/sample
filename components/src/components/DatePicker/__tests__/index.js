import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import 'jest-styled-components';
import DatePicker from '../index';

const testProps = {
	endDate: '2018-11-02',
	startDate: '2018-10-02',
	onDateSelectionChange: () => null,
};

describe('<DatePicker /> snapshots', () => {
	it('renders correctly', () => {
		const wrapper = mount(<DatePicker {...testProps} />);
		expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot();
	});
});
