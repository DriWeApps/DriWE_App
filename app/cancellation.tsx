import { ScrollView, Text, View } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function Cancellation() {

const cancellationText = `DriWE Cancellation Policy

Effective Date: 06-11-2025

At DriWE, we are committed to providing a reliable and transparent platform for both riders and drivers. The following policy outlines how ride cancellations are handled within the DriWE app.



1. Driver Cancellation Rules

• Once a driver receives a ride request, they have only one choice — to either Accept or Reject the ride.

• After accepting the ride, the driver cannot cancel it through the app.

• If, due to any reason, the driver cannot continue with the ride after accepting it, the driver must personally contact the rider and request the rider to cancel it from their end.

• Drivers repeatedly unable to complete accepted rides may face account review, penalties, or suspension for violating platform rules.



2. Rider Cancellation Rules

• Riders may cancel a ride before the driver reaches the pickup location.

• Frequent cancellations by a rider may affect their booking reliability and can lead to temporary suspension from DriWE.

• Once the driver has entered the OTP and the ride has officially started, the rider cannot cancel the ride.

• If the rider still wishes to end the trip after OTP entry, they must settle the payment directly with the driver for the completed part of the ride.



3. Payments

• All payments are made directly from the rider to the driver.

• DriWE does not handle or process any payments, so there will be no refunds or reversals from the platform.

• Any payment misunderstandings must be mutually resolved between the rider and driver.



4. Misuse and Enforcement

• Misuse of the cancellation feature or repeated violations of this policy (by either driver or rider) may result in temporary or permanent suspension from the DriWE platform.

• DriWE reserves the right to modify, update, or enforce additional actions if necessary to maintain service quality.



Contact Support

Hello@driwe.in

+91 86698 88996
`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cancellation Policy</Text>
        <Text style={styles.text}>{cancellationText}</Text>
      </View>
    </ScrollView>
  );
}