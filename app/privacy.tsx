import { ScrollView, Text, View } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function Privacy() {

const privacyText = `1. Information Collection

We collect the following information to provide and improve our services:

-Personal Information: Name, phone number, email address, location data.

-Payment Information: Credit/debit card details or digital wallet information.

-Usage Data: Ride history, preferences, and interactions with the App.



2. Use of Information

-To facilitate ride bookings and process payments.

-To personalize user experience and improve service quality.

-To comply with legal obligations and resolve disputes.



3. Data Sharing

We may share your information with:-

-Drivers for ride coordination.

-Third-party service providers (e.g., payment processors).

-Law enforcement agencies when required by law.



4. Data Security

-We implement industry-standard security measures to protect your data.

-However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.



5. User Rights

You have the right to:

-Access, correct, or delete your personal information.

-Withdraw consent for data processing (subject to applicable laws).

-To exercise these rights, contact us at support@driwe.com .
`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.card}>

        <Text style={styles.title}>Privacy Policy</Text>

        <Text style={styles.text}>
          {privacyText}
        </Text>

      </View>

    </ScrollView>
  );
}