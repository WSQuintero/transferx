import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FooterMenu = () => {
  const handlePress = (screenName) => {
    console.log(`Navigating to ${screenName}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress("Dashboard")}>
        <Image source={require('../../assets/icons/dashboard.png')} style={styles.icon} />
        <Text style={styles.labelDash}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress("Gastos")}>
        <Image source={require('../../assets/icons/expenses.png')} style={styles.icon} />
        <Text style={styles.label}>Expenses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress("Notificaciones")}>
        <Image source={require('../../assets/icons/notifications.png')} style={styles.icon} />
        <Text style={styles.label}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress("Contacto")}>
        <Image source={require('../../assets/icons/contact.png')} style={styles.icon} />
        <Text style={styles.label}>Contact</Text>
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
