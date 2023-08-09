import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "../fonts/Poppins-Regular.ttf";
import PoppinsSemiBold from "../fonts/Poppins-SemiBold.ttf";
import PoppinsMedium from "../fonts/Poppins-Medium.ttf";
import PoppinsBold from "../fonts/Poppins-Bold.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Poppins', sans-serif;
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins', sans-serif;
    src: url(${PoppinsSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins', sans-serif;
    src: url(${PoppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins', sans-serif;
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
`;

export default GlobalStyles;