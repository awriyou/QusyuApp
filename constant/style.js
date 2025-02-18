import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#0E6E63",
  secondary: "#E2FFFC",
  font: "#108F81",
  font2: "#12B09F",
  button: "#298176",

};

const SIZES = {
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xLarge: 18,
  xxLarge: 20,
  xxxLarge: 24,
  xxxxLarge: 40,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
