import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { dashboardStyles as styles } from "./styles/dashboard";

export default function Dashboard() {
  const router = useRouter();

  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const handleLogout = () => {
    alert("Logged Out");
    router.replace("/login" as any);
  };

  const handleVehicleSelect = (vehicle: string) => {
    setSelectedVehicle(vehicle);
  };

  const handleSubmit = () => {
    if (!pickup || !drop) {
      alert("Please enter both pickup and drop locations");
      return;
    }

    Alert.alert(
      "Ride Confirmed",
      `Your ${selectedVehicle} driver will reach ${pickup} in 5 min`,
      [{ text: "OK", onPress: () => {
          // reset after confirmation
          setSelectedVehicle(null);
          setPickup("");
          setDrop("");
        } 
      }]
    );
  };

  // Step 1: If no vehicle selected → show vehicle selection
  if (!selectedVehicle) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pick the Perfect Vechile</Text>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.box} onPress={() => handleVehicleSelect("Auto")}>
            <Image source={require("../assets/images/Auto.png")} style={styles.vehicleImage} />
            <Text style={styles.boxText}>Auto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => handleVehicleSelect("Car")}>
            <Image source={require("../assets/images/Car.png")} style={styles.vehicleImage} />
            <Text style={styles.boxText}>Car</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => handleVehicleSelect("Bus")}>
            <Image source={require("../assets/images/Bus.png")} style={styles.vehicleImage} />
            <Text style={styles.boxText}>Bus</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => handleVehicleSelect("Bike")}>
            <Image source={require("../assets/images/Bike.png")} style={styles.vehicleImage} />
            <Text style={styles.boxText}>Bike</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Step 2: Vehicle selected → show pickup/drop inputs
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Ride Details ({selectedVehicle})</Text>

      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickup}
        onChangeText={setPickup}
      />

      <TextInput
        style={styles.input}
        placeholder="Drop Location"
        value={drop}
        onChangeText={setDrop}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#6c757d", marginTop: 10 }]}
        onPress={() => setSelectedVehicle(null)}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}