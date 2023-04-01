import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function Header() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileContent}>
          <Image
            source={{
              uri: 'https://cdn.discordapp.com/attachments/1059425565330911284/1090778821386567710/317769461_531223468937840_7323651060704758280_n_1.jpg',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.message}>Your Library</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Image style={styles.icon} source={{ uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1091231874363424828/search_2.png" }} />
          <Image style={styles.icon} source={{ uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1091232330686935120/plus_2.png" }} />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <View style={[styles.filterButton]}>
          <Text style={styles.filterText}>Artists</Text>
        </View>
        <View style={[styles.filterButton]}>
          <Text style={styles.filterText}>Podcasts & Shows</Text>
        </View>
        <View style={[styles.filterButton]}>
          <Text style={styles.filterText}>Playlists</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 187,
    paddingTop: 45,
    paddingLeft: 15,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
    justifyContent: 'space-between', // Align profileContent and iconsContainer to the left and right ends, respectively
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 25,
    marginRight: 10,
  },
  message: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 22,
    color: '#fff',
    paddingLeft: 10,
    marginLeft: -6,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  icon: {
    width: 26,
    height: 26,
    marginLeft: 14,
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: 22,
    alignItems: 'flex-start', // Align items to the left
    marginLeft: -6, // Move the filter container to the left
  },
  filterButton: {
    borderWidth: 0.4,
    borderColor: '#fff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 8,
  },
  filterText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#fff',
  },
});


