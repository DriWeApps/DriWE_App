// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import { useState } from "react";
// import { Text, TextInput, TouchableOpacity, View } from "react-native";
// import { registerUser } from "./services/api";
// import { registerStyles as styles } from "./styles/register";

// export default function Register() {
//   const router = useRouter();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [MobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");

//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleRegister = async () => {
//     if (!name || !email || !password || !MobileNumber) {
//       alert("Please fill all fields");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await registerUser({
//         name,
//         email,
//         password,
//         MobileNumber
//       });

//       if (res.ok) {
//         alert(res.data?.message || "Registered Successfully!");
//         router.push("/login" as any);
//       } else {
//         const msg =
//           res.data?.message || `Registration failed (status ${res.status})`;
//         alert(msg);
//       }
//     } catch (e) {
//       alert("Registration failed: " + ((e as any)?.message || String(e)));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Register</Text>

//       <TextInput
//         placeholder="Full Name"
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         placeholder="Email"
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         placeholder="Mobile Number"
//         style={styles.input}
//         keyboardType="phone-pad"
//         value={MobileNumber}
//         onChangeText={setMobileNumber}
//       />

//       {/* Password Field */}
//       <View style={styles.passwordContainer}>
//         <TextInput
//           placeholder="Password"
//           secureTextEntry={!showPassword}
//           style={styles.passwordInput}
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//           <Ionicons
//             name={showPassword ? "eye-off" : "eye"}
//             size={22}
//             color="#555"
//           />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleRegister}
//         disabled={loading}
//       >
//         <Text style={styles.buttonText}>
//           {loading ? "Registering..." : "Register"}
//         </Text>
//       </TouchableOpacity>

//       <Text style={styles.link} onPress={() => router.push("/login" as any)}>
//         Already have an account? Login
//       </Text>
//     </View>
//   );
// }



import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { registerUser } from "./services/api";
import { registerStyles as styles } from "./styles/register";

export default function Register() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    if (!name || !email || !password || !MobileNumber) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {

      const res = await registerUser({
        name,
        email,
        password,
        MobileNumber
      });

      if (res.ok) {
        alert(res.data?.message || "Registered Successfully!");
        router.push("/login" as any);
      } else {
        const msg =
          res.data?.message || `Registration failed (status ${res.status})`;
        alert(msg);
      }

    } catch (e) {
      alert("Registration failed: " + ((e as any)?.message || String(e)));
    } finally {
      setLoading(false);
    }

  };

  return (

    <View style={styles.container}>

      {/* LOGO HEADER */}

      <Image
        source={require("../assets/images/DriWE-Logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Create Account</Text>

      <View style={styles.card}>

        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Mobile Number"
          style={styles.input}
          keyboardType="phone-pad"
          value={MobileNumber}
          onChangeText={setMobileNumber}
        />

        {/* PASSWORD */}

        <View style={styles.passwordContainer}>

          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
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

          {loading ? (
            <ActivityIndicator color="#1F2937"/>
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}

        </TouchableOpacity>

      </View>

      <Text
        style={styles.link}
        onPress={() => router.push("/login" as any)}
      >
        Already have an account? Login
      </Text>

    </View>

  );

}

