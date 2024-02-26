import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useLoadFonts from '../customHooks/useLoadFonts';
import { Ionicons } from '@expo/vector-icons';

const ImageSliderFaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(Dimensions.get('window').width); // Obtener el ancho de la ventana
  const scrollViewRef = useRef(null); // Crear la referencia para el ScrollView
  const fontsLoaded=useLoadFonts()

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateDimensions); // Actualizar el ancho de la ventana al cambiar la orientación
    return () => {
      Dimensions.removeEventListener('change', updateDimensions); // Limpiar el listener cuando el componente se desmonta
    };
  }, []);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollViewRef.current.scrollTo({ x: (currentIndex - 1) * width });
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      scrollViewRef.current.scrollTo({ x: (currentIndex + 1) * width });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
      >
        <View style={[styles.slide, { backgroundColor: 'red', width }]}>
          {/* Contenido del primer slide */}
        </View>
        <View style={[styles.slide, { backgroundColor: 'green', width }]}>
          {/* Contenido del segundo slide */}
        </View>
        <View style={[styles.slide, { backgroundColor: 'blue', width }]}>
          {/* Contenido del tercer slide */}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.arrowLeft} onPress={handlePrev}>
      <AntDesign name="caretleft" size={24} color="black" />
            </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={handleNext}>
      <Ionicons name="arrow-forward-circle-outline" size={24} color="black" />
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: [{ translateY: -20 }],
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -20 }],
  },
});

export default ImageSliderFaces;
