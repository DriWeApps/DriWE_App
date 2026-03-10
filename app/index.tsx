import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { indexStyleSheet } from "./styles/index";

export default function Index() {

  const goToRegister = (type: string) => {
    router.push({
      pathname: "/register",
      params: { driverType: type }
    } as any);
  };

  return (
    <View style={indexStyleSheet.container}>

      <Text style={indexStyleSheet.title}>Welcome to DriWE</Text>

      <View style={indexStyleSheet.buttonWrapper}>
        <TouchableOpacity
          style={indexStyleSheet.customButton}
          onPress={() => goToRegister("Ride")}
        >
          <Text style={indexStyleSheet.buttonText}>Ride</Text>
        </TouchableOpacity>
      </View>

      <View style={indexStyleSheet.buttonWrapper}>
        <TouchableOpacity
          style={indexStyleSheet.customButton}
          onPress={() => goToRegister("Courier")}
        >
          <Text style={indexStyleSheet.buttonText}>Courier</Text>
        </TouchableOpacity>
      </View>

      <View style={indexStyleSheet.buttonWrapper}>
        <TouchableOpacity
          style={indexStyleSheet.customButton}
          onPress={() => router.push("/login" as any)}
        >
          <Text style={indexStyleSheet.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}