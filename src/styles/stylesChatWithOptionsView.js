import { StyleSheet } from "react-native"

const stylesChatWithOptionsView = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20
  },
  imageContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 30
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
    width: "100%"
  },
  card: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50
  },
  cardText: {
    fontFamily: "Roboto",
    color: "gray",
    textAlign: "center",
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
  chatContainer: {
    width: "90%"
  },
  message: {
    maxWidth: "80%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#fff"
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2d2ade",
    marginTop: 10
  },
  buttonContainer: {
    marginTop: 40
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "flex-end",
    paddingRight: 20
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
})

export default stylesChatWithOptionsView
