import { StyleSheet } from "react-native";

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
    color: "#1F2937",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    height: 50,
    width: "80%",
    maxWidth: 350,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#FFBF00",   // your button color
    height: 50,
    width: "80%",
    maxWidth: 350,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 5,
  },

  passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#E5E7EB",
  borderRadius: 12,
  backgroundColor: "#fff",
  width: "80%",
  maxWidth: 350,
  height: 50,
  paddingHorizontal: 10,
  marginBottom: 15,
},

passwordInput: {
  flex: 1,
  fontSize: 16,
},

  buttonText: {
    color: "#1F2937",
    fontSize: 16,
    fontWeight: "600",
  },

  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#2563EB",
    fontSize: 15,
  },
});