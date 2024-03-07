import { StyleSheet } from "react-native"

const StylesKYC = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#10231D"
  },
  alert: {
    paddingVertical: 10,
    color: "white",
    width: "80%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20
  },
  containerBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 1000,
    width: 60,
    maxHeight: 60,
    position: "absolute",
    top: 50,
    paddingBottom: 40,
    paddingRight: 10
  },
  containerId: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    width: "80%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#C3F53C"
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
  imageId: {
    width: "100%",
    height: 300,
    borderRadius: 100,
    objectFit: "contain"
  },
  deleteButton: {
    position: "absolute",
    top: 30,
    right: 10,
    backgroundColor: "red",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  nextButton: {
    backgroundColor: "#C3F53C",
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },

  nextButtonText: {
    color: "#10231D",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },

  disabledButton: {
    backgroundColor: "gray" // Color de fondo cuando el botón está desactivado
  }
})

export default StylesKYC
