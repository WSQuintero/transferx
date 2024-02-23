import { StyleSheet } from "react-native"

const SelectInformationBankViewStyle = StyleSheet.create({
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
    marginTop: 20
  },
  subtitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#B3B3B3",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  inputContainer: {
    width: "100%",
    backgroundColor: ""
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: "#F4F3F5",
    marginBottom: 10,
    marginTop: 10
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
    marginLeft: 10
  },
  iconRight: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  input: {
    borderRadius: 10,
    marginTop: 30,
    height: 30,
    width: "80%",
    padding: 10
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
    marginTop: 30
  },
  signupTextBold: {
    color: "#C3F53C"
  }
})

export default SelectInformationBankViewStyle
