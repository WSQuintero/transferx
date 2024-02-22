import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de tener instalado @expo/vector-icons
import * as ImagePicker from 'expo-image-picker';
import useLoadFonts from '../customHooks/useLoadFonts';

const UploadButtons = ({ selectedImage, setSelectedImage }) => {
  const fontsLoaded=useLoadFonts()

  const handleGalleryUpload = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera roll is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });


      if (!result.cancelled) {
        setSelectedImage(result.assets[0].uri);
      } else {
        console.log('Cancelled');
      }
    } catch (error) {
      console.log('Error while picking an image from gallery:', error);
    }
  };

  const handleSnapPhoto = () => {
    // Lógica para tomar una foto
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleGalleryUpload}>
        <FontAwesome name="photo" size={40} color="gray" />
        <Text style={styles.text}>Gallery Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSnapPhoto}>
        <FontAwesome name="camera" size={40} color="gray" />
        <Text style={styles.text}>Snap a Photo</Text>
      </TouchableOpacity>
      {selectedImage && (
        <View style={styles.imagePreview}>
          <Image source={{ uri: selectedImage }} style={styles.previewImage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'gray',
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});

export default UploadButtons;
