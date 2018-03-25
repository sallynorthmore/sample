import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import * as Icons from '../Icon';

const stories = storiesOf('Icon', module);

stories.add(
	'Icon',
	withInfo('Icon documentation')(() => {
		return (
			<div>
				{Object.keys(Icons).map(function(icon, index) {
					const Icon = Icons[icon];

					return (
						<div
							key={index}
							style={{
								padding: '20px',
								display: 'inline-block',
								textAlign: 'center',
								margin: '20px 0 0 20px',
								width: '140px',
							}}
						>
							<Icon fillColor={text('Icon fillColor', 'black')} />
						</div>
					);
				})}
			</div>
		);
	})
);
