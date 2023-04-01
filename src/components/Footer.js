import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function Footer() {
  const [fontsLoaded] = useFonts({ Poppins_500Medium });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['transparent', '#050505', '#050505']} style={styles.gradient}>
        <View style={styles.iconRow}>
          <View style={[styles.iconContainer, { flex: 2 }]}>
            <Image style={styles.icon} source={{ uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1091138650101788772/home_4.png" }} />
            <Text style={styles.text}>Home</Text>
          </View>
          <View style={[styles.iconContainer, { flex: 1 }]}>
            <Image style={styles.icon} source={{ uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1091138056406437948/search_1.png" }} />
            <Text style={styles.text}>Search</Text>
          </View>
          <View style={[styles.iconContainer, { flex: 2 }]}>
            <Image style={styles.icon} source={{ uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1090794612798537790/bookmark.png" }} />
            <Text style={styles.text}>Your Library</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    height: 60,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
  },  
  icon: {
    width: 28,
    height: 28,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 2, 
  },  
  text: {
    color: "#808080",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
    marginTop: 5,
  },
});
