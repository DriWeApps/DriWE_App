import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginUser } from "./services/api";
import { loginStyles as styles } from "./styles/login";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        setLoading(true);
        try {
            const res = await loginUser({ email, password });
            if (res.ok && res.data) {
                alert(res.data?.message || "Login Successful!");
                router.replace("/dashboard" as any);
            } else {
                const msg = res.data?.message || `Login failed (status ${res.status})`;
                alert(msg);
            }
        } catch (e) {
            alert("Login request failed: " + (((e as any)?.message) || String(e)));
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

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

            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? "Logging in..." : "Login"}</Text>
            </TouchableOpacity>

            <Text style={styles.link} onPress={() => router.push("/register" as any)}>
                Don't have an account? Register
            </Text>
        </View>
    );
}