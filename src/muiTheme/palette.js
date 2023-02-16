import { colors } from "./colors";

// ==============================|| DARK PALETTE ||============================== //
const darkPalette = {
  background: {
    default: "#474a4a",
    paper: "#000000",
  },
  primary: {
    main: "#edc459", // Mustard yellow
    contrastText: "#000000",
  },
  indicies: {
    main: "#272929",
    contrastText: "#ffffff",
  },
  primaryBg: {
    main: "#000000",
    contrastText: "#ffffff",
  },
};

// ==============================|| LIGHT PALETTE ||============================== //
const lightPalette = {
  background: {
    default: "#f6f6fb",
    paper: "#ffffff",
  },
  primary: {
    main: "#1756a4", // imperial blue
    contrastText: "#ffffff",
  },
  indicies: {
    main: "#000000",
    contrastText: "#ffffff",
  },
  primaryBg: {
    main: "#1756a4",
    contrastText: "#ffffff",
  },
};

// ==============================|| MERGED ||============================== //
const palette = (mode) => {
  return {
    mode,
    laColors: {
      ...colors,
    },
    common: {
      white: "#fff",
      black: "#000",
      mustardYellow: "#edc459",
    },
    ...(mode === "dark" ? darkPalette : lightPalette),
  };
};

export default palette;
