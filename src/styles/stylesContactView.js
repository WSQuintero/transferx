import { StyleSheet } from "react-native"

const stylesContactView = StyleSheet.create({
  generalContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  generalTitle: {
    color: "white",
    fontSize: 27,
    width: "100%",
    textAlign: "left",
    marginLeft: 25
  },
  generalTitleTwo: {
    color: "white",
    fontSize: 20,
    width: "100%",
    textAlign: "left",
    marginLeft: 35,
    marginBottom: 20
  },
  containerChange: {
    width: "90%",
    minHeight: "30",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#10231D",
    borderWidth: 0.2,
    borderColor: "#C3F53C",
    borderRadius: 10,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  titleContainer: {
    textAlign: "left",
    color: "white",
    fontSize: 18
  },
  button: {
    width: 120,
    height: 30,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#C3F53C",
    color: "black",
    paddingHorizontal: 5,
    marginTop: 10,
    fontSize: 10
  },
  containerCard: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  mainContainer: {
    flexDirection: "row",
    width: "80%",
    height: 80,
    marginTop: 10,
    backgroundColor: "#172824",
    alignItems: "center",
    padding: 10,
    borderRadius: 10
  },
  leftContainer: {
    width: "20%",
    height: "100%",
    backgroundColor: "#223731",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    justifyContent: "center"
  },
  textContainer: {
    justifyContent: "space-between",
    alignItems: "start",
    height: "100%"
  },
  textTitle: {
    color: "gray",
    fontSize: 15
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 10
  }
})

export default stylesContactView
