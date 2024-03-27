import { StyleSheet } from "react-native"

const stylesInitView = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  icon: {
    width: "30%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    maxWidth: 350,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#F4F3F5",
    height: 75
  },
  subtitle: {
    fontFamily: "Roboto",
    maxWidth: 300,
    textAlign: "center",
    color: "#B3B3B3",
    height: 50
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "12%",
    marginBottom: 30
  },
  optionButton: {
    width: 5,
    height: 5,
    borderRadius: 15,
    backgroundColor: "#C3F53C",
    alignItems: "center",
    justifyContent: "center"
  },
  optionIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray"
  },
  selectedOption: {
    backgroundColor: "#C3F53C"
  },
  selectedIndicator: {
    backgroundColor: "#C3F53C"
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80
  }
})

export default stylesInitView
