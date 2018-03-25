import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import FilterPanel from '../index';

const testProps = {
	filters: [],
	active: true,
	onDoneClick: () => null,
	onClearClick: () => null,
};

describe('<FilterPanel /> snapshots', () => {
	it('Expect snapshot to match without props', () => {
		const tree = renderer.create(<FilterPanel />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Expect snapshot to match with props', () => {
		const tree = renderer.create(<FilterPanel {...testProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
