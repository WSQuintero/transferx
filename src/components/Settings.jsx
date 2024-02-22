import React from 'react';
import { TouchableOpacity, Modal, View, StyleSheet, Text, Image } from 'react-native';
import useLoadFonts from '../customHooks/useLoadFonts';

const Settings = ({ modalSettingsVisible, setModalSettingsVisible }) => {
  const fontsLoaded=useLoadFonts()

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalSettingsVisible}
      onRequestClose={() => {
        setModalSettingsVisible(!modalSettingsVisible);
      }}
    >
      <View style={styles.modalView}>
        <TouchableOpacity
          onPress={() => {
            setModalSettingsVisible(!modalSettingsVisible);
          }}
          style={styles.menuOptionContainer}
        >
          <Image source={require('../../assets/icons/bell.png')} style={styles.menuOptionIcon} />
          <Text style={styles.menuOption}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalSettingsVisible(!modalSettingsVisible);
          }}
          style={styles.menuOptionContainer}
        >
          <Image source={require('../../assets/icons/brightnes.png')} style={styles.menuOptionIcon} />
          <Text style={styles.menuOption}>Dark Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalSettingsVisible(!modalSettingsVisible);
          }}
          style={styles.menuOptionContainer}
        >
          <Image source={require('../../assets/icons/logout.png')} style={styles.menuOptionIcon} />
          <Text style={styles.menuOption}>Logout</Text>
        </TouchableOpacity>
        {/* Agrega más opciones de menú según sea necesario */}
        <TouchableOpacity
          onPress={() => {
            setModalSettingsVisible(!modalSettingsVisible);
          }}
          style={styles.closeButton}
        >
          <Image source={require('../../assets/icons/close.png')} style={styles.closeButtonIcon} />
        </TouchableOpacity>
      </View>
    </Modal>
  );

};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  menuOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '90%', // Línea gris ocupa el 90% del ancho
    justifyContent: 'center',
    paddingVertical: 10,
  },
  menuOptionIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuOption: {
    fontSize: 16,
    textAlign: 'center',
    padding:20// Centra el texto horizontalmente
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2d2ade',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonIcon: {
    width: 24,
    height: 24,
  },
});

export default Settings;
