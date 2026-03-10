import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  video: {
    width: width * 2.15,
    height: width * 2.15,
  },
});