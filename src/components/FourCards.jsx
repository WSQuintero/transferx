import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import useLoadFonts from '../customHooks/useLoadFonts';

const FourCards = ({ img, imgTwo, imgThree, imgFour }) => {
  const fontsLoaded=useLoadFonts()

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/DSW.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.card}>
        <Image
          source={require("../../assets/hw.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.card}>
        <Image
          source={require("../../assets/madden.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.card}>
        <Image
          source={require("../../assets/ZARA.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '22%', // Adjust as needed
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100, // Adjust as needed
  },
});

export default FourCards;
