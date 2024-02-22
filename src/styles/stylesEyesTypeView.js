import { StyleSheet } from "react-native"

const stylesEyesTypeView = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20
  },
  imageContainer: {
    marginTop: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    marginTop: 20,
    fontWeight: "bold"
  },
  subtitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    width: "100%",
    color: "blue",
    marginTop: 10,
    textAlign: "left",
    paddingLeft: 20
  },
  sectionTitle: {
    fontFamily: "Roboto",
    fontSize: 17,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "left",
    paddingLeft: 20,
    width: "100%",
    fontWeight: "bold" // Estilo de fuente normal
  },
  card: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  cardText: {
    fontFamily: "Roboto",
    color: "gray",
    textAlign: "left",
    textAlignVertical: "center",
    height: 50,
    flex: 1
  },
  selectedCard: {
    borderColor: "blue",
    borderWidth: 2
  },
  selectedText: {
    color: "blue"
  },
  arrowIcon: {
    marginRight: 10
  },
  buttonContainer: {
    marginTop: 40
  }
})

export default stylesEyesTypeView
