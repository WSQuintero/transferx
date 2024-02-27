import { StyleSheet } from "react-native"

const stylesLoginView = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  content: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center"
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 26,
    color: "#F4F3F5",
    fontWeight: "bold",
    marginTop: 35,
    width: "100%"
  },
  subtitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#B3B3B3",
    marginTop: 20,
    width: "100%"
  },
  inputContainer: {
    width: "100%",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  textInputContainer: {
    backgroundColor: "#10231D",
    borderRadius: 10,
    marginTop: 5,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    width: 50,
    borderWidth: 1,
    borderColor: "#10231D" // Color inicial del borde
  },
  textInput: {
    fontFamily: "Roboto",
    height: 40,
    width: 40,
    paddingHorizontal: 10,
    flex: 1,
    color: "#F4F3F5"
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 30
  },
  loginButtonText: {
    fontFamily: "Roboto",
    backgroundColor: "#2d2ade",
    borderRadius: 20,
    marginTop: 30,
    width: 330,
    height: 55,
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  rememberCheck: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  forgot: {
    color: "#F4F3F5",
    width: "100%",
    textAlign: "right",
    fontSize: 14
  },
  signinText: {
    fontFamily: "Roboto",
    marginTop: 30
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
    gap: 10
  },
  socialButton: {
    marginRight: 20
  },
  socialIcon: {
    width: 50,
    height: 50
  },
  signupText: {
    fontFamily: "Roboto",
    textAlign: "center",
    width: "100%",
    color: "#F4F3F5",
    marginTop: 24
  },
  signupTextBold: {
    fontWeight: "bold",
    color: "#C3F53C"
  },
  selectedInput: {
    borderColor: "blue" // Color del borde cuando está seleccionado
  },
  buttonContainer: {
    marginTop: 40
  }
})

export default stylesLoginView
