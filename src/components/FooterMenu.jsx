import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FooterMenu = () => {
  const handlePress = (screenName) => {
    console.log(`Navigating to ${screenName}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress("Dashboard")}>
      <Entypo name="wallet" size={24} color="#C3F53C" />
              <Text style={styles.labelDash}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress("Gastos")}>
      <FontAwesome name="exchange" size={24} color="white" />
              <Text style={styles.label}>Exchange</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress("Notificaciones")}>
      <MaterialIcons name="room-service" size={24} color="white" />
              <Text style={styles.label}>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress("Contacto")}>
      <AntDesign name="creditcard" size={24} color="white" />
              <Text style={styles.label}>Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#132A23',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    marginBottom: 5,
  },
  label: {
    color: 'white',
  },
  labelDash: {
    color: '#C3F53C',
  }
});

export default FooterMenu;
