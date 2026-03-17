import { StyleSheet } from "react-native";

export const pageStyles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 2
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000"
  },

  profileImage: {
  width: 120,
  height: 120,
  borderRadius: 60,
  marginBottom: 10,
  resizeMode: "cover",
  borderWidth: 3,
  borderColor: "#FFBF00"
},

text: {
  fontSize: 16,
  lineHeight: 26,
  color: "#444",
  marginBottom: 10
},

  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    elevation: 2
  },

  button: {
    backgroundColor: "#FFBF00",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },

  question:{
  fontSize:16,
  fontWeight:"bold",
  marginTop:15
},

answer:{
  fontSize:15,
  marginTop:5,
  lineHeight:22,
  color:"#444"
},

sectionTitle:{
  fontSize:20,
  fontWeight:"bold",
  marginTop:20,
  marginBottom:10,
  color:"#111"
},

feature:{
  fontSize:16,
  marginBottom:10
},

pointTitle:{
  fontSize:16,
  fontWeight:"bold",
  marginTop:10
},

bold:{
  fontWeight:"bold"
}

});