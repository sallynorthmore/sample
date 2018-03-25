import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { number, array, boolean, text } from '@storybook/addon-knobs';

import Carousel from './index';

const stories = storiesOf('Carousel', module);
const sampleItems = ['item 1', 'item 2', 'item 3'];

stories.add(
	'Carousel',
	withInfo('Carousel documentation')(() => {
		return (
			<div
				style={{
					backgroundColor: text('Background color', '#0b1a34'),
					minHeight: '500px',
					textAlign: 'center',
					display: 'flex',
				}}
			>
				<Carousel
					width={number('Carousel width in pixels', 540)}
					responsive={boolean('Responsive?', true)}
				>
					{array('Data array', sampleItems)}
				</Carousel>
			</div>
		);
	})
);
