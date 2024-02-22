import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useLoadFonts from '../customHooks/useLoadFonts';

const BackButton = () => {
  const navigation = useNavigation();
  const fontsLoaded=useLoadFonts()

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons name="ios-arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#2d2ade',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButton;
