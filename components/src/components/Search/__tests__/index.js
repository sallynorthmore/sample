import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Search from '../index';
import { dataTypes, searchOperationValues } from '../mock';

const testprops = {
	searchOperationValues,
	dataTypes,
	notFound: true,
};

describe('<Search /> snapshots', () => {
	it('Expect snapshot to match without props', () => {
		const tree = renderer.create(<Search />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Expect snapshot to match with props', () => {
		const tree = renderer.create(<Search {...testprops} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
