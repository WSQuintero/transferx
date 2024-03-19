import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput
} from "react-native"
import { formatDateTime, formatNumber } from "../utils/Constants"
import ModalSuccess from "./ModalSuccess"
import ModalError from "./ModalError"
import { MyContext } from "../context/context"
import ModalNewTicket from "./ModalNewTicket"
import { Feather } from "@expo/vector-icons"

const RecentTickets = ({
  navigation,
  token,
  tickets,
  setTickets,
  onSubmit
}) => {
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [openModalTicket, setOpenModalTicket] = useState(false)
  const [actualTicket, setActualTicket] = useState(undefined)
  useContext(MyContext)

  useEffect(() => {
    if (showErrorModal) {
      setTimeout(() => {
        setShowErrorModal(false)
        setErrorMessage("")
      }, 3000)
    }
  }, [showErrorModal])
  const handleOpenModalTicket = (ticket) => {
    setActualTicket(ticket)
  }

  console.log(actualTicket)
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
        {/*

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Detalle de la orden</Text>
              {selectedOrder && (
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>
                    Solicitante: {selectedOrder.owner_account_bank_transfer}
                  </Text>
                  <Text style={styles.modalText}>
                    Cuenta a transferir:{" "}
                    {selectedOrder.number_account_bank_transfer}
                  </Text>
                  <Text style={styles.modalText}>
                    Estado: {selectedOrder.state}
                  </Text>
                  <Text style={styles.modalText}>
                    Monto solicitado: $
                    {formatNumber(selectedOrder.amount_currency_out)} COPS
                  </Text>
                  <Text style={styles.modalText}>
                    Fecha de solicitud:{" "}
                    {formatDateTime(selectedOrder.created_at)}
                  </Text>
                  {selectedOrder.state === "pending" && (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                      <TextInput
                        style={styles.inputHash}
                        placeholder="Pon tu hash"
                        value={hash}
                        onChangeText={(value) => setHash(value)}
                      />
                      <TouchableOpacity
                        style={styles.modalCloseButton}
                        onPress={() => handleUpdateHash(order)}>
                        <Text style={styles.modalButtonText}>Enviar Hash</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}

              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ModalSuccess
          showSuccessModal={showSuccessModal}
          succesMessage={succesMessage}
        />
        <ModalError
          showErrorModal={showErrorModal}
          errorMessage={errorMessage}
        /> */}
      </ScrollView>

      {/* <ModalSuccess
        showSuccessModal={showSuccessModalOrder}
        succesMessage={
          "Tu solicitud para poder realizar órdenes está pendiente, una vez aprobada podrás disfrutar de este servicio"
        }
      /> */}
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
              <Text style={styles.titleTextTitle}>Dscripción:</Text>{" "}
              {actualTicket?.description}
            </Text>
            <TouchableOpacity
              style={[styles.titleText, styles.buttonGeneral]}
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
                Ver mensajes
              </Text>
            </TouchableOpacity>
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
    textAlign: "center"
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
  }
})

export default RecentTickets
