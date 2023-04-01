import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CardView from "./src/pages/CardView";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.cardContainer}>
        <CardView />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    marginTop: 60,
    flex: 1,
  },
});
