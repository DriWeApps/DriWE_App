import { ScrollView, Text, View } from "react-native";
import { pageStyles as styles } from "./styles/pages";

export default function About() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.title}>About DRIWE INFOTECH</Text>

            <Text style={styles.sectionTitle}>Redefining Your Journey</Text>
            <View style={styles.card}>


                <Text style={styles.text}>
                    Welcome to <Text style={styles.bold}>DRIWE INFOTECH</Text>.
                    In today’s fast-paced world, getting from point A to point B should
                    be seamless and convenient. DriWE provides an innovative ride
                    platform that connects passengers with drivers quickly, safely,
                    and reliably.
                </Text>

                <Text style={styles.text}>
                    Whether you are commuting to work, traveling across the city,
                    or transporting goods, DriWE puts dependable transportation
                    right at your fingertips.
                </Text>
            </View>

            {/* KEY FEATURES */}
            <Text style={styles.sectionTitle}>Key Features</Text>

            <View style={styles.card}>
                <Text style={styles.feature}> Effortless Booking</Text>
                <Text style={styles.feature}> Large Driver Network</Text>
                <Text style={styles.feature}> Real-Time Ride Tracking</Text>
                <Text style={styles.feature}> Flexible Payment Options</Text>
                <Text style={styles.feature}> 24/7 Customer Support</Text>
            </View>

            {/* WHY CHOOSE US */}
            <Text style={styles.sectionTitle}>Why Choose Us</Text>

            <View style={styles.card}>
                <Text style={styles.pointTitle}>Reliability</Text>
                <Text style={styles.text}>
                    Count on us for punctual and dependable transportation services
                    available 24/7.
                </Text>

                <Text style={styles.pointTitle}>Convenience</Text>
                <Text style={styles.text}>
                    Book rides anytime, anywhere with just a few taps. Fast,
                    simple, and always ready when you are.
                </Text>

                <Text style={styles.pointTitle}>Safety</Text>
                <Text style={styles.text}>
                    Your safety is our priority. All drivers undergo thorough
                    background checks and follow strict safety standards.
                </Text>

                <Text style={styles.pointTitle}>Affordability</Text>
                <Text style={styles.text}>
                    Competitive fares and transparent pricing ensure you get the
                    best value for your money.
                </Text>
            </View>

        </ScrollView>
    );
}