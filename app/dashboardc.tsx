// import { useRouter } from "expo-router";
// import { useEffect, useRef, useState } from "react";
// import {
//     Alert,
//     Dimensions,
//     Image,
//     ScrollView,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from "react-native";

// import * as Location from "expo-location";
// import MapView, { Marker } from "react-native-maps";

// import Menu from "./menu";
// import { dashboardStyles as styles } from "./styles/dashboardc";

// const screenWidth = Dimensions.get("window").width;

// export default function Dashboard() {

//   const router = useRouter();

//   const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");

//   const [menuVisible, setMenuVisible] = useState(false);

//   const [currentLocation, setCurrentLocation] = useState<any>(null);
//   const [currentAddress, setCurrentAddress] = useState("");

//   const [dropLocation, setDropLocation] = useState<any>(null);

//   const scrollRef = useRef<ScrollView>(null);
//   const [currentBanner, setCurrentBanner] = useState(0);

//   const banners = [
//     require("../assets/images/DriWE-Banner.jpeg"),
//     require("../assets/images/DriWE-Banner.jpeg"),
//     require("../assets/images/DriWE-Banner.jpeg"),
//   ];

//   /* ---------------- GET CURRENT LOCATION ---------------- */

//   useEffect(() => {
//     (async () => {

//       let { status } = await Location.requestForegroundPermissionsAsync();

//       if (status !== "granted") {
//         Alert.alert("Permission denied", "Allow location access");
//         return;
//       }

//       const location = await Location.getCurrentPositionAsync({});

//       setCurrentLocation(location.coords);

//       const address = await Location.reverseGeocodeAsync({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });

//       if (address.length > 0) {
//         const a = address[0];

//         setCurrentAddress(
//           `${a.name || ""}, ${a.street || ""}, ${a.city || ""}, ${a.region || ""}, ${a.postalCode || ""}, ${a.country || ""}`
//         );

//         setPickup(`${a.name || ""}, ${a.street || ""}, ${a.city || ""}`);
//       }

//     })();
//   }, []);

//   /* ---------------- BANNER AUTO SCROLL ---------------- */

//   useEffect(() => {

//     const interval = setInterval(() => {

//       let nextIndex = currentBanner + 1;

//       if (nextIndex >= banners.length) {
//         nextIndex = 0;
//       }

//       scrollRef.current?.scrollTo({
//         x: nextIndex * screenWidth,
//         animated: true,
//       });

//       setCurrentBanner(nextIndex);

//     }, 3000);

//     return () => clearInterval(interval);

//   }, [currentBanner]);

//   /* ---------------- VEHICLE SELECT ---------------- */

//   const handleVehicleSelect = (vehicle: string) => {
//     setSelectedVehicle(vehicle);
//   };

//   /* ---------------- DROP LOCATION SEARCH ---------------- */

//   const searchDropLocation = async (text: string) => {

//     setDrop(text);

//     if (text.length > 3) {

//       const geocode = await Location.geocodeAsync(text);

//       if (geocode.length > 0) {

//         setDropLocation({
//           latitude: geocode[0].latitude,
//           longitude: geocode[0].longitude,
//         });

//       }

//     }

//   };

//   const handleSubmit = () => {

//     if (!pickup || !drop) {
//       alert("Please enter both pickup and drop locations");
//       return;
//     }

//     Alert.alert(
//       "Courier Booked",
//       `Your ${selectedVehicle} will reach ${pickup} in 5 min`
//     );

//   };

//   return (

//     <View style={{ flex: 1 }}>

//       <View style={styles.container}>

//         {!selectedVehicle ? (

//           <>
//             {/* HEADER */}
//             <View style={styles.header}>

//               <TouchableOpacity style={styles.notificationButton}>
//                 <Text style={styles.headerIcon}>🔔</Text>
//               </TouchableOpacity>

//               <Image
//                 source={require("../assets/images/DriWE-Logo.png")}
//                 style={styles.logo}
//               />

//               <TouchableOpacity
//                 style={styles.menuButton}
//                 onPress={() => setMenuVisible(true)}
//               >
//                 <Text style={styles.headerIcon}>☰</Text>
//               </TouchableOpacity>

//             </View>

//             {/* CURRENT LOCATION */}
//             <View style={styles.locationBox}>

//               <Text style={styles.locationTitle}>📍 Current Location</Text>

//               <Text style={styles.locationText}>
//                 {currentAddress || "Detecting location..."}
//               </Text>

//             </View>

//             {/* TOP BUTTONS */}
//             <View style={styles.topButtons}>

//               <TouchableOpacity
//                 style={styles.bookRideButton}
//                 onPress={() => router.push("/dashboard")}
//               >
//                 <Text style={styles.topButtonText}>Book Ride</Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.courierButton}>
//                 <Text style={styles.topButtonText}>Courier</Text>
//               </TouchableOpacity>

//             </View>

//             <Text style={[styles.title, styles.underlineTitle]}>
//               Pick Courier Vehicle
//             </Text>

