import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { indexStyleSheet } from "./styles/index";

export default function Index() {

  return (
    <View style={indexStyleSheet.container}>

      {/* Logo */}
      <View style={indexStyleSheet.header}>
        <Image
          source={require("../assets/images/DriWE-Logo.png")}
          style={indexStyleSheet.logo}
          resizeMode="contain"
        />
      </View>

     <Text style={indexStyleSheet.title}>Welcome to DriWE</Text>

      {/* Main Image */}
      <Image
        source={require("../assets/images/DriWE photo.png")}
        style={indexStyleSheet.mainImage}
        resizeMode="contain"
      />
     

      {/* Login Button */}
      <View style={indexStyleSheet.buttonWrapper}>
        <TouchableOpacity
          style={indexStyleSheet.customButton}
          onPress={() => router.push("/login" as any)}
        >
          <Text style={indexStyleSheet.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <View style={indexStyleSheet.buttonWrapper}>
        <TouchableOpacity
          style={indexStyleSheet.customButton}
          onPress={() => router.push("/register" as any)}
        >
          <Text style={indexStyleSheet.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

