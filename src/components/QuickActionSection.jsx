import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const QuickActionSection = () => {
  const handlePress = (action) => {
    console.log(`Navigating to ${action}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Action</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("Recharge")}>
          <Image source={require('../../assets/icons/recharge.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("Transfer")}>
          <Image source={require('../../assets/icons/transfer.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("Pay")}>
          <Image source={require('../../assets/icons/pay.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("Withdraw")}>
          <Image source={require('../../assets/icons/withdraw.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("More")}>
          <Image source={require('../../assets/icons/more.png')} style={styles.icon} />
          <Text style={styles.buttonText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop:20,
    marginLeft:10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"white"
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor:"#132A23",
    padding:10,
    borderRadius:50,
    width: 63,
    height: 63,
    justifyContent:"center",
    alignItems:"center"
  },
  icon: {
    width: 15,
    height: 15,
  },
  buttonText: {
    color: 'white',
    fontSize:10
  },
});

export default QuickActionSection;
