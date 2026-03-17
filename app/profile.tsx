import { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import { getUserProfile, updateUserProfile } from "./services/api";
import { pageStyles as styles } from "./styles/pages";

export default function Profile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [editMode, setEditMode] = useState(false);

  const [profileImage, setProfileImage] = useState(
    require("../assets/images/user.png")
  );

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await getUserProfile();

      if (res.ok) {
        setName(res.data.name);
        setEmail(res.data.email);
        setMobileNumber(res.data.MobileNumber);
      }
    } catch (err) {
      alert("Failed to load user data");
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await updateUserProfile({
        name,
        email,
        MobileNumber: mobileNumber
      });

      if (res.ok) {
        alert("Profile updated successfully");
        setEditMode(false);
      } else {
        alert("Update failed");
      }
    } catch (err) {
      alert("Error updating profile");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.card}>

        {/* PROFILE IMAGE */}
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image
            source={profileImage}
            style={styles.profileImage}
          />
          <Text style={{ color: "#888", marginBottom: 20 }}>
            Tap to change photo
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>My Profile</Text>

        {/* NAME */}
        {editMode ? (
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter Name"
          />
        ) : (
          <Text style={styles.text}>👤 Name: {name}</Text>
        )}

        {/* EMAIL */}
        {editMode ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
          />
        ) : (
          <Text style={styles.text}>📧 Email: {email}</Text>
        )}

        {/* MOBILE */}
        {editMode ? (
          <TextInput
            style={styles.input}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder="Enter Mobile Number"
            keyboardType="phone-pad"
          />
        ) : (
          <Text style={styles.text}>📱 Mobile: {mobileNumber}</Text>
        )}

        {/* BUTTON */}
        {editMode ? (
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setEditMode(true)}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}

      </View>

    </ScrollView>
  );
}