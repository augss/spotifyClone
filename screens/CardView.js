import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { artist } from "../src/components/ArtistInfo.js";
import { playlist } from "../src/components/PlaylistInfo.js";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

const Card = ({ musician, selectedMusician, onPress }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    setIsPlaying(!isPlaying);
    onPress(musician.name);
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: musician.pfp }} />
        <View style={styles.textContainer}>
          <Text style={[styles.artistName, { color: selectedMusician === musician.name ? "#04d24c" : "#fff" }]}>{musician.name}</Text>
          <Text style={styles.artistType}>{musician.type} {musician.owner && <Text style={styles.artistType}> • {musician.owner}</Text>}</Text>
          
        </View>
        <TouchableOpacity
          style={styles.playButton}
          onPress={handlePress}
          activeOpacity={0.1}
        >
          <Image
            style={styles.playButtonImage}
            source={{
              uri: isPlaying
                ? "https://cdn.discordapp.com/attachments/1059425565330911284/1091144779749920890/pause_2.png"
                : "https://cdn.discordapp.com/attachments/1059425565330911284/1091166657738723408/New_Project_5.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function CardView() {
  const [fontsLoaded] = useFonts({ Poppins_500Medium });
  const [selectedMusician, setSelectedMusician] = useState(null);

  if (!fontsLoaded) {
    return null;
  }

  const handleMusicianPress = (name) => {
    setSelectedMusician(name);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {artist.map((musician) => (
          <Card
            key={musician.name}
            musician={musician}
            selectedMusician={selectedMusician}
            onPress={handleMusicianPress}
          />
        ))}
        {playlist.map((information) => (
          <Card
            key={information.name}
            musician={information}
            selectedMusician={selectedMusician}
            onPress={handleMusicianPress}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 107,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: 330,
    height: 80,
    marginBottom: 2,
    borderRadius: 4,
    backgroundColor: "transparent",
    overflow: "hidden",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 3,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "space-between",
  },
  artistName: {
    fontFamily: "Poppins_500Medium",
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
    marginRight: 5,
    marginTop: 5,
  },
  artistType: {
    fontFamily: "Poppins_500Medium",
    fontWeight: "500",
    fontSize: 12,
    color: "#808080",
    marginRight: 5,
    marginBottom: 3,
    textAlign: "left",
    width: 200,
  },
  playButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  playButtonImage: {
    width: 26,
    height: 26,
    backgroundColor: "#1E1E1E",
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
  },
});

