import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import NumberPicker from '../index';

const testProps = {
	delta: 10,
	maximum: 200,
	minimum: 0,
	onValueChange: () => null,
	value: 100,
};

describe('<NumberPicker /> snapshots', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<NumberPicker {...testProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
