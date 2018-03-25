// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';
// import ChoiceList from './index';
//
// const stories = storiesOf('ChoiceList', module);
//
// const onValueChange = action('onValueChange');
// const selected = ['choice1', 'choice5', 'choice9'];
// const multiChoiceListProps = {
// 	title: 'Select multiple',
// 	isMultiChoice: true,
// 	choices: [
// 		{
// 			label: 'Choice 1',
// 			value: 'choice1',
// 		},
// 		{
// 			label: 'Choice 2',
// 			value: 'choice2',
// 		},
// 		{
// 			label: 'Choice 3',
// 			value: 'choice3',
// 		},
// 		{
// 			label: 'Choice 4',
// 			value: 'choice4',
// 		},
// 		{
// 			label: 'Choice 5 has a very very very long label text',
// 			value: 'choice5',
// 		},
// 	],
// };
// const singleChoiceListProps = {
// 	title: 'Select one',
// 	isMultiChoice: false,
// 	choices: [
// 		{
// 			label: 'Choice 6',
// 			value: 'choice6',
// 		},
// 		{
// 			label: 'Choice 7',
// 			value: 'choice7',
// 		},
// 		{
// 			label: 'Choice 8',
// 			value: 'choice8',
// 		},
// 		{
// 			label: 'Choice 9',
// 			value: 'choice9',
// 		},
// 	],
// };
//
// stories.add(
// 	'ChoiceList (Multi-Choice)',
// 	withInfo('ChoiceList documentation')(() => {
// 		return (
// 			<ChoiceList
// 				{...multiChoiceListProps}
// 				selectedValues={selected}
// 				onValueChange={onValueChange}
// 			/>
// 		);
// 	})
// );
//
// stories.add(
// 	'ChoiceList (Single Choice)',
// 	withInfo('ChoiceList documentation')(() => {
// 		return (
// 			<ChoiceList
// 				{...singleChoiceListProps}
// 				selectedValues={selected}
// 				onValueChange={onValueChange}
// 			/>
// 		);
// 	})
// );
