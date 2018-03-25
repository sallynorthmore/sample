/**
 * DatePicker
 *
 * DatePicker is a component where I used AirBnB's 'react-dates' library
 * to create a custom-styled dates range selector.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { Check, Chevron } from '../Icon';
import {
	Button,
	ButtonGroup,
	ClearButton,
	Inner,
	ReactDates,
	Summary,
} from './styles';

class DatePicker extends Component {
	state = {
		focusedInput: 'startDate',
		startDate: mapDateToMoment(this.props.startDate),
		endDate: mapDateToMoment(this.props.endDate),
		isCustomSelected: true,
	};

	componentWillReceiveProps(nextProps) {
		const nextStartMoment = mapDateToMoment(nextProps.startDate);
		const nextEndMoment = mapDateToMoment(nextProps.endDate);

		if (
			!isSameDay(this.state.startDate, nextStartMoment) ||
			!isSameDay(this.state.endDate, nextEndMoment)
		) {
			this.setState({
				startDate: nextStartMoment,
				endDate: nextEndMoment,
			});
		}
	}

	onClearFilter = () => {
		this.onDatesChange({ startDate: null, endDate: null });
		this.setState({
			isCustomSelected: false,
		});
	};

	onCustomClick = () => {
		this.setState({
			isCustomSelected: true,
		});
	};

	onDatesChange = ({ startDate, endDate }) => {
		const { onDateSelectionChange } = this.props;
		this.setState({ startDate, endDate });

		onDateSelectionChange({
			start: startDate ? startDate.format(dateFormat) : null,
			end: endDate ? endDate.format(dateFormat) : null,
		});
	};

	/**
	 * Force the focusedInput to always be truthy so that dates are always selectable
	 */
	onFocusChange = focusedInput => {
		this.setState({
			focusedInput: !focusedInput ? 'startDate' : focusedInput,
			isCustomSelected: true,
		});
	};

	onPresetClick = ({ startDate, endDate }) => {
		this.setState({ isCustomSelected: false });
		this.onDatesChange({ startDate, endDate });
	};

	renderDatePresets = () => {
		const { startDate, endDate, isCustomSelected } = this.state;
		const today = moment();
		const presets = [
			{
				text: 'Next week',
				end: moment().add(1, 'week'),
				start: today,
			},
			{
				text: 'Next month',
				end: moment().add(1, 'month'),
				start: today,
			},
		];

		return (
			<ButtonGroup>
				{presets.map(({ text, start, end }) => {
					const isActive =
						isSameDay(start, startDate) && isSameDay(end, endDate);
					return (
						<Button
							key={text}
							isActive={isActive}
							onClick={() =>
								this.onPresetClick({ startDate: start, endDate: end })
							}
						>
							{text}
							<Summary>
								<Check width={14} />
							</Summary>
						</Button>
					);
				})}
				<Button onClick={this.onCustomClick} isActive={isCustomSelected}>
					Custom
				</Button>
			</ButtonGroup>
		);
	};

	render() {
		const {
			endDate,
			focusedInput,
			isCalendarRendered,
			isCustomSelected,
			startDate,
		} = this.state;

		const dateRangePresets = {
			block: true,
			customArrowIcon: '-',
			daySize: 42,
			displayFormat: 'M/D/YY',
			endDate: endDate,
			endDateId: 'endID',
			endDatePlaceholderText: 'M/D/YY',
			firstDayOfWeek: 1,
			focusedInput: focusedInput,
			hideKeyboardShortcutsPanel: true,
			isOutsideRange: () => {},
			keepOpenOnDateSelect: true,
			navNext: <Chevron width={11} />,
			navPrev: <Chevron width={11} />,
			numberOfMonths: 2,
			onDatesChange: this.onDatesChange,
			onFocusChange: this.onFocusChange,
			orientation: 'vertical',
			small: true,
			startDate: startDate,
			startDateId: 'startID',
			startDatePlaceholderText: 'M/D/YY',
			transitionDuration: 0,
			verticalHeight: 568,
		};
		const hasDatesSelected =
			startDate !== null || endDate !== null || isCustomSelected;

		return (
			<Inner>
				<ClearButton onClick={this.onClearFilter} disabled={!hasDatesSelected}>
					Clear
				</ClearButton>

				{this.renderDatePresets()}

				<ReactDates isActive={hasDatesSelected} isVisible={isCalendarRendered}>
					<DateRangePicker {...dateRangePresets} />
				</ReactDates>
			</Inner>
		);
	}
}

/**
 * Compare least significant, most likely to change units first
 * Moment's isSame clones moment inputs and is a tad slow
 * @param {?moment.Moment} a
 * @param {?moment.Moment} b
 */
function isSameDay(a, b) {
	if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
	return (
		a.date() === b.date() && a.month() === b.month() && a.year() === b.year()
	);
}

/**
 * Maps the date strings to moment objects
 * Passes on null values
 * @param {?string} dateString
 */
function mapDateToMoment(dateString) {
	return dateString ? moment(dateString) : null;
}

const dateFormat = 'YYYY-M-D';

DatePicker.propTypes = {
	endDate: PropTypes.string,
	startDate: PropTypes.string,
	onDateSelectionChange: PropTypes.func.isRequired,
};

export default DatePicker;
