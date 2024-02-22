import React, { useState } from "react"
import { TouchableOpacity, Modal, View, StyleSheet, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Settings from "./Settings"
import { Image } from "react-native"
import useLoadFonts from "../customHooks/useLoadFonts"

const BurgerMenuButton = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalSettingsVisible, setModalSettingsVisible] = useState(false)
  const fontsLoaded=useLoadFonts()

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
      <Image source={require('../../assets/icons/Union.png')} style={{width: 16, height: 16}} />
    </TouchableOpacity>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <TouchableOpacity
          onPress={() => {
            // Agrega aquí la lógica para las opciones del menú
            setModalVisible(!modalVisible);
            navigation.navigate("sectionNine")
          }}
          style={styles.menuOptionContainer}
        >
          <Image source={require('../../assets/icons/forum.png')} style={styles.menuOptionIcon} />
          <Text style={styles.menuOption}>Chat History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // Agrega aquí la lógica para las opciones del menú
            setModalVisible(!modalVisible);
          }}
          style={styles.menuOptionContainer}
        >
          <Image source={require('../../assets/icons/favorite.png')} style={styles.menuOptionIcon} />
          <Text style={styles.menuOption}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // Agrega aquí la lógica para las opciones del menú
            setModalVisible(!modalVisible);
            navigation.navigate("sectionThree")
          }}
          style={styles.menuOptionContainer}
        >
          <Image source={require('../../assets/icons/user-multiple.png')} style={styles.menuOptionIcon} />
          <Text style={styles.menuOption}>Change Stylist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalSettingsVisible(true);
          }}
          style={styles.menuOptionContainer}
        >
          <Image source={require('../../assets/icons/settings.png')} style={styles.menuOptionIcon} />
          <Text style={styles.menuOption}>Settings</Text>
        </TouchableOpacity>
        {/* Agrega más opciones de menú según sea necesario */}
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={styles.closeButton}
        >
          <Image source={require('../../assets/icons/close.png')} style={styles.closeButtonIcon} />
        </TouchableOpacity>
      </View>
    </Modal>
    <Settings
      modalSettingsVisible={modalSettingsVisible}
      setModalSettingsVisible={setModalSettingsVisible}
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: -110, // Ajusta este valor según sea necesario
    top: 30, // Ajusta este valor según sea necesario
    zIndex: 1
  },
  button: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%", // Establece el ancho del modal en 100% del viewport width
    height: "100%", // Establece la altura del modal en 100% del viewport height
    backgroundColor: "white",
    borderRadius: 0, // Puedes ajustar el borde según tu preferencia
    padding: 35,
    // alignItems: 'center',
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15
  },
  menuOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "90%", // Línea gris ocupa el 90% del ancho
    justifyContent: "center"
  },
  menuOption: {
    fontSize: 16,
    textAlign: "center", // Centra el texto horizontalmente
    padding: 20
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2d2ade",
    justifyContent: "center",
    alignItems: "center"
  },
  closeButtonIcon: {
    // color: "white"
  }
})

export default BurgerMenuButton
