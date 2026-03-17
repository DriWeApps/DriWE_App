import { StyleSheet } from "react-native";

export const menuStyles = StyleSheet.create({

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    flexDirection: "row",
  },

  menuContainer: {
    width: "65%",
    backgroundColor: "#f5f5f5",
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  remainingArea: {
    flex: 1
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  item: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },

  text: {
    fontSize: 18,
  },

  logout: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  }

});