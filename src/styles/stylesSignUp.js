import { StyleSheet } from "react-native"

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginBottom: 60
  },
  backButton: {
    position: "absolute",
    top: 100,
    left: 20,
    zIndex: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#f0f0f0"
  },
  backButtonIcon: {
    width: 20,
    height: 20
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 27,
    color: "#333333",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginTop: 10
  },
  inputContainer: {
    width: "100%",
    marginTop: 30
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: "#333333",
    fontWeight: "bold"
  },
  textInputContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  iconRight: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 5,
    height: 50,
    width: "80%",
    padding: 10
  },
  signupButton: {
    backgroundColor: "#2d2ade",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    width: 260
  },
  signupButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16
  },
  footerText: {
    marginTop: 30,
    textAlign: "center",
    width: "100%",
    color: "#666666",
    zIndex: 1,
    position: "absolute",
    bottom: 1,
    marginLeft: 25
  },
  backButton: {
    marginTop: 50,
    marginLeft: 20
  },
  button: {
    marginTop: 50
  },
  signupTextBold: {
    fontWeight: "bold"
  }
})

export default stylesSignUp
