import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { menuStyles as styles } from "./styles/menu";

type MenuProps = {
  closeMenu: () => void;
};

export default function Menu({ closeMenu }: MenuProps) {

  const router = useRouter();

  const navigate = (route: any) => {
    closeMenu();
    router.push(route);
  };

  return (
    <View style={styles.overlay}>

      {/* MENU PANEL */}
      <View style={styles.menuContainer}>

        <Text style={styles.title}>Menu</Text>

        <ScrollView showsVerticalScrollIndicator={false}>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/profile")}>
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/booking")}>
            <Text style={styles.text}>My Bookings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/about")}>
            <Text style={styles.text}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/terms")}>
            <Text style={styles.text}>Terms & Conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/shipping")}>
            <Text style={styles.text}>Shipping Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/privacy")}>
            <Text style={styles.text}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/contact")}>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/cancellation")}>
            <Text style={styles.text}>Cancellation Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/refund")}>
            <Text style={styles.text}>Refund Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("/faq")}>
            <Text style={styles.text}>FAQ</Text>
          </TouchableOpacity>

          {/* LOGOUT */}
          <TouchableOpacity
            style={styles.logout}
            onPress={() => {
              closeMenu();
              router.replace("/login");
            }}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>

      {/* OUTSIDE AREA TO CLOSE MENU */}
      <TouchableOpacity
        style={styles.remainingArea}
        onPress={closeMenu}
      />

    </View>
  );
}