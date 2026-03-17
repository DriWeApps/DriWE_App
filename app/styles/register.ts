// import { StyleSheet } from "react-native";

// export const registerStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#F8FAFC",
//   },

//   title: {
//     fontSize: 32,
//     fontWeight: "700",
//     marginBottom: 30,
//     color: "#1F2937",
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: "#E5E7EB",
//     height: 50,
//     width: "80%",
//     maxWidth: 350,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     borderRadius: 12,
//     backgroundColor: "#FFFFFF",
//     fontSize: 16,
//   },

//   button: {
//     backgroundColor: "#FFBF00",   // your button color
//     height: 50,
//     width: "80%",
//     maxWidth: 350,
//     borderRadius: 12,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,

//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 5,

//     elevation: 5,
//   },

//   passwordContainer: {
//   flexDirection: "row",
//   alignItems: "center",
//   borderWidth: 1,
//   borderColor: "#E5E7EB",
//   borderRadius: 12,
//   backgroundColor: "#fff",
//   width: "80%",
//   maxWidth: 350,
//   height: 50,
//   paddingHorizontal: 10,
//   marginBottom: 15,
// },

// passwordInput: {
//   flex: 1,
//   fontSize: 16,
// },

//   buttonText: {
//     color: "#1F2937",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   link: {
//     marginTop: 20,
//     textAlign: "center",
//     color: "#2563EB",
//     fontSize: 15,
//   },
// });


import { StyleSheet } from "react-native";

export const registerStyles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F8FAFC",
alignItems:"center",
justifyContent:"center",
padding:20
},

logo:{
width:140,
height:80,
resizeMode:"contain",
marginBottom:10
},

title:{
fontSize:28,
fontWeight:"700",
color:"#1F2937",
marginBottom:20
},

card:{
width:"100%",
maxWidth:360,
backgroundColor:"#fff",
padding:25,
borderRadius:18,

shadowColor:"#000",
shadowOffset:{width:0,height:4},
shadowOpacity:0.15,
shadowRadius:6,

elevation:5
},

input:{
borderWidth:1,
borderColor:"#E5E7EB",
height:50,
paddingHorizontal:15,
borderRadius:12,
marginBottom:15,
backgroundColor:"#F9FAFB",
fontSize:16
},

passwordContainer:{
flexDirection:"row",
alignItems:"center",
borderWidth:1,
borderColor:"#E5E7EB",
borderRadius:12,
height:50,
paddingHorizontal:10,
marginBottom:15,
backgroundColor:"#F9FAFB"
},

passwordInput:{
flex:1,
fontSize:16
},

button:{
backgroundColor:"#FFBF00",
height:50,
borderRadius:12,
justifyContent:"center",
alignItems:"center",
marginTop:10
},

buttonText:{
color:"#1F2937",
fontSize:16,
fontWeight:"600"
},

link:{
marginTop:20,
color:"#2563EB",
fontSize:15
}

});