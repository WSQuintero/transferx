import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useLoadFonts from '../customHooks/useLoadFonts';

const CardHistoryChat = ({ title, date, time }) => {
  const fontsLoaded=useLoadFonts()

  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
    width:"100%"
  },
  title: {
    fontFamily:"Roboto",
    fontSize: 12,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
  date: {
    fontSize: 14,
    color: '#888',
    alignSelf: 'flex-start', // Alinea la fecha a la izquierda
  },
});

export default CardHistoryChat;
