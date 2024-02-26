import React from "react"
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons
} from "@expo/vector-icons"
import { View, Text, StyleSheet,  TouchableOpacity } from "react-native"

const FooterMenu = ({ navigation,actual }) => {
  const handlePress = (screenName) => {
    switch(screenName){
      case "wallet":{
        navigation.navigate("wallet")
        break;
      };
      case "exchange":{
        navigation.navigate("exchange")
        break;
      };
      case "services":{
        navigation.navigate("services")
        break;
      };
      case "card":{
        navigation.navigate("card")
        break;
      };
      case "contact":{
        navigation.navigate("contact")
        break;
      };

    }

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress("wallet")}>
        <Entypo
          name="wallet"
          size={24}
          color={actual === "wallet" ? "#C3F53C" : "white"}
        />
        <Text
          style={[
            styles.labelDash,
            { color: actual === "wallet" ? "#C3F53C" : "white" }
          ]}>
          Wallet
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress("exchange")}>
        <FontAwesome
          name="exchange"
          size={24}
          color={actual === "exchange" ? "#C3F53C" : "white"}
        />
        <Text
          style={[
            styles.label,
            { color: actual === "exchange" ? "#C3F53C" : "white" }
          ]}>
          Exchange
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress("services")}>
        <MaterialIcons
          name="room-service"
          size={24}
          color={actual === "services" ? "#C3F53C" : "white"}
        />
        <Text
          style={[
            styles.label,
            { color: actual === "services" ? "#C3F53C" : "white" }
          ]}>
          Services
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress("card")}>
        <AntDesign
          name="creditcard"
          size={24}
          color={actual === "card" ? "#C3F53C" : "white"}
        />
        <Text
          style={[
            styles.label,
            { color: actual === "card" ? "#C3F53C" : "white" }
          ]}>
          Card
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress("contact")}>
        <FontAwesome
          name="whatsapp"
          size={24}
          color={actual === "contact" ? "#C3F53C" : "white"}
        />
        <Text
          style={[
            styles.label,
            { color: actual === "contact" ? "#C3F53C" : "white" }
          ]}>
          Contact
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#132A23",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "gray"
  },
  iconContainer: {
    alignItems: "center"
  },
  icon: {
    width: 22,
    height: 22,
    marginBottom: 5
  },
  label: {
    color: "white"
  },
  labelDash: {
    color: "#C3F53C"
  }
})

export default FooterMenu
