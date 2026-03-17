import { ScrollView, Text, View } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function Shipping() {

const shippingText = `Shipping Policy – Driwe Smartech Private Ltd


At DriWE, we are committed to providing reliable and hassle-free logistics and delivery
services. This Shipping Policy outlines how goods are picked up, transported, and delivered
through our platform.



Service Coverage

• Our shipping services are currently available in Pune.
• Service availability may vary based on location, time, and vehicle availability.



Order Placement & Confirmation

• Users can place a shipping request via the App.
• User can select the ride to make the courier.
• Fill the required detail and place your drop locations.
• Once the request is confirmed, you will receive a booking otp and driver vehicle details.
• Orders are subject to acceptance based on vehicle availability, item type, and serviceable areas.



Pick-up & Delivery

• Pick-up is done from the address provided by the customer.
• Delivery will be made to the address specified at the time of booking.

Customers must ensure that:

• Items are securely packed.
• Use better quality of adhesive tape
• Pick-up and drop locations are accurate and accessible.
• Someone is available at both locations to hand over/receive the goods.



Item Restrictions

• Perishable and Food items
• LEDs, LCDs, plasma, OLED and any kind of television screens
• Liquid product, livestock, perishables, live plants
• Flammable items (firecrackers, oil cans, adhesives, paint cans)
• Platinum, gold, silver, artificial jewelry
• Alcohol/tobacco/ medicines/drugs/poisonous goods
• Valuable items and electronic devices
• Machinery parts containing oil, grease, fuel or batteries
• Radioactive material or narcotic substances
• Indian postal articles such as stamps, coins, banknotes
• Gambling devices, lottery tickets, pornographic material
• DriWE is not responsible if any restricted substance is couriered.



Delivery Timelines

• Delivery times depend on distance, traffic, weather, and other operational factors.
• We make reasonable efforts to ensure on-time deliveries, but delays may occur.
• Estimated delivery times will be shown during booking.



Shipping Charges

• Charges are calculated based on km and timing
• Distance (pick-up – stops – drop location)
• Vehicle type (two-wheeler, mini truck, etc.)
• Additional services (waiting time, loading/unloading assistance)
• Exact charges are shown before confirming the booking.



Tracking

• All shipments can be tracked live via the app.
• Customers will also receive SMS/Email/Push notifications regarding order status.



Cancellations

• Orders can be cancelled before vehicle dispatch at no extra charge.
• Cancellation cannot be done after the parcel has been picked.



Liability & Claims

• Our liability is limited to the declared value of the goods
• Perishable items with shelf life less than 7 days are not accepted
• Claims for lost or damaged items must be reported within 3 days of delivery.



Customer Support

• Number - 866 988 8996
• Mail - hello@driwe.in



Ride / Service Policy – DriWE

Welcome to DriWE! Your safe, affordable, and reliable travel partner.



Service Coverage

• DriWE currently operates in [list cities/regions].
• Service availability may depend on time, location, and cab availability.



Booking & Confirmation

• Rides can be booked via the DriWE App.
• Once booked, you will receive driver details, vehicle details, and fare estimate.
• Booking confirmation is subject to cab availability.



Pick-up & Drop

• The driver will arrive at the pick-up location provided in the app.
• Customers are requested to be at the pick-up point at the scheduled time.
• Drop will only be to the destination entered at booking unless modified in-app.



Ride Timelines

• Estimated arrival times (ETA) may vary due to traffic, weather, or unforeseen conditions.
• We make best efforts to ensure timely pick-up and drop, but delays may occur.



Fare & Charges

• Base fare (minimum charge)
• Distance traveled & time taken
• Dynamic pricing during peak hours
• Toll charges, parking fees, and permits are payable by the rider.



Cancellation Policy

• Rides can be cancelled before the driver reaches the pick-up point at no cost.
• If cancelled after driver arrival or if the rider is a no-show, cancellation charges may apply.



Passenger Responsibilities

• Ensure the pick-up and drop-off locations are accurate and accessible.
• Wear seatbelts at all times during the ride.
• No carrying of hazardous, illegal, or restricted items.
• Treat drivers with respect and follow community guidelines.



Safety & Tracking

• All rides are GPS tracked for safety.
• Share ride details with friends/family via the in-app share option.
• 24/7 emergency helpline available within the app.



Liability

• DriWE ensures best safety measures but is not responsible for delays due to traffic,
  natural disasters, strikes, or government restrictions.



Customer Support

• 866 988 8996
• Hello@driwe.in
• In-App Chat Support
`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Shipping Policy</Text>
        <Text style={styles.text}>{shippingText}</Text>
      </View>
    </ScrollView>
  );
}