import { injectGlobal } from "styled-components";

// import LatoLightWoff2 from "./fonts/Lato-300.woff2";

export default function injectGlobalStyles() {
  return injectGlobal`
		/* stylelint-disable selector-max-universal, selector-max-type  */

		${"" /* @font-face {
			font-family: 'Lato';
			font-style: normal;
			font-weight: 300;
			src: url(${LatoLightWoff2}) format('woff2');
		} */}

		/* Minimal reset that keeps insepector output clean */
		*,
		*::before,
		*::after {
		  border: 0;
		  box-shadow: 0 0 0;
		  box-sizing: border-box;
		  font-family: Helvetica, sans-serif;
		  font-feature-settings: "kern" 1;
		  font-kerning: normal;
		  list-style: none;
		  margin: 0;
		  padding: 0;
		}
		/* stylelint-enable */
	`;
}
