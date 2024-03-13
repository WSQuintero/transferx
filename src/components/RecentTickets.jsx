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

const RecentTickets = ({ navigation, token, tickets, setTickets }) => {
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [openModalTicket, setOpenModalTicket] = useState(false)
  useContext(MyContext)

  useEffect(() => {
    if (showErrorModal) {
      setTimeout(() => {
        setShowErrorModal(false)
        setErrorMessage("")
      }, 3000)
    }
  }, [showErrorModal])

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
              <TouchableOpacity key={ticket.id} onPress={() => {}}>
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
                        <Text style={styles.price}>{ticket.status}</Text>
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
        <ModalNewTicket setOpenModalTicket={setOpenModalTicket} />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 100
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
    elevation: 5
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#F4F3F5"
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
  clear: {
    fontSize: 16,
    marginBottom: 10,
    color: "#C3F53C"
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
