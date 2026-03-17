import { ScrollView, Text } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function Booking() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>My Bookings</Text>

      <Text style={styles.text}>No rides booked yet.</Text>

    </ScrollView>
  );
}