import { StyleSheet } from "react-native"

const stylesCongratulationsView = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: 350,
    height: 250
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    textAlign: "center",
    marginTop: 80
  },
  subtitle: {
    fontSize: 15,
    color: "blue",
    marginTop: 20,
    textAlign: "center",
    width: 250,
    marginTop: 20
  },
  imageContainer: {
    position: "absolute",
    top: 60
  },
  favicon: {}
})

export default stylesCongratulationsView
