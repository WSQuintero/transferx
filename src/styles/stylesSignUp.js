import { StyleSheet } from "react-native"

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#F4F3F5",
    fontWeight: "bold",
    marginTop: 10
  },
  subtitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#B3B3B3",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5
  },
  inputContainer: {
    width: "100%"
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: "#F4F3F5",
    marginBottom: 10,
    marginTop: 5
  },
  textInputContainer: {
    backgroundColor: "#10231D",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: "#F4F3F5" // Cambiado a blanco
  },
  iconRight: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#F4F3F5" // Cambiado a blanco
  },
  input: {
    borderRadius: 10,
    marginTop: 5, // Reducido el espacio superior
    marginBottom: 10, // Agregado espacio inferior
    height: 40, // Aumentado el alto del input
    width: "90%", // Ajustado el ancho del input
    paddingHorizontal: 10, // Añadido padding horizontal
    color: "#F4F3F5" // Cambiado a blanco
  },
  signupButton: {
    backgroundColor: "#2d2ade",
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 260
  },
  signupButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20
  },
  footerText: {
    textAlign: "center",
    width: "100%",
    color: "#F4F3F5",
    zIndex: 1,
    marginTop: 0
  },
  backButton: {
    marginLeft: 20
  },
  button: {
    marginTop: 40
  },
  signupTextBold: {
    color: "#C3F53C"
  },
  buttonContainer: {
    marginTop: 10
  },
  containerphone: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8
  },
  phoneInputContainer: {
    flexDirection: "row", // Alinear la bandera junto al input
    alignItems: "center", // Alinear la bandera verticalmente con el input
    width: "90%",
    height: 40,
    justifyContent: "center"
  }
})

export default stylesSignUp
