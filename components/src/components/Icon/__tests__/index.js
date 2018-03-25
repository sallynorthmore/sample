import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import * as Icons from '../index';

const testProps = {
	fillColor: 'blue',
	width: 25,
};

Object.values(Icons).map(Icon => {
	describe('<Icon /> snapshots', () => {
		it('renders correctly', () => {
			const tree = renderer.create(<Icon {...testProps} />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
