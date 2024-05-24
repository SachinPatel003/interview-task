import { createTheme } from "@mui/material";

const commonStyles = {
  shape: {
    borderRadiusPrimary: 12,
    borderRadiusSecondary: 6,
  },
  typography: {
    fontWeightBolder: 900,
  },
  spacing: 8,
};

const commonColors = {
  contrastTextSecondary: "#A4A4A4",
  whitePrimary: "#FFFFFF",
  blackPrimary: "#333333",
  lineClamp: {
    width: "300px",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  warningColor: "#ED4649",
  checkBoxBackgroundColor: "#54A3F8",
};

export const lightTheme = createTheme({
  palette: {
    // old color, Don't use these colors in the new UI
    mode: "light",
    primaryMain: "#C0D6FF",
    secondaryMain: "#455560",
    errorMain: "#d32f2f",
    infoMain: "#3e79f7",
    contrastColor: "#1B1B1B",
    fontColorLightBlack: "#000000b3",
    fontColorDisabled: "#00000059",
    noDataFoundIcon: "#f0f2f5",
    checkBoxColor: "#0849D3",
    transparentBackgroundPrimary: "#cacaca1f",
    backgroundSecondaryOld: "#ffffff",
    borderColorTransparent: "#e0e0e0",
    borderColorHr: "#0000001f",
    black: "#000000",
    white: "#FFFFFF",
    backgroundColorPrimary: "#ffffff",

    // new colors
    backgroundColorNavyBlue: "#22293D",
    backgroundColorWhite: "#FFFFFF",
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F5F5F5",
    contrastTextPrimary: "#333333",
    buttonPrimary: "#22293D",
    highlightColor: "#E9E9E9",
    activeColor: "#000000",
    inactiveColor: "#696969",
    iconSecondaryColor: "#A4A4A4",
    shadowcolor: "rgba(66, 66, 66, 0.10)",
    ...commonColors,
  },
  ...commonStyles,
});
