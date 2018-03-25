import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import clamp from 'lodash/clamp';
import FilterControls from '../FilterControls';
import { IconPlus, IconMinus } from '../Icon';
import {
	Button,
	ButtonGroup,
	Inner,
	Input,
	InputGroup,
	Title,
	Unit,
	Validation,
} from './styles';

class NumberPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
		this.debouncedOnValueChange = debounce(this.props.onValueChange, 200);
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.value !== nextProps.value) {
			this.setState({
				value: nextProps.value,
			});
		}
	}

	getClampedValue(value) {
		const { minimum, maximum } = this.props;
		return clamp(value, minimum, maximum);
	}

	handleClearFilter = () => {
		this.handleValueChange(null);
	};

	handleDecrease = () => {
		this.handleValueDelta(-1);
	};

	handleIncrease = () => {
		this.handleValueDelta(1);
	};

	handleInputTextChange = event => {
		const stringValue = event.currentTarget.value;
		const numericValue = stringValue === '' ? null : parseFloat(stringValue);
		this.handleValueChange(numericValue);
	};

	handleValueChange(newValue) {
		if (this.isValueValid(newValue)) {
			this.debouncedOnValueChange({
				value: newValue === null ? null : newValue.toString(),
			});
		}

		this.setState({
			value: newValue,
		});
	}

	handleValueDelta(direction) {
		const { delta } = this.props;
		const { value } = this.state;
		this.handleValueChange(this.getClampedValue(value + delta * direction));
	}

	isValueValid(value) {
		return value === null || value === this.getClampedValue(value);
	}

	render() {
		const { title, minimum, maximum, unit } = this.props;
		const { value } = this.state;
		const isValid = this.isValueValid(value);

		return (
			<Inner>
				<FilterControls
					onClearClick={this.handleClearFilter}
					isClearDisabled={value === ''}
				/>

				{title && <Title>{title}</Title>}
				<Validation isVisible={!isValid}>
					({minimum} - {maximum})
				</Validation>
				<InputGroup>
					<Input
						name="input"
						onChange={this.handleInputTextChange}
						type="number"
						value={value ? value : ''}
					/>
					{unit && <Unit>{unit}</Unit>}
					<ButtonGroup>
						<Button name="increase" onClick={this.handleIncrease}>
							<IconPlus width={10} />
						</Button>
						<Button name="decrease" onClick={this.handleDecrease}>
							<IconMinus width={9} />
						</Button>
					</ButtonGroup>
				</InputGroup>
			</Inner>
		);
	}
}

NumberPicker.propTypes = {
	onValueChange: PropTypes.func.isRequired,
	title: PropTypes.string,
	value: PropTypes.number,
	delta: PropTypes.number.isRequired,
	minimum: PropTypes.number.isRequired,
	maximum: PropTypes.number.isRequired,
	unit: PropTypes.string,
};

NumberPicker.defaultProps = {
	delta: 1,
	minimum: -1000000000,
	maximum: 1000000000,
};

export default NumberPicker;
