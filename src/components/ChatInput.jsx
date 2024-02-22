import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import useLoadFonts from '../customHooks/useLoadFonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ChatInput = () => {
  const fontsLoaded=useLoadFonts()

  const handleCameraPress = () => {
    // Lógica para abrir la cámara
  };

  const handleAudioPress = () => {
    // Lógica para grabar un audio
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type Message..."
        placeholderTextColor="gray"
      />
      <TouchableOpacity style={styles.button} onPress={handleCameraPress}>
        <FontAwesome name="camera" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAudioPress}>
        <FontAwesome name="microphone" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    elevation: 2,
    marginBottom: 30
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#2d2ade',
    borderRadius: 200,
    padding: 5
  },
});

export default ChatInput;
