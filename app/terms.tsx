import { ScrollView, Text, View } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function Terms() {

const termsText = `1. Introduction

Welcome to DriWE ("the App"), a ride-hailing platform operated by DriWE Smartech Pvt. Ltd. ("we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of the DriWE App and its services. By downloading, installing, or using the App, you agree to comply with these Terms. If you do not agree to these Terms, you must refrain from using the App.



2. Eligibility

- You must be at least 18 years old to use the App.
- You must have a valid mobile device, internet connection, and access to authorized platforms (e.g., Google Play Store) to download the App.

Drivers must possess:

- A valid driving license
- Vehicle registration documents
- Comprehensive insurance coverage as per applicable local laws



3. User Accounts

- To use the App, you must create an account by providing accurate information including your name, phone number, email address, and payment details.
- You are solely responsible for maintaining the confidentiality of your account credentials.
- We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activities.



4. Services

- The App connects riders ("Users") with drivers ("DriWErs") for transportation services.
- We act as an intermediary and do not own, operate, or maintain vehicles used for rides.
- Users can book rides, track trips in real-time, and make payments through the App.



5. Payment Terms

Payments for rides are processed through secure payment gateways integrated into the App.

Fares are calculated based on:

- Distance traveled
- Time taken
- Applicable taxes
- Dynamic pricing during peak hours

Payment methods include cash, credit/debit cards, and digital wallets.

Any disputes regarding fares must be reported within 7 days of the ride.



Shipping & Ride Service Policy

Shipping Policy – DriWE

At DriWE, we are committed to providing reliable and hassle-free logistics and delivery services.

Service Coverage

- Our shipping services are currently available in Pune.
- Service availability may vary based on location, time, and vehicle availability.



Order Placement & Confirmation

- Users can place a shipping request via the App.
- User can select the ride to make the courier.
- Fill the required detail and place your drop locations.
- Once the request is confirmed, you will receive a booking OTP and driver vehicle details.



Pick-up & Delivery

- Pick-up is done from the address provided by the customer.
- Delivery will be made to the address specified at the time of booking.



Item Restrictions

- Perishable and food items
- Television screens
- Liquid products or live plants
- Flammable items
- Precious metals or jewellery
- Alcohol / tobacco / medicines
- High capacity batteries
- Hazardous chemicals
- Radioactive material
- Gambling devices or illegal items



Delivery Timelines

- Delivery times depend on distance, traffic, weather and other operational factors.
- Estimated delivery times will be shown during booking.



Shipping Charges

Charges are calculated based on:

- Distance
- Vehicle type
- Waiting time
- Loading or unloading assistance



Tracking

- All shipments can be tracked live via the app.
- Customers will also receive SMS, Email or Push notifications.



Cancellations

- Orders can be cancelled before vehicle dispatch.
- Cancellation cannot be done after the parcel has been picked.



Liability & Claims

- Our liability is limited to the declared value of the goods.
- Claims must be reported within 3 days of delivery.



Customer Support

Number: 8669888996  
Mail: hello@driwe.in



Ride / Service Policy – DriWE

Welcome to DriWE! Your safe, affordable, and reliable travel partner.



Booking & Confirmation

- Rides can be booked via the DriWE App.
- Once booked, you will receive driver and vehicle details.
- Booking confirmation depends on cab availability.



Pick-up & Drop

- The driver will arrive at the pick-up location provided in the app.
- Customers are requested to be at the pick-up point at the scheduled time.



Ride Timelines

- ETA may vary due to traffic, weather or other conditions.



Fare & Charges

Fares are calculated based on:

- Base fare
- Distance travelled
- Dynamic pricing
- Toll or parking charges



Cancellation Policy

- Rides can be cancelled before the driver reaches the pick-up point at no cost.
- Cancellation charges may apply after driver arrival.



Passenger Responsibilities

- Ensure accurate pick-up and drop locations
- Wear seatbelts
- Do not carry restricted items
- Respect drivers



Safety & Tracking

- All rides are GPS tracked
- Ride details can be shared with family or friends
- Emergency support is available



Liability

DriWE is not responsible for delays due to traffic, natural disasters or government restrictions.



Customer Support

+91 8669888996  
hello@driwe.in
`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Terms & Conditions</Text>
        <Text style={styles.text}>{termsText}</Text>
      </View>
    </ScrollView>
  );
}