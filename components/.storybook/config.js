import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { injectGlobal } from 'styled-components';
import injectGlobalStyles from '../src/global/injectGlobalStyles';

// Inject global styles
injectGlobalStyles();

// Load stories from components directory
const req = require.context('../src/components', true, /story\.js$/);

// injectGlobalStyles();
addDecorator(withKnobs);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
