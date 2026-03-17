import { ScrollView, Text, View } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function FAQ() {

const faqText = `Q: What is DriWE and how does it work?

• DriWE is an all-in-one application for booking cab and porter services.
• Simply open the app, choose the service you need, enter your pickup and drop location, and confirm the booking.
• Whether you're commuting or transporting goods, DriWE provides a quick and convenient solution.



Q: How do I book a cab with DriWE?

• Open the DriWE app.
• Enter your pickup and drop-off locations.
• Choose your preferred ride type.
• Confirm the booking and a nearby driver will be assigned to you shortly.



Q: How do I make a booking?

• Open the app and select the service you want.
• Enter your pickup and destination details.
• Confirm the booking to proceed.



Q: How can I cancel my booking?

• You can cancel your booking anytime before entering the OTP provided for ride confirmation.



Q: Which cities or areas does DriWE operate in?>

• DriWE currently operates in major metropolitan areas across the country.
• You can check the app to see the full list of supported cities and regions.
`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        <Text style={styles.text}>{faqText}</Text>
      </View>
    </ScrollView>
  );
}