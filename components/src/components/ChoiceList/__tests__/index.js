import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ChoiceList from '../index';

const testProps = {
	title: 'Sources',
	choices: [
		{
			label: 'Choice 1',
			value: 'choice1',
		},
		{
			label: 'Choice 2 ',
			value: 'choice2',
		},
	],
};

describe('<ChoiceList /> snapshots', () => {
	it('Expect snapshot to match without props', () => {
		const tree = renderer.create(<ChoiceList />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Expect snapshot to match with props', () => {
		const tree = renderer.create(<ChoiceList {...testProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
