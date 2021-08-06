import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    color: black;
    font-family: 'Rubik', sans-serif;
  }
  display: flex;
`;

const colors = {
  background: {
    light: {
      color: "#FFFFFF",
    },
    main: {
      color: "#F2F2F2",
    },
  },
  borders: {
    main: {
      color: "#F1F1F1",
    },
  },
  primary: {
    main: {
      color: "#D7385E",
      contrastText: "#fff",
    },
  },
  secondary: {
    main: {
      color: "#FB7B6B",
      contrastText: "#fff",
    },
  },
  tertiary: {
    main: {
      color: "#070C0E",
      contrastText: "#fff",
    },
    light: {
      color: "#88989E",
      contrastText: "#fff",
    },
  },
  modes: {
    dark: {},
  },
};

const typographyVariants = {
  title: {
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: 1.25,
  },
  titleXS: {
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: 1.25,
  },
  subTitle: {
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: 1.25,
  },
  paragraph1: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 1.25,
  },
  paragraph2: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: 1.25,
  },
  smallestException: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: 1,
  },
};

const theme = {
  colors,
  typographyVariants,
  borderRadius: "12px",
  transition: "200ms ease-in-out",
};

export default theme;
