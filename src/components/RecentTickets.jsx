import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button
} from "react-native"
import { formatDateTime, formatNumber } from "../utils/Constants"
import ModalSuccess from "./ModalSuccess"
import ModalError from "./ModalError"
import { MyContext } from "../context/context"
import ModalNewTicket from "./ModalNewTicket"
import { Feather } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

const RecentTickets = ({
  navigation,
  token,
  newMessage,
  tickets,
  setTickets,
  onSubmit,
  informationUser
}) => {
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [openModalTicket, setOpenModalTicket] = useState(false)
  const [actualTicket, setActualTicket] = useState(undefined)
  const [inputText, setInputText] = useState("")
  const { $Tickets, setMessageSended } = useContext(MyContext)
  const [messages, setMessages] = useState(undefined)
  useEffect(() => {
    if (showErrorModal) {
      setTimeout(() => {
        setShowErrorModal(false)
        setErrorMessage("")
      }, 3000)
    }
  }, [showErrorModal])
  useEffect(() => {
    setInputText("")
  }, [])
  const handleOpenModalTicket = (ticket) => {
    setActualTicket(ticket)
  }

  const handleSendNewMessage = async () => {
    setMessageSended(false)
    const newMessage = { ticket: actualTicket?.id, comment: inputText }
    console.log(newMessage)
    setInputText("")
    const { status, data } = await $Tickets.sendMessage(token, newMessage)
    if (status) {
      console.log("Mensaje enviado")
      setMessageSended(true)
    }
  }
  return (
    <>
      <TouchableOpacity
        style={[
          styles.titleText,
          {
            color: "#C3F53C",
            borderRadius: 20,
            borderColor: "#C3F53C",
            borderWidth: 1,
            padding: 5,
            width: "60%",
            textAlign: "center",
            right: 20,
            position: "absolute",
            top: 50
          }
        ]}
        onPress={() => {
          setOpenModalTicket(true)
        }}>
        <Text
          style={[
            styles.titleText,
            {
              color: "#C3F53C",
              textAlign: "center"
            }
          ]}>
          Crear nuevo ticket
        </Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Tickets recientes</Text>
          </View>

          {tickets?.length === 0 ? (
            <View style={styles.noOrdersContainer}>
              <Text style={styles.clear}>No tienes tickets aún</Text>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../assets/clear.png")}
                  style={styles.clearImage}
                />
              </View>
            </View>
          ) : (
            tickets?.map((ticket) => (
              <TouchableOpacity
                key={ticket.id}
                onPress={() => {
                  handleOpenModalTicket(ticket)
                }}>
                <View style={styles.contentContainer}>
                  <Image
                    source={require("../../assets/tickets.png")}
                    style={styles.image}
                  />

                  <View style={styles.detailsContainer}>
                    <View style={styles.subContainer}>
                      <Text style={styles.boldText}>{ticket.title}</Text>
                      <View
                        style={{
                          flexDirection: "column",
                          gap: 3,
                          position: "relative"
                        }}>
                        <Text style={styles.price}>
                          {ticket.status === "open" ? "Abierto" : "Cerrado"}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.timeText}>{ticket.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>

      {openModalTicket && (
        <ModalNewTicket
          setOpenModalTicket={setOpenModalTicket}
          onSubmit={onSubmit}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={actualTicket !== undefined}
        onRequestClose={() => setActualTicket(undefined)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={[
                styles.button,
                { position: "absolute", right: "5%", top: "5%" }
              ]}
              onPress={() => setActualTicket(undefined)}>
              <Feather name="x" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Detalle ticket</Text>
            <Text style={styles.titleTextTwo}>
              <Text style={styles.titleTextTitle}>Ticket id:</Text>{" "}
              {actualTicket?.id}
            </Text>
            <Text style={styles.titleTextTwo}>
              <Text style={styles.titleTextTitle}>Creación:</Text>{" "}
              {formatDateTime(actualTicket?.createdAt)}
            </Text>
            <Text style={styles.titleTextTwo}>
              <Text style={styles.titleTextTitle}>Actualización:</Text>{" "}
              {formatDateTime(actualTicket?.updatedAt)}
            </Text>
            <Text style={styles.titleTextTwo}>
              <Text style={styles.titleTextTitle}>Estado:</Text>{" "}
              {actualTicket?.status === "open" ? "Abierto" : "Cerrado"}
            </Text>
            <Text style={styles.titleTextTwo}>
              <Text style={styles.titleTextTitle}>Tipo:</Text>
              {actualTicket?.type === "change_account_bank"
                ? "Cambio información bancaria"
                : "Cambio de wallet"}
            </Text>
            <Text style={styles.titleTextTwo}>
              <Text style={styles.titleTextTitle}>Título:</Text>{" "}
              {actualTicket?.title}
            </Text>
            <Text style={styles.titleTextTwo}>
              <Text style={styles.titleTextTitle}>Descripción:</Text>{" "}
              {actualTicket?.description}
            </Text>
            <TouchableOpacity
              style={[styles.titleText, styles.buttonGeneral]}
              onPress={(event) => {
                setMessages(actualTicket?.responses)
              }}>
              <Text
                style={[
                  styles.titleText,
                  {
                    color: "#C3F53C",
                    textAlign: "center"
                  }
                ]}>
                Ver mensajes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={messages !== undefined}
        onRequestClose={() => setActualTicket(undefined)}>
        <View style={styles.centeredViewMessages}>
          <View style={styles.modalViewMessages}>
            <TouchableOpacity
              style={[
                styles.button,
                { position: "absolute", right: "5%", top: "5%" }
              ]}
              onPress={() => setMessages(undefined)}>
              <Feather name="x" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Mensajes</Text>

            <ScrollView style={styles.containerMessages}>
              {messages?.map((message) => (
                <View
                  key={message.id}
                  style={{
                    backgroundColor:
                      informationUser?.user.id === message?.whoResponse.id
                        ? "rgba(195, 245, 60, 0.2)"
                        : "rgba(255,255,255,0.2)",
                    padding: 10,
                    alignSelf:
                      informationUser?.user.id === message?.whoResponse.id
                        ? "flex-start"
                        : "flex-end",
                    width: 200,
                    borderRadius: 20,
                    marginBottom: 10
                  }}>
                  <Text style={{ color: "#C3F53C" }}>
                    {message?.whoResponse?.firstname}:
                  </Text>
                  <Text style={{ color: "#fff" }}>{message?.comment}</Text>
                  <Text style={{ color: "rgba(255,255,255,0.6)" }}>
                    {formatDateTime(message?.createdAt)}
                  </Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Escribe el nuevo mensaje"
                placeholderTextColor={"white"}
              />
              <TouchableOpacity
                style={styles.buttonSend}
                onPress={handleSendNewMessage}>
                <MaterialIcons name="send" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 100
  },
  buttonGeneral: {
    color: "#C3F53C",
    borderRadius: 10,
    borderColor: "#C3F53C",
    borderWidth: 1,
    padding: 8,
    width: "60%",
    textAlign: "center",
    marginTop: 20
  },
  cardContainer: {
    margin: 10,
    borderRadius: 10,
    padding: 10
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  titleTextTwo: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    width: "100%"
  },
  titleTextTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#C3F53C",
    textAlign: "left",
    width: "100%"
  },
  send: {
    backgroundColor: "#C3F53C",
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 5
  },
  clear: {
    color: "#C3F53C",
    textAlign: "center",
    marginTop: 120,
    fontSize: 20,
    fontWeight: "bold"
  },
  contentContainer: {
    flexDirection: "row",
    marginTop: 20,
    padding: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    objectFit: "contain"
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  boldText: {
    fontWeight: "bold",
    color: "white"
  },
  timeText: {
    color: "#888"
  },
  price: {
    color: "white",
    fontSize: 17
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#10231D",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
    heifht: "80%"
  },
  centeredViewMessages: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: "100%"
  },
  modalViewMessages: {
    margin: 20,
    backgroundColor: "#10231D",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height: "100%"
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#C3F53C"
  },
  modalContent: {
    marginBottom: 20,
    alignItems: "flex-start"
  },
  modalText: {
    marginBottom: 10,
    color: "#F4F3F5"
  },
  modalCloseButton: {
    backgroundColor: "#C3F53C",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 200,
    marginTop: 10
  },
  modalButtonText: {
    color: "#10231D",
    fontWeight: "bold",
    textAlign: "center"
  },
  inputHash: {
    height: 40,
    width: 250,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 10
  },
  noOrdersContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 160
  },
  imageContainer: {
    opacity: 0.5
  },
  clearImage: {
    width: 200,
    height: 200
  },
  container: {
    flex: 1,
    padding: 20
  },
  messageContainer: {
    flex: 1,
    marginBottom: 20
  },
  message: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    width: "100%"
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    color: "white"
  },
  buttonSend: {
    backgroundColor: "#C3F53C",
    height: 50,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  containerMessages: {
    backgroundColor: "rgb(255,255,255,0.9)",
    width: "100%",
    height: "100%",
    padding: 10
  }
})

export default RecentTickets
