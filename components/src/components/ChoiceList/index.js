import React, { Component } from 'react';
import PropTypes from 'prop-types';
import without from 'lodash/without';

import FilterControls from '../FilterControls';
import FilterSearch from '../FilterSearch';
import { IconTick } from '../Icon';
import {
	Choice,
	ChoiceIcon,
	Inner,
	Item,
	Items,
	Label,
	Search,
	Title,
} from './styles';

class ChoiceList extends Component {
	state = {
		searchTerm: '',
	};

	onClearAll = () => {
		this.props.isMultiChoice
			? this.updateMultiChoiceValues([])
			: this.updateSingleChoiceValue(null);
	};

	onSelectAll = () => {
		const { choices } = this.props;
		const newSelectedValues = choices.map(choice => {
			return choice.value;
		});
		this.updateMultiChoiceValues(newSelectedValues);
	};

	choiceList = ({ selectedValues, choices }) => {
		return choices.map(choice => {
			const isSelected = selectedValues.includes(choice.value);
			return (
				<Item key={choice.value} title={choice.label}>
					<Choice
						onClick={() => this.updateChoiceSelection(choice.value)}
						isSelected={isSelected}
					>
						<Label>{choice.label}</Label>
						<ChoiceIcon isSelected={isSelected}>
							<IconTick width={14} />
						</ChoiceIcon>
					</Choice>
				</Item>
			);
		});
	};

	handleSearchChoices = searchTerm => {
		this.setState({
			searchTerm: searchTerm.toLowerCase(),
		});
	};

	updateChoiceSelection = choiceValue => {
		const { selectedValues, isMultiChoice } = this.props;

		if (isMultiChoice) {
			const newSelectedValues = selectedValues.includes(choiceValue)
				? without(selectedValues, choiceValue)
				: [...selectedValues, choiceValue];
			this.updateMultiChoiceValues(newSelectedValues);
		} else {
			this.updateSingleChoiceValue(
				choiceValue === selectedValues[0] ? null : choiceValue
			);
		}
	};

	updateMultiChoiceValues(values) {
		this.props.onValueChange({ values });
	}

	updateSingleChoiceValue(value) {
		this.props.onValueChange({ value });
	}

	render() {
		const { choices, title, selectedValues, isMultiChoice } = this.props;
		const { searchTerm } = this.state;

		return (
			<Inner>
				<FilterControls
					hasSelectAll={isMultiChoice}
					isClearDisabled={selectedValues.length === 0}
					isSelectAllDisabled={choices.length === selectedValues.length}
					onClearClick={this.onClearAll}
					onSelectAllClick={this.onSelectAll}
				/>

				<Search>
					<FilterSearch
						handleSearchChange={this.handleSearchChoices}
						isPadded
					/>
				</Search>

				{title && <Title>{title}</Title>}

				<Items>
					{this.choiceList({
						selectedValues,
						choices: choices.filter(choice =>
							choice.label.toLowerCase().includes(searchTerm)
						),
					})}
				</Items>
			</Inner>
		);
	}
}

ChoiceList.propTypes = {
	choices: PropTypes.array,
	isMultiChoice: PropTypes.bool,
	onValueChange: PropTypes.func,
	selectedValues: PropTypes.array,
	title: PropTypes.string,
};

ChoiceList.defaultProps = {
	choices: [],
	selectedValues: [],
	isMultiChoice: true,
	onValueChange: () => null,
};

export default ChoiceList;
