import { ScrollView, Text, View } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function Refund() {

const refundText = `Eligibility for Refunds

• All requests for refunds must be submitted in writing to our support team within two (2) calendar days (48 hours) from the date of payment.

• Refund requests received after this period shall not be eligible for consideration under any circumstances.



Deductions and Fees

• In the event a refund request is approved, the applicable platform fee and/or payment processing charges shall be deducted from the refundable amount prior to remittance.

• The net amount, after such deductions, shall be considered the final refundable sum.



Mode of Refund

• All approved refunds will be processed using the original method of payment used at the time of the transaction.

• Processing timelines may vary depending on the payment provider, and the Company shall not be held liable for delays attributable to third-party payment gateways or financial institutions.



Non-Refundable Payments

• Any payments made outside the stipulated refund period shall be deemed non-refundable.

• The Company reserves the right to reject any refund request that does not comply with the terms set forth herein.



Acknowledgement

• By proceeding with a payment, the User expressly acknowledges that they have read, understood, and agreed to be bound by this Refund Policy.
`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Refund Policy</Text>
        <Text style={styles.text}>{refundText}</Text>
      </View>
    </ScrollView>
  );
}