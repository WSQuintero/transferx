import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import useLoadFonts from '../customHooks/useLoadFonts';

const windowWidth = Dimensions.get('window').width;

const SliderWithArrows = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const fontsLoaded=useLoadFonts()

  const images = [
    require('../../assets/image3.png'),
    require('../../assets/iaphoto.png'),
    require('../../assets/image4.png'),
  ];

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    flatListRef.current.scrollToIndex({ animated: true, index: newIndex });
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    flatListRef.current.scrollToIndex({ animated: true, index: newIndex });
  };

  const renderItem = ({ item, index }) => {
    let size = 60;
    if (index === currentIndex) {
      size = 100;
    } else if (index === (currentIndex - 1 + images.length) % images.length || index === (currentIndex + 1) % images.length) {
      size = 60;
    }
    return (
      <View style={styles.imageContainer}>
        <Image source={item} style={[styles.image, { width: size, height: size }]} />
      </View>
    );
  };

  useEffect(() => {
    // Desplaza la lista a la posición inicial cuando el componente se monta
    flatListRef.current.scrollToIndex({ animated: false, index: 1 });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowContainer} onPress={handlePrevious}>
        <Text style={styles.arrow}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.sliderContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          initialScrollIndex={1}
          getItemLayout={(data, index) => ({
            length: windowWidth,
            offset: windowWidth * index,
            index,
          })}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <TouchableOpacity style={[styles.arrowContainer, styles.arrowRight]} onPress={handleNext}>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 20,
  },
  sliderContainer: {
    flex: 1,
    height: '100%',
  },
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  imageContainer: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: windowWidth / 2,
  },
  arrowContainer: {
    paddingHorizontal: 20,
  },
  arrow: {
    fontSize: 40,
    color: 'black',
  },
  arrowRight: {
    right: 0,
  },
});

export default SliderWithArrows;
