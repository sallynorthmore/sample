// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';
//
// import NumberPicker from './index';
//
// const stories = storiesOf('NumberPicker', module);
//
// stories
// 	.add(
// 		'Default',
// 		withInfo('NumberPicker documentation')(() => {
// 			return <NumberPicker onValueChange={action('Value changed')} />;
// 		})
// 	)
// 	.add(
// 		'with Title',
// 		withInfo('NumberPicker documentation')(() => {
// 			return (
// 				<NumberPicker
// 					title="Select your minimum size"
// 					onValueChange={action('Value changed')}
// 				/>
// 			);
// 		})
// 	)
// 	.add(
// 		'with inital value',
// 		withInfo('NumberPicker documentation')(() => {
// 			return (
// 				<NumberPicker
// 					title="Select your minimum size"
// 					value={100}
// 					onValueChange={action('Value changed')}
// 				/>
// 			);
// 		})
// 	)
// 	.add(
// 		'with unit set',
// 		withInfo('NumberPicker documentation')(() => {
// 			return (
// 				<NumberPicker
// 					title="Select your minimum size"
// 					value={100}
// 					unit="M"
// 					onValueChange={action('Value changed')}
// 				/>
// 			);
// 		})
// 	)
// 	.add(
// 		'with inital value, and delta set to 10',
// 		withInfo('NumberPicker documentation')(() => {
// 			return (
// 				<NumberPicker
// 					title="Select a number (in increments of 10)"
// 					value={100}
// 					delta={10}
// 					onValueChange={action('Value changed')}
// 				/>
// 			);
// 		})
// 	)
// 	.add(
// 		'with min and max values set',
// 		withInfo('NumberPicker documentation')(() => {
// 			return (
// 				<NumberPicker
// 					title="Select between 0 and 1,000"
// 					value={500}
// 					delta={100}
// 					minimum={0}
// 					maximum={1000}
// 					onValueChange={action('Value changed')}
// 				/>
// 			);
// 		})
// 	);
