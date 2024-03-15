import { StyleSheet } from "react-native"

const stylesExchangeView = StyleSheet.create({
  containerLoader: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: "white",
    marginTop: 15,
    fontWeight: "bold",
    marginLeft: 30
  },
  container: {
    width: "100%",
    height: 500,
    overflow: "scroll",
    paddingHorizontal: 20
    // alignItems: "center"
  },
  containerChange: {
    width: "98%",
    marginTop: 20,
    marginBottom: 20, // Agregamos un margen inferior
    backgroundColor: "#10231D",
    borderWidth: 0.2,
    borderColor: "#C3F53C",
    borderRadius: 10,
    padding: 20
  },
  titleContainer: {
    textAlign: "center",
    color: "white",
    fontSize: 13
  },
  titleUsdt: {
    fontWeight: "bold"
  },
  inputContainer: {
    width: "100%",
    marginTop: 10
  },
  icon: {
    width: 23,
    height: 25,
    padding: 10
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: "#F4F3F5"
  },
  inputLabelRed: {
    color: "red",
    fontSize: 15
  },
  textInputContainer: {
    backgroundColor: "#081e18",
    borderRadius: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  textInputContainerClear: {
    backgroundColor: "#0e2c24",
    borderRadius: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    fontFamily: "Roboto",
    height: 40,
    paddingHorizontal: 10,
    flex: 1,
    color: "#F4F3F5",
    textAlignVertical: "center"
  },
  containerArrow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: "white"
  },
  buttonArrow: {
    backgroundColor: "#C3F53C",
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  fullWidthLine: {
    marginLeft: 10
  },
  mainContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginTop: 10
  },
  leftContainer: {
    width: "20%",
    height: "100%",
    backgroundColor: "#0e2c24",
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
  },
  containerButton: {
    marginTop: 20
  }
})

export default stylesExchangeView
