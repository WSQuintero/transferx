import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HeaderDashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.profileCircle}>
          <Image
            source={require('../../assets/image3.png')} // Ruta de tu imagen de perfil
            style={styles.profileImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Good Morning!</Text>
          <Text style={styles.nameText}>Mario C.</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.roundedContainer}>
          <View style={styles.roundedInnerContainer}>
            <View style={styles.circleSmall}></View>
            <Text style={styles.amountText}>$123,345.23</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop:20
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginRight: 10,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft:10
  },
  greetingText: {
    fontSize: 13,
    color:"white"
  },
  nameText: {
    fontSize: 18,
    color:"white",
    marginTop:5

  },
  rightContainer: {
    alignItems: 'center',
  },
  roundedContainer: {
    width: 130,
    height:40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 5,
    justifyContent:"center",
    alignItems:"center"
  },
  roundedInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleSmall: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#B4E97D',
    marginRight: 5,
  },
  amountText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default HeaderDashboard;
