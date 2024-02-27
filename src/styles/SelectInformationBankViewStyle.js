import { StyleSheet } from "react-native"

const SelectInformationBankViewStyle = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#10231D" // Color de fondo actualizado
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
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
    backgroundColor: "#10231D" // Color de fondo actualizado
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: "#F4F3F5",
    marginBottom: 10,
    marginTop: 10
  },
  textInputContainer: {
    width: "100%",
    backgroundColor: "#10231D",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1, // Borde añadido
    borderColor: "#BFBFBF" // Color del borde añadido
  },
  input: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    height: 40,
    width: "100%",
    paddingHorizontal: 10,
    color: "#F4F3F5",
    borderWidth: 1,
    borderColor: "#BFBFBF"
  },
  picker: {
    width: "100%",
    color: "#BFBFBF",
    backgroundColor: "rgba(256, 256, 256, 0.1)",
    borderRadius: 20,
    borderColor: "#FFF", // Borde blanco
    borderWidth: 1, // Borde añadido
    padding: 10 // Añadido padding
  },
  button: {
    marginTop: 30,
    width: "100%"
  },
  footerText: {
    textAlign: "center",
    width: "100%",
    color: "#F4F3F5",
    marginTop: 20
  }
})

export default SelectInformationBankViewStyle
