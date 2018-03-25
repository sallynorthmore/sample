import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import * as Icons from '../index';

const options = {
	fillColor: 'blue',
	width: 25,
};
Object.values(Icons).map(Icon => {
	describe('<Icon /> snapshots', () => {
		it('Expect snapshot to match', () => {
			const tree = renderer.create(<Icon />).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('Expect snapshot to match with props', () => {
			const tree = renderer
				.create(<Icon fillColor={options.fillColor} width={options.width} />)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('Expect snapshot to match with percentage width', () => {
			const tree = renderer
				.create(
					<Icon fillColor={options.fillColor} percent width={options.width} />
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
