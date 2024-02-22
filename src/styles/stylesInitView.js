import { StyleSheet } from "react-native"

const stylesInitView = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  icon: {
    width: "30%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20
  },
  title: {
    marginTop: 80,
    fontFamily: "Roboto",
    fontSize: 30,
    maxWidth: 350,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold"
  },
  subtitle: {
    fontFamily: "Roboto",
    maxWidth: 300,
    textAlign: "center",
    marginBottom: 40
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
    marginBottom: 40
  },
  optionButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#F0F7FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  optionIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray"
  },
  selectedOption: {
    backgroundColor: "#2D2ADE"
  },
  selectedIndicator: {
    backgroundColor: "white"
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80
  }
})

export default stylesInitView
