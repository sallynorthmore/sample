import { injectGlobal } from "styled-components";

export default function injectGlobalStyles() {
  return injectGlobal`
		/* stylelint-disable selector-max-universal, selector-max-type  */
		/* Minimal reset that keeps insepector output clean */
		*,
		*::before,
		*::after {
		  border: 0;
		  box-shadow: 0 0 0;
		  box-sizing: border-box;
			font: 400 14px/1 "Helvetica", sans-serif;
		  font-feature-settings: "kern" 1;
		  font-kerning: normal;
		  list-style: none;
		  margin: 0;
		  padding: 0;
		}
		/* stylelint-enable */
	`;
}
