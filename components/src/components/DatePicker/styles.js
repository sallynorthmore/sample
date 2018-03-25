import styled from 'styled-components';

const blue = 'rgba(0, 129, 187, 1)';
const grey = 'rgba(51, 51, 51, 1)';
const greyLight = 'rgba(213, 216, 220, 0.5)';

export const Inner = styled.div`
	flex: 1;
	max-width: 336px;
	overflow-x: hidden;
	overflow-y: auto;
	position: relative;
	width: 100%;

	/*
	 * AirBnB React Dates CSS overrides
	 */
	/* stylelint-disable */

	& .DateRangePicker_picker {
		position: static;
		top: 0;

		.DateRangePickerInput {
			opacity: ${props => (props.isCustomSelected ? '1' : '0')};
		}
	}

	& .DateRangePickerInput {
		align-items: center;
		background: white;
		border: 1px solid ${blue};
		display: flex;
		height: 35px;
		justify-content: center;
		outline: none;
		padding: 8px;
		position: absolute;
		right: 16px;
		text-align: center;
		top: -54px;
		width: 148px;
	}

	& .DateInput {
		& .DateInput_input {
			border: 0 none;
			color: ${blue};
			display: inline-block;
			flex: 0 0 65px;
			font: 400 13px/ 1 'Lato';
			margin: 0;
			max-width: 65px;
			outline: none;
			padding: 0;
			text-align: center;

			&::placeholder {
				color: rgba(11, 26, 52, 0.5);
				font: 400 13px/ 1 'Lato';
				line-height: 1.5;
			}

			&:focus {
				border: none;
				color: ${blue};
			}
		}

		& svg {
			display: none;
		}
	}

	& .DayPicker {
		box-shadow: none;
		margin: 8px 0 0;

		&::before {
			background: rgba(227, 232, 236, 1);
			content: '';
			display: block;
			height: 1px;
			width: 100%;
		}

		& * > * {
			font: 400 13px 'Lato';
		}

		& tr {
			border: 1px solid white;
		}
	}

	& .CalendarMonthGrid > div {
		margin: 0;

		&:not(:first-of-type) {
			margin-top: 24px;
		}
	}

	& .CalendarMonth_caption {
		color: rgba(122, 122, 122, 1);
		letter-spacing: 0.63px;
		padding-top: 0;
	}

	& .CalendarDay {
		border: 0 none !important;
		transition: background 0.195s cubic-bezier(0.4, 0, 0.2, 1),
			color 0.195s cubic-bezier(0.4, 0, 0.2, 1);
	}

	& .DayPicker_weekHeader {
		top: 60px;
	}

	& .DayPicker_weekHeader_li small {
		color: rgba(197, 197, 197, 1);
		letter-spacing: 0.63px;
	}

	& .CalendarDay__selected_span {
		background: ${greyLight};
		color: ${grey};

		&:hover {
			background: ${blue};
			color: white;
		}
	}

	& .CalendarDay__hovered_span {
		background: ${greyLight};
		color: ${grey};

		&:hover {
			background: ${blue};
			color: white;
		}
	}

	& .CalendarDay__selected,
	& .CalendarDay__selected:active,
	& .CalendarDay__selected:hover {
		background: ${blue};
		color: white;
		outline: none;
	}

	& .DayPicker_focusRegion {
		display: flex;
		flex-direction: column-reverse;
	}

	& .DayPickerNavigation_container {
		background: transparent;
		display: flex;
		justify-content: space-between;
		position: absolute;
		top: 0;
		width: 100%;
	}

	& .DayPickerNavigation_container__vertical {
		align-items: center;
		box-shadow: none;
		left: 16px;
		top: 8px;
		width: 304px;
	}

	& .DayPickerNavigation_button__default {
		background-color: transparent;
		border: none;
		box-shadow: none;
		color: ${grey};
	}

	& .DayPickerNavigation_button__vertical {
		background: transparent none;
		border: none;
		display: inline-flex;
		height: 48px;
		padding: 0;
		width: 48px;

		&:hover,
		&:focus {
			border: none;
			color: ${blue};
			outline: none;
		}

		&:active {
			background: transparent;
		}

		&:first-of-type {
			transform: rotate(180deg);
		}

		& svg {
			flex: 0 0 11px;
			width: 11px;
			min-width: 11px;
			margin: auto;
		}
	}
	/* stylelint-enable */
`;

export const Summary = styled.span`
	display: inline-block;
	margin: auto 0 auto auto;
	opacity: 1;
`;

export const WeekHeader = styled.ul`
	display: flex;
	justify-content: space-around;
	left: 20px;
	list-style: none;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 560px;
	width: 294px;
	z-index: 9;

	${props => (props.yOffset === 6 ? 'top: 600px;' : null)};
	${props => (props.yOffset === 4 ? 'top: 518px;' : null)};
`;

export const WeekDay = styled.li`
	color: rgba(197, 197, 197, 1);
	flex: 0 0 40px;
	font: 400 13px 'Lato';
	letter-spacing: 0.63px;
	text-align: center;

	&:first-child {
		text-align: center;
	}
`;

export const ReactDates = styled.div`
	display: ${props => (props.isVisible ? 'block' : 'none')};
	opacity: ${props => (props.isActive ? '1' : '0.3')};
`;

export const ButtonGroup = styled.div`
	display: block;
	width: 100%;
`;

export const Button = styled.div`
	align-items: center;
	background: white;
	color: ${props => (props.isActive ? blue : 'rgba(51, 51, 51, 1)')};
	cursor: pointer;
	display: flex;
	font: 400 14px/1 'Lato';
	justify-content: space-between;
	margin: 0;
	min-height: 54px;
	padding: 0 16px;
	position: relative;
	transition: background 0.195s cubic-bezier(0.4, 0, 0.2, 1),
		color 0.195s cubic-bezier(0.4, 0, 0.2, 1);
	user-select: none;
	width: 100%;
	z-index: ${props =>
		props.isActive ? '0' : '10'}; /* Hide AirBnB input when inactive */

	&:hover {
		background: rgba(248, 248, 248, 1);
		color: ${blue};
	}

	/* stylelint-disable-next-line selector-type-no-unknown, selector-max-type */
	& ${Summary} {
		opacity: ${props => (props.isActive ? '1' : '0')};
	}
`;
