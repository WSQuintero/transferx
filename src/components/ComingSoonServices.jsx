import React from "react"
import { Image, View, StyleSheet, Text } from "react-native"
import ButtonColor from "./ButtonColor"

function ComingSoonServices({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/Polygon 2.png")}
          style={styles.image}
        />
        <View style={styles.containerLogo}>
          <Image
            source={require("../../assets/completesize.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../../assets/x.png")}
            style={styles.imageClose}
          />
        </View>

        <View>
          <Image
            source={require("../../assets/coming.png")}
            style={styles.imageClock}
          />
        </View>
        <Text style={styles.title}>Exciting Features on the Horizon!</Text>
        <Text style={styles.text}>
          our upcoming features are 'Coming Soon' and will bring more
          convenience and innovation to your fingertips
        </Text>
        <View style={styles.containerButton}>
          <ButtonColor >Go to home</ButtonColor>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    height: "100%",
    width: "100%"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0)",
    height: "100%",
    width: "100%"
  },
  contentContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "black",
    alignItems: "center"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "150%",
    height: "100%",
    resizeMode: "cover"
  },
  imageLogo: {
    width: 130,
    height: 40,
    objectFit: "contain",
    position: "relative",
    top: -10,
    left: 0
  },
  imageClose: {
    width: 80,
    objectFit: "contain",
    position: "relative",
  },
  containerLogo: {
    width: "100%",
    paddingLeft: 15,
    paddingTop: 15,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10
  },
  text: {
    color: "#C5C7C8",
    textAlign: "center",
    width: "80%",
    marginTop: 10
  },
  containerButton: {
    marginTop: 20
  }
})

export default ComingSoonServices
