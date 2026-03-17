import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {

        if (!firstName || !lastName || !email || !phone || !message) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        try {

            const res = await fetch("http://192.168.1.8:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    FirstName: firstName,
                    LastName: lastName,
                    Email: email,
                    ContactNumber: phone,
                    Message: message,
                }),
            });

            const data = await res.json();

            Alert.alert("Success", data.message);

            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");

        } catch (error) {

            Alert.alert("Error", "Server not reachable");

        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.title}>Contact Us</Text>

            <View style={styles.card}>

                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Contact Number"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />

                <TextInput
                    style={[styles.input, { height: 100 }]}
                    placeholder="Message"
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}