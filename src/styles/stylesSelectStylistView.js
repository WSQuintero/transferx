import { StyleSheet } from "react-native"

const stylesSelectStylistView = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    marginTop: 10
  },
  logoText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold"
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  image: {
    width: "100%",
    height: "60%"
  },
  title: {
    marginTop: 20,
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold"
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold"
  },
  line: {
    marginTop: 20,
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  description: {
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: 20,
    paddingHorizontal: 20
  },
  sliderTitle: {
    fontFamily: "Roboto",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold"
  },
  sliderText: {
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
})

export default stylesSelectStylistView
