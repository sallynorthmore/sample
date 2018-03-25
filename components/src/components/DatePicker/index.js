import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import FilterControls from '../FilterControls';
import { IconChevron, IconTick } from '../Icon';
import {
	Button,
	ButtonGroup,
	Inner,
	ReactDates,
	Summary,
	WeekHeader,
	WeekDay,
} from './styles';

class DatePicker extends Component {
	state = {
		focusedInput: 'startDate',
		startDate: mapDateToMoment(this.props.startDate),
		endDate: mapDateToMoment(this.props.endDate),
		isCustomSelected: true,
		totalWeekRows: 5,
		isCalendarRendered: false,
	};

	/**
	 * Delay displaying react dates on render.
	 * Otherwise it creates a janky twitch effect
	 * when clicking into a filter
	 */
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isCalendarRendered: true,
			});
		}, 150);
	}

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

	handleClearFilter = () => {
		this.onDatesChange({ startDate: null, endDate: null });
		this.setState({
			isCustomSelected: false,
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

	onPresetClick = ({ startDate, endDate }) => {
		this.setState({ isCustomSelected: false });
		this.onDatesChange({ startDate, endDate });
	};

	// Force the focusedInput to always be truthy so that dates are always selectable
	onFocusChange = focusedInput => {
		this.setState({
			focusedInput: !focusedInput ? 'startDate' : focusedInput,
			isCustomSelected: true,
		});
	};

	onCustomClick = () => {
		this.setState({
			isCustomSelected: true,
		});
	};

	renderDatePresets = () => {
		const { startDate, endDate, isCustomSelected } = this.state;
		const today = moment();
		const presets = [
			{
				text: 'Last week',
				start: moment().subtract(1, 'week'),
				end: today,
			},
			{
				text: 'Last month',
				start: moment().subtract(1, 'month'),
				end: today,
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
								<IconTick width={14} />
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

	getNumberOfWeekDayOccurancesInMonth = ({ date, weekday }) => {
		date.date(1);
		const diff = (7 + (weekday - date.weekday())) % 7 + 1;
		return Math.floor((date.daysInMonth() - diff) / 7) + 1;
	};

	onArrowClick = e => {
		const firstDayOfMonth = moment(e)
			.startOf('month')
			.weekday();
		const totalMondays = this.getNumberOfWeekDayOccurancesInMonth({
			date: e,
			weekday: 1,
		});
		const totalWeekRows = totalMondays + (firstDayOfMonth === 1 ? 0 : 1);

		/**
		 * Pause to let react-dates to catch up with rerender
		 * It was failing to re-attach its event handlers on the calendars
		 */
		if (totalWeekRows !== this.state.totalWeekRows) {
			setTimeout(() => {
				this.setState({ totalWeekRows });
			}, 5);
		}
	};

	render() {
		const {
			endDate,
			focusedInput,
			isCalendarRendered,
			isCustomSelected,
			totalWeekRows,
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
			navNext: <IconChevron width={11} />,
			navPrev: <IconChevron width={11} />,
			numberOfMonths: 2,
			onDatesChange: this.onDatesChange,
			onFocusChange: this.onFocusChange,
			onNextMonthClick: this.onArrowClick,
			onPrevMonthClick: this.onArrowClick,
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
				<FilterControls
					onClearClick={this.handleClearFilter}
					isClearDisabled={!hasDatesSelected}
				/>

				{this.renderDatePresets()}

				<ReactDates isActive={hasDatesSelected} isVisible={isCalendarRendered}>
					<WeekHeader yOffset={totalWeekRows}>
						<WeekDay>Mo</WeekDay>
						<WeekDay>Tu</WeekDay>
						<WeekDay>We</WeekDay>
						<WeekDay>Th</WeekDay>
						<WeekDay>Fr</WeekDay>
						<WeekDay>Sa</WeekDay>
						<WeekDay>Su</WeekDay>
					</WeekHeader>
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
