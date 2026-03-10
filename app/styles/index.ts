import { StyleSheet } from "react-native";

export const indexStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 40,
    textAlign: "center",
  },

  buttonWrapper: {
    width: "100%",
    maxWidth: 320,
    marginVertical: 10,
  },

  customButton: {
    backgroundColor: "#FFBF00",   // All buttons color
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 5,
  },

  buttonText: {
    color: "#1F2937",
    fontSize: 16,
    fontWeight: "600",
  },
});