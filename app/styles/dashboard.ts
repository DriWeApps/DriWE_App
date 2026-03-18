import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const dashboardStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingTop: 40
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative"
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center"
  },

  notificationButton: {
    position: "absolute",
    right: 0,
    top: 20
  },

  menuButton: {
    position: "absolute",
    left: 0,
    top: 20
  },

  headerIcon: {
    fontSize: 26,
    fontWeight: "bold"
  },

  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },

  bookRideButton: {
    backgroundColor: "#F4C21B",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    alignItems: "center"
  },

  courierButton: {
    backgroundColor: "#5E35B1",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    alignItems: "center"
  },

  underlineTitle: {
    textDecorationLine: "underline",
    textDecorationColor: "black"
  },

  topButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  box: {
    width: "48%",
    backgroundColor: "#FFF8DC",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3
  },

  vehicleImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 8
  },

  boxText: {
    fontSize: 16,
    fontWeight: "600"
  },

  form: {
    marginTop: 20
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    elevation: 2
  },

  button: {
    marginTop: 10,
    backgroundColor: "#FFBF00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  backButton: {
    backgroundColor: "#6c757d"
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },

  footer: {
    marginTop: 5,
    alignItems: "center",
    marginBottom: 5
  },

  banner: {
    width: screenWidth - 40,
    height: 140,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: "cover"
  },

  contactContainer: {
    marginTop: 3,
    width: "100%"
  },

  contactImage: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    resizeMode: "contain"
  },

  /* BOOKING SCREEN */

  bookingContainer: {
    flex: 1,
    marginTop: 10
  },

  locationBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 10
  },

  map: {
    flex: 1,
    borderRadius: 10
  },

  confirmButton: {
    backgroundColor: "#F4C21B",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10
  },

  confirmText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  },

  bookingHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },

  backArrow: {
    padding: 8
  },

  backIcon: {
    fontSize: 26,
    fontWeight: "bold"
  },

  bookingTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },

  locationCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    elevation: 4,
    marginBottom: 10
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center"
  },

  greenDot: {
    color: "green",
    fontSize: 20,
    marginRight: 10
  },

  redDot: {
    color: "red",
    fontSize: 20,
    marginRight: 10
  },

  locationInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10
  },

  dottedLine: {
    borderLeftWidth: 2,
    borderStyle: "dashed",
    borderColor: "#999",
    height: 25,
    marginLeft: 8,
    marginVertical: 5
  },
  locationDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },

  locationIcon: {
    fontSize: 18,
    marginRight: 6
  },

  locationText: {
    fontSize: 15,
    fontWeight: "500"
  },

  stickyNotification: {
    position: "absolute",
    top: 0, // change to bottom: 0 if you want bottom
    width: "50%",
    height: 50,
    backgroundColor: "#cd141a",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 999,
  },

  notificationText: {
    color: "#fff",
    fontSize: 14,
  },

  closeBtn: {
    color: "#fff",
    fontSize: 18,
  },

});