//             <ScrollView showsVerticalScrollIndicator={false}>

//               {/* VEHICLE GRID */}
//               <View style={styles.grid}>

//                 <TouchableOpacity
//                   style={styles.box}
//                   onPress={() => handleVehicleSelect("Bike")}
//                 >
//                   <Image
//                     source={require("../assets/images/Bike-image.png")}
//                     style={styles.vehicleImage}
//                   />
//                   <Text style={styles.boxText}>Bike</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.box}
//                   onPress={() => handleVehicleSelect("Truck")}
//                 >
//                   <Image
//                     source={require("../assets/images/Mini-Truck.png")}
//                     style={styles.vehicleImage}
//                   />
//                   <Text style={styles.boxText}>Truck</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.box}
//                   onPress={() => handleVehicleSelect("Mini Truck")}
//                 >
//                   <Image
//                     source={require("../assets/images/Mini-Truck.png")}
//                     style={styles.vehicleImage}
//                   />
//                   <Text style={styles.boxText}>Mini Truck</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.box}
//                   onPress={() => handleVehicleSelect("Tempo")}
//                 >
//                   <Image
//                     source={require("../assets/images/Tempo.png")}
//                     style={styles.vehicleImage}
//                   />
//                   <Text style={styles.boxText}>Tempo</Text>
//                 </TouchableOpacity>

//               </View>

//               {/* BANNER */}
//               <View style={styles.footer}>

//                 <ScrollView
//                   ref={scrollRef}
//                   horizontal
//                   pagingEnabled
//                   showsHorizontalScrollIndicator={false}
//                 >
//                   {banners.map((banner, index) => (
//                     <Image
//                       key={index}
//                       source={banner}
//                       style={styles.banner}
//                     />
//                   ))}
//                 </ScrollView>

//               </View>

//               {/* CONTACT US IMAGE (FIXED POSITION) */}
//               <View style={styles.contactContainer}>

//                 <TouchableOpacity onPress={() => router.push("/contact")}>

//                   <Image
//                     source={require("../assets/images/ContactUs Photo.jpeg")}
//                     style={styles.contactImage}
//                   />

//                 </TouchableOpacity>

//               </View>

//             </ScrollView>

//           </>

//         ) : (

//           <View style={{ flex: 1 }}>

//             {/* BOOKING HEADER */}
//             <View style={styles.header}>

//               <TouchableOpacity
//                 style={styles.menuButton}
//                 onPress={() => setSelectedVehicle(null)}
//               >
//                 <Text style={styles.headerIcon}>←</Text>
//               </TouchableOpacity>

//               <Text style={styles.title}>
//                 Book {selectedVehicle}
//               </Text>

//             </View>

//             {/* INPUTS */}
//             <View style={styles.form}>

//               <TextInput
//                 style={styles.input}
//                 value={pickup}
//                 placeholder="Pickup Location"
//                 onChangeText={setPickup}
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Drop Location"
//                 value={drop}
//                 onChangeText={searchDropLocation}
//               />

//             </View>

//             {/* MAP */}
//             {currentLocation && (

//               <MapView
//                 style={{ flex: 1 }}
//                 initialRegion={{
//                   latitude: currentLocation.latitude,
//                   longitude: currentLocation.longitude,
//                   latitudeDelta: 0.05,
//                   longitudeDelta: 0.05,
//                 }}
//                 showsUserLocation
//               >

//                 <Marker
//                   coordinate={{
//                     latitude: currentLocation.latitude,
//                     longitude: currentLocation.longitude,
//                   }}
//                   title="Pickup Location"
//                 />

//                 {dropLocation && (
//                   <Marker
//                     coordinate={dropLocation}
//                     title="Drop Location"
//                     pinColor="green"
//                   />
//                 )}

//               </MapView>

//             )}

//             {/* CONFIRM BUTTON */}
//             <TouchableOpacity
//               style={styles.button}
//               onPress={handleSubmit}
//             >
//               <Text style={styles.buttonText}>
//                 Confirm & Proceed
//               </Text>
//             </TouchableOpacity>

//           </View>

//         )}

//       </View>

//       {menuVisible && (
//         <Menu closeMenu={() => setMenuVisible(false)} />
//       )}

//     </View>
//   );
// }

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

import * as Location from "expo-location";
import MapView, { Marker, Region } from "react-native-maps";

import Menu from "./menu";
import { dashboardStyles as styles } from "./styles/dashboardc";

