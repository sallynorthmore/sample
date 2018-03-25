import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import DatePicker from "./index";

const storyProps = {
	endDate: null,
	onDateSelectionChange: action(`Dates changed`),
	startDate: "2018-03-27",
}

const stories = storiesOf("DatePicker", module);

stories.add(
  "Default",
  withInfo("DatePicker is a UI component for selecting a date range. Built upon AirBnB's React Dates DatePicker")(() => {
    return (
      <DatePicker {...storyProps} />
    );
  })
);
