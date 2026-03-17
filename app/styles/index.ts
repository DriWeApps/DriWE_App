import { StyleSheet } from "react-native";

export const indexStyleSheet = StyleSheet.create({

container:{
flex:1,
alignItems:"center",
backgroundColor:"#F8FAFC",
paddingHorizontal:24,
paddingTop:40
},

header:{
width:"100%",
alignItems:"center",
marginBottom:10
},

logo:{
width:180,
height:90
},

mainImage:{
width:"100%",
height:400,
marginVertical:20
},

title:{
fontSize:28,
fontWeight:"700",
color:"#1F2937",
marginBottom:30,
textAlign:"center"
},

buttonWrapper:{
width:"100%",
maxWidth:320,
marginVertical:8
},

customButton:{
backgroundColor:"#FFBF00",
height:52,
justifyContent:"center",
alignItems:"center",
borderRadius:12,

shadowColor:"#000",
shadowOffset:{width:0,height:4},
shadowOpacity:0.15,
shadowRadius:6,

elevation:5
},

buttonText:{
color:"#1F2937",
fontSize:16,
fontWeight:"600"
}

});