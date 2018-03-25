// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';
// import { filterModelFactory } from '../../services/filter-models';
//
// import FilterPanel from './index';
//
// const stories = storiesOf('FilterPanel', module);
//
// const mockQueryUiElements = [
// 	{
// 		id: 'elem1',
// 		label: 'Select multiple',
// 		elementType: 'CHOICE_LIST',
// 		valueAddress: {
// 			tableViewConfigId: 'someTableViewConfigId1',
// 			operationId: 'mockOp1',
// 		},
// 		choices: [
// 			{
// 				label: 'A',
// 				value: 'a',
// 			},
// 			{
// 				label: 'B',
// 				value: 'b',
// 			},
// 			{
// 				label: 'C',
// 				value: 'c',
// 			},
// 			{
// 				label: 'X',
// 				value: 'x',
// 			},
// 			{
// 				label: 'Y',
// 				value: 'y',
// 			},
// 			{
// 				label: 'Z',
// 				value: 'z',
// 			},
// 			{
// 				label: 'K',
// 				value: 'k',
// 			},
// 			{
// 				label: 'J',
// 				value: 'j',
// 			},
// 			{
// 				label: 'I',
// 				value: 'i',
// 			},
// 			{
// 				label: 'Xx',
// 				value: 'xx',
// 			},
// 			{
// 				label: 'Yy',
// 				value: 'yy',
// 			},
// 			{
// 				label: 'Zz',
// 				value: 'zz',
// 			},
// 			{
// 				label: 'Kk',
// 				value: 'kk',
// 			},
// 			{
// 				label: 'Jk',
// 				value: 'jk',
// 			},
// 			{
// 				label: 'Ik',
// 				value: 'ik',
// 			},
// 			{
// 				label: 'XK',
// 				value: 'xk',
// 			},
// 			{
// 				label: 'YA',
// 				value: 'ya',
// 			},
// 			{
// 				label: 'ZA',
// 				value: 'za',
// 			},
// 			{
// 				label: 'KB',
// 				value: 'kb',
// 			},
// 			{
// 				label: 'JJ',
// 				value: 'jj',
// 			},
// 			{
// 				label: 'IA',
// 				value: 'ia',
// 			},
// 		],
// 	},
// 	{
// 		id: 'elem2',
// 		label: 'Sources',
// 		elementType: 'CHOICE_LIST',
// 		valueAddress: {
// 			tableViewConfigId: 'someTableViewConfigId1',
// 			operationId: 'mockOp2',
// 		},
// 		choices: [
// 			{
// 				label: 'D',
// 				value: 'd',
// 			},
// 			{
// 				label: 'E',
// 				value: 'e',
// 			},
// 		],
// 	},
// 	{
// 		id: 'someDateRangeElementId',
// 		label: 'Date filter with long text label',
// 		elementType: 'DATE_RANGE_PICKER',
// 		valueAddress: {
// 			tableViewConfigId: 'someTableViewConfigId1',
// 			operationId: 'mockOp3',
// 		},
// 		minDate: '2018-1-20',
// 		maxDate: '2018-2-18',
// 	},
// 	{
// 		id: 'someNumberPickerElementId',
// 		label: 'Min size',
// 		elementType: 'NUMBER',
// 		valueAddress: {
// 			tableViewConfigId: 'someTableViewConfigId1',
// 			operationId: 'mockOp4',
// 		},
// 		title: 'Pick a min size',
// 	},
// ];
// const mockOperations = [
// 	{
// 		operationId: 'mockOp1',
// 		operationType: 'FILTER_MULTIPLE_VALUES',
// 		values: ['b', 'c'],
// 	},
// 	{
// 		operationId: 'mockOp2',
// 		operationType: 'FILTER_MULTIPLE_VALUES',
// 		values: ['e'],
// 	},
// 	{
// 		operationId: 'mockOp3',
// 		operationType: 'FILTER_DATE_RANGE',
// 		start: '2/6/18',
// 		end: '2/12/18',
// 	},
// 	{
// 		operationId: 'mockOp4',
// 		operationType: 'NUMBER',
//
// 		minimum: { type: '0' },
// 		maximum: { type: '10000' },
// 		delta: { type: '100' },
// 	},
// ];
//
// const filterModels = mockQueryUiElements.map(queryElement =>
// 	filterModelFactory(
// 		mockOperations.find(
// 			v => v.operationId === queryElement.valueAddress.operationId
// 		),
// 		queryElement
// 	)
// );
//
// const panelProps = {
// 	filters: filterModels,
// 	onDoneClick: action('Done button click'),
// 	onClearClick: action('Clear button click'),
// };
//
// stories.add(
// 	'FilterPanel',
// 	withInfo('FilterPanel documentation')(() => {
// 		return (
// 			<div style={{ maxWidth: '336px', minHeight: '720px', display: 'flex' }}>
// 				<FilterPanel {...panelProps} />
// 			</div>
// 		);
// 	})
// );
