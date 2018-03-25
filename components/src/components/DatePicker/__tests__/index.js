import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import DatePicker from '../index';

const testProps = {
	endDate: '2018-11-02',
	startDate: '2018-10-02',
	onDateSelectionChange: () => {},
};

describe('<DatePicker /> snapshots', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<DatePicker {...testProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
