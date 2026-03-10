import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { registerUser } from "./services/api";
import { registerStyles as styles } from "./styles/register";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const { driverType } = useLocalSearchParams();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await registerUser({
        name,
        email,
        password,
        driverType
      });

      if (res.ok) {
        alert(res.data?.message || "Registered Successfully!");
        router.push("/login" as any);
      } else {
        const msg = res.data?.message || `Registration failed (status ${res.status})`;
        alert(msg);
      }
    } catch (e) {
      alert("Registration failed: " + (((e as any)?.message) || String(e)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Field with Eye Icon */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Registering..." : "Register"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => router.push("/login" as any)}>
        Already have an account? Login
      </Text>
    </View>
  );
}