const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {

  const router = useRouter();

  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [menuVisible, setMenuVisible] = useState(false);

  const [locationName, setLocationName] = useState("");
  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);

  const [region, setRegion] = useState<Region | null>(null);

  const [dropLocation, setDropLocation] = useState<any>(null);

  const scrollRef = useRef<ScrollView>(null);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    require("../assets/images/DriWE-Banner.jpeg"),
    require("../assets/images/DriWE-Banner.jpeg"),
    require("../assets/images/DriWE-Banner.jpeg"),
  ];

  /* ---------------- GET CURRENT LOCATION ---------------- */

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
          (addr.city ?? "") + ", " +
          (addr.region ?? "");

        setLocationName(fullAddress);
        setPickup(fullAddress);
      }

    };

    getLocation();

  }, []);

  /* ---------------- BANNER AUTO SCROLL ---------------- */

  useEffect(() => {

    const interval = setInterval(() => {

      let nextIndex = currentBanner + 1;

      if (nextIndex >= banners.length) nextIndex = 0;

      scrollRef.current?.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });

      setCurrentBanner(nextIndex);

    }, 4000);

    return () => clearInterval(interval);

  }, [currentBanner]);

  /* ---------------- VEHICLE SELECT ---------------- */

  const handleVehicleSelect = (vehicle: string) => {
    setSelectedVehicle(vehicle);
  };

  /* ---------------- DROP LOCATION SEARCH ---------------- */

  const searchDropLocation = async (text: string) => {

    setDrop(text);

    if (text.length < 4) return;

    const geocode = await Location.geocodeAsync(text);

    if (geocode.length > 0) {

      setDropLocation({
        latitude: geocode[0].latitude,
        longitude: geocode[0].longitude,
      });

    }

  };

  const handleSubmit = () => {

    if (!pickup || !drop) {
      alert("Please enter pickup and drop location");
      return;
    }

    Alert.alert(
      "Courier Booked",
      `Your ${selectedVehicle} courier will reach in 5 minutes`
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
                onPress={() => setMenuVisible(true)}
              >
                <Text style={styles.headerIcon}>☰</Text>
              </TouchableOpacity>

            </View>

            {/* LOCATION DISPLAY */}

            <View style={styles.locationBox}>

              <Text style={styles.locationTitle}>
                📍 Current Location
              </Text>

              <Text style={styles.locationText}>
                {locationName || "Detecting location..."}
              </Text>

            </View>

            {/* TOP BUTTONS */}

            <View style={styles.topButtons}>

              <TouchableOpacity
                style={styles.bookRideButton}
                onPress={() => router.push("/dashboard")}
              >
                <Text style={styles.topButtonText}>Book Ride</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.courierButton}>
                <Text style={styles.topButtonText}>Courier</Text>
              </TouchableOpacity>

            </View>

            <Text style={[styles.title, styles.underlineTitle]}>
              Pick Courier Vehicle
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>

              {/* VEHICLES */}

              <View style={styles.grid}>

                <TouchableOpacity
                  style={styles.box}
                  onPress={() => handleVehicleSelect("Bike")}
                >
                  <Image
                    source={require("../assets/images/Bike-image.png")}
                    style={styles.vehicleImage}
                  />
                  <Text style={styles.boxText}>Bike</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.box}
                  onPress={() => handleVehicleSelect("Truck")}
                >
                  <Image
                    source={require("../assets/images/Mini-Truck.png")}
                    style={styles.vehicleImage}
                  />
                  <Text style={styles.boxText}>Truck</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.box}
                  onPress={() => handleVehicleSelect("Mini Truck")}
                >
                  <Image
                    source={require("../assets/images/Mini-Truck.png")}
                    style={styles.vehicleImage}
                  />
                  <Text style={styles.boxText}>Mini Truck</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.box}
                  onPress={() => handleVehicleSelect("Tempo")}
                >
                  <Image
                    source={require("../assets/images/Tempo.png")}
                    style={styles.vehicleImage}
                  />
                  <Text style={styles.boxText}>Tempo</Text>
                </TouchableOpacity>

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
                    <Image
                      key={index}
                      source={banner}
                      style={styles.banner}
                    />
                  ))}

                </ScrollView>

              </View>

              {/* CONTACT */}

              <View style={styles.contactContainer}>

                <TouchableOpacity
                  onPress={() => router.push("/contact")}
                >

                  <Image
                    source={require("../assets/images/ContactUs Photo.jpeg")}
                    style={styles.contactImage}
                  />

                </TouchableOpacity>

              </View>

            </ScrollView>

          </>

        ) : (

          /* ================= BOOKING SCREEN ================= */

          <View style={{ flex: 1 }}>

            <View style={styles.header}>

              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setSelectedVehicle(null)}
              >
                <Text style={styles.headerIcon}>←</Text>
              </TouchableOpacity>

              <Text style={styles.title}>
                Book {selectedVehicle}
              </Text>

            </View>

            {/* LOCATION CARD */}

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
                  onChangeText={searchDropLocation}
                />
              </View>

            </View>

            {/* MAP */}

            {region && (

              <MapView
                style={styles.map}
                showsUserLocation
                region={region}
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

              </MapView>

            )}

            {/* CONFIRM BUTTON */}

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleSubmit}
            >

              <Text style={styles.confirmText}>
                📦 Confirm Courier
              </Text>

            </TouchableOpacity>

          </View>

        )}

      </View>

      {menuVisible && (
        <Menu closeMenu={() => setMenuVisible(false)} />
      )}

    </View>
  );
}