import { StyleSheet } from "react-native";

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "47%",
    backgroundColor: "#FFF8DC",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginBottom: 10,
  },

  boxText: {
    fontSize: 18,
    fontWeight: "600",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#FFBF00",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  input: {
  width: "100%",
  backgroundColor: "#fff",
  padding: 15,
  borderRadius: 10,
  marginBottom: 15,
  fontSize: 16,
  elevation: 2,
},

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  vehicleImage: {
  width: 110,
  height: 110,
  resizeMode: "contain",
  marginBottom: 10,
},
});