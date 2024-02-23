import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image
} from "react-native"

const CreditCardComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={[styles.cardFace, styles.frontCard]}>
          <ImageBackground
            source={require("../../assets/texturecard.png")}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 15 }}>
            <View style={styles.containerInfo}>
              <Image
                style={styles.cardTitle}
                source={require("../../assets/visa.png")}
              />
              <View style={styles.cardNumberContainer}>
                <Text style={styles.cardNumberText}>6735</Text>
                <Text style={styles.cardNumberText}>6789</Text>
                <Text style={styles.cardNumberText}>XXXX</Text>
                <Text style={styles.cardNumberText}>XXXX</Text>
              </View>
              <View style={styles.cardRow}>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardLabel}>Card Balance</Text>
                  <Text style={styles.cardText}>Mario C</Text>
                </View>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardLabel}>Expire Date</Text>
                  <Text style={styles.cardText}>23/25</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={[styles.cardFace, styles.backCard]}>
          <ImageBackground
            source={require("../../assets/texturecard.png")}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 15 }}>
            <Text style={styles.cardText}>Back Card</Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  card: {
    width: 350,
    height: 210,
    borderRadius: 15
  },
  cardFace: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#ccc",
    borderWidth: 1,
    elevation: 4,
    borderRadius: 20
  },
  containerInfo: {
    paddingHorizontal: 20
  },
  frontCard: {
    zIndex: 2,
    backgroundColor: "#9AC827"
  },
  backCard: {
    transform: [
      { perspective: 1000 },
      { rotateY: "180deg" },
      { scale: 0.9 },
      { translateY: -26 }
    ],
    zIndex: 1,
    backgroundColor: "#77C7EB"
  },
  cardTitle: {
    marginBottom: 10,
    width: 75,
    objectFit: "contain",
    height: 30
  },
  cardNumberContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "80%"
  },
  cardNumberText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  cardColumn: {
    flex: 1
  },
  cardLabel: {
    fontSize: 13,
    marginBottom: 5,
    color: "#006060"
  },
  cardText: {
    fontSize: 17
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    objectFit: "cover"
  }
})

export default CreditCardComponent
