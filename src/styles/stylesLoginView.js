import { StyleSheet } from "react-native"

const stylesLoginView = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  containerArrow: {
    marginTop: 40
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#2D2ADE"
  },
  backIcon: {
    width: 20,
    height: 20
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#F4F3F5",
    fontWeight: "bold",
    marginTop: 35
  },
  subtitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#B3B3B3",
    textAlign: "center",
    marginTop: 20
  },
  inputContainer: {
    width: "100%",
    marginTop: 30
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
  textInputContainer: {
    backgroundColor: "#10231D",
    borderRadius: 10,
    marginTop: 5,
    padding: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    fontFamily: "Roboto",
    height: 40,
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
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  forgot: {
    color: "#F4F3F5",
    width: "100%",
    textAlign: "right",
    fontSize: 14,
    marginBottom: 5
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
    color: "#F4F3F5"
  },
  signupTextBold: {
    fontWeight: "bold",
    color: "#C3F53C"
  }
})

export default stylesLoginView
