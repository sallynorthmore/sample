import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import DatePicker from "./index";

const startDate = "2018-03-27";
const endDate = null;

const stories = storiesOf("DatePicker", module);

stories.add(
  "DatePicker",
  withInfo("DatePicker documentation")(() => {
    return (
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        onDateSelectionChange={action("Dates changed")}
      />
    );
  })
);
