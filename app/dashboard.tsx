import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";

import Menu from "./menu";
import { dashboardStyles as styles } from "./styles/dashboard";

const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {

  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [locationName, setLocationName] = useState("");

  const [showNotification, setShowNotification] = useState(true);

  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);

  const [region, setRegion] = useState<Region | null>(null);

  const [dropLocation, setDropLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  // ✅ FIXED: moved inside component
  const [routeCoords, setRouteCoords] = useState<
    { latitude: number; longitude: number }[]
  >([]);

  const scrollRef = useRef<ScrollView>(null);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    require("../assets/images/DriWE-Banner.jpeg"),
    require("../assets/images/DriWE-Banner.jpeg"),
    require("../assets/images/DriWE-Banner.jpeg"),
    require("../assets/images/DriWE-Banner.jpeg"),
  ];

  /* ================= BANNER AUTO SCROLL ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentBanner + 1;

      if (nextIndex >= banners.length) nextIndex = 0;

      scrollRef.current?.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });

      setCurrentBanner(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentBanner]);

  /* ================= LIVE LOCATION ================= */

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission denied", "Allow location access");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      setLocation(currentLocation.coords);

      const userRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setRegion(userRegion);

      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (address.length > 0) {
        const addr = address[0];

        const fullAddress =
          (addr.name ?? "") + " " +
          (addr.street ?? "") + ", " +
          (addr.district ?? "") + ", " +
          (addr.city ?? "") + ", " +
          (addr.region ?? "") + " " +
          (addr.postalCode ?? "") + ", " +
          (addr.country ?? "");

        setLocationName(fullAddress);
        setPickup(fullAddress);
      }
    };

    getLocation();
  }, []);

  /* ================= ROUTE LINE ================= */

  useEffect(() => {
    if (location && dropLocation) {
      setRouteCoords([
        {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        {
          latitude: dropLocation.latitude,
          longitude: dropLocation.longitude,
        },
      ]);
    }
  }, [location, dropLocation]);

  /* ================= DROP LOCATION ================= */

  const handleDropChange = async (text: string) => {
    setDrop(text);

    if (text.length < 5) return;

    try {
      const geocode = await Location.geocodeAsync(text);

      if (geocode.length > 0) {
        const { latitude, longitude } = geocode[0];

        setDropLocation({
          latitude,
          longitude,
        });
      }
    } catch (err) {
      console.log("Geocode error", err);
    }
  };

  const handleVehicleSelect = (vehicle: string) => {
    setSelectedVehicle(vehicle);
  };

  const handleSubmit = () => {
    if (!pickup || !drop) {
      alert("Please enter both pickup and drop locations");
      return;
    }

    Alert.alert(
      "Ride Confirmed",
      `Your ${selectedVehicle} driver will reach ${pickup} in 5 min`
    );
  };

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.container}>

        {!selectedVehicle ? (

          <>
            {/* HEADER */}
            <View style={styles.header}>
              <TouchableOpacity style={styles.notificationButton}>
                <Text style={styles.headerIcon}>🔔</Text>
              </TouchableOpacity>

              <Image
                source={require("../assets/images/DriWE-Logo.png")}
                style={styles.logo}
              />

              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setMenuOpen(true)}
              >
                <Text style={styles.headerIcon}>☰</Text>
              </TouchableOpacity>
            </View>

            {showNotification && (
              <View style={styles.stickyNotification}>
                <Text style={styles.notificationText}>
                  🚗 Your ride is arriving soon!
                </Text>

                <TouchableOpacity onPress={() => setShowNotification(false)}>
                  <Text style={styles.closeBtn}>✖</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* LOCATION */}
            <View style={styles.locationDisplay}>
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.locationText}>
                {locationName || "Detecting location..."}
              </Text>
            </View>

            {/* TOP BUTTONS */}
            <View style={styles.topButtons}>
              <TouchableOpacity style={styles.bookRideButton}>
                <Text style={styles.topButtonText}>Book Ride</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.courierButton}
                onPress={() => router.push("/dashboardc")}
              >
                <Text style={styles.topButtonText}>Courier</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.title, styles.underlineTitle]}>
              Pick the Perfect Vehicle
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* VEHICLES */}
              <View style={styles.grid}>
                {[
                  ["Auto", require("../assets/images/Auto.png"), "Rikshaw"],
                  ["Eco", require("../assets/images/Eco.png"), "Eco"],
                  ["Mini Bus", require("../assets/images/Bus.png"), "Mini Bus"],
                  ["Sedan", require("../assets/images/Car.png"), "Sedan"],
                  ["SUV", require("../assets/images/SUV.png"), "SUV"],
                  ["Premium", require("../assets/images/Premium.png"), "Premium"],
                ].map(([type, img, label], i) => (
                  <TouchableOpacity
                    key={i}
                    style={styles.box}
                    onPress={() => handleVehicleSelect(type as string)}
                  >
                    <Image source={img} style={styles.vehicleImage} />
                    <Text style={styles.boxText}>{label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* BANNER */}
              <View style={styles.footer}>
                <ScrollView
                  ref={scrollRef}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                >
                  {banners.map((banner, index) => (
                    <Image key={index} source={banner} style={styles.banner} />
                  ))}
                </ScrollView>
              </View>

              {/* CONTACT */}
              <View style={styles.contactContainer}>
                <TouchableOpacity onPress={() => router.push("/contact")}>
                  <Image
                    source={require("../assets/images/ContactUs Photo.jpeg")}
                    style={styles.contactImage}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>

        ) : (

          /* BOOKING SCREEN */
          <View style={{ flex: 1 }}>

            <View style={styles.bookingHeader}>
              <TouchableOpacity onPress={() => setSelectedVehicle(null)}>
                <Text style={styles.backIcon}>←</Text>
              </TouchableOpacity>

              <Text style={styles.bookingTitle}>
                Book {selectedVehicle}
              </Text>
            </View>

            <View style={styles.locationCard}>
              <View style={styles.inputRow}>
                <Text style={styles.greenDot}>●</Text>
                <TextInput
                  style={styles.locationInput}
                  value={pickup}
                  onChangeText={setPickup}
                />
              </View>

              <View style={styles.dottedLine} />

              <View style={styles.inputRow}>
                <Text style={styles.redDot}>●</Text>
                <TextInput
                  style={styles.locationInput}
                  placeholder="Drop To"
                  value={drop}
                  onChangeText={handleDropChange}
                />
              </View>
            </View>

            <MapView
              style={styles.map}
              showsUserLocation
              region={region ?? undefined}
            >

              {location && (
                <Marker
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                  title="Pickup Location"
                />
              )}

              {dropLocation && (
                <Marker
                  coordinate={dropLocation}
                  pinColor="green"
                  title="Drop Location"
                />
              )}

              {/* ✅ ROUTE LINE */}
              {routeCoords.length > 0 && (
                <Polyline
                  coordinates={routeCoords}
                  strokeWidth={4}
                  strokeColor="#007AFF"
                />
              )}

            </MapView>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleSubmit}
            >
              <Text style={styles.confirmText}>
                📍 Confirm & Proceed
              </Text>
            </TouchableOpacity>

          </View>

        )}

      </View>

      {menuOpen && (
        <Menu closeMenu={() => setMenuOpen(false)} />
      )}

    </View>
  );
}

