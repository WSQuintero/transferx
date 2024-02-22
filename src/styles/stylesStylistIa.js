import { StyleSheet } from "react-native"

const stylesStylistIa = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20
  },
  imageContainer: {
    marginTop: 20
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 75
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  parraf: {
    textAlign: "center",
    marginTop: 10
  },
  subtitle: {
    fontSize: 20,
    width: "100%",
    color: "blue",
    marginTop: 10,
    textAlign: "left",
    paddingLeft: 20
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "left",
    paddingLeft: 20,
    width: "100%"
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
    marginTop: 20
  }
})
export default stylesStylistIa
