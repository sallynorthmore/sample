// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
//
// import Search from './index';
// import { dataTypes, searchOperationValues } from './mock';
//
// const stories = storiesOf('Search', module);
//
// stories
// 	.addDecorator(story => <div style={{ maxWidth: '720px' }}>{story()}</div>)
// 	.add(
// 		'Default with dataTypes',
// 		withInfo('Search documentation')(() => {
// 			return <Search dataTypes={dataTypes} />;
// 		})
// 	)
// 	.add(
// 		'with filters applied',
// 		withInfo('Search documentation')(() => {
// 			return (
// 				<Search
// 					searchOperationValues={searchOperationValues}
// 					dataTypes={dataTypes}
// 				/>
// 			);
// 		})
// 	)
// 	.add(
// 		'not found',
// 		withInfo('Search documentation')(() => {
// 			return <Search notFound />;
// 		})
// 	);
