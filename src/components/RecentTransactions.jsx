import React, { useEffect, useState } from "react"
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

const RecentTransactions = ({
  navigation,
  orders,
  exchange,
  token,
  setChangedHash,
  setOrders
}) => {
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [hash, setHash] = useState()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [succesMessage, setSuccesMessage] = useState()
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [order, setOrder] = useState()

  const handleOrderPress = (order) => {
    setSelectedOrder(order)
    setModalVisible(true)
  }

  useEffect(() => {
    if (showErrorModal) {
      setTimeout(() => {
        setShowErrorModal(false)
        setErrorMessage("")
      }, 3000)
    }
  }, [showErrorModal])

  useEffect(() => {
    if (showSuccessModal) {
      setTimeout(() => {
        setShowSuccessModal(false)
        setSuccesMessage("")
      }, 3000)
    }
  }, [showSuccessModal])

  const handleUpdateHash = async () => {
    setChangedHash(false)
    const { status, data } = await exchange.p2pConfirmHash(
      token,
      order.id,
      hash
    )
    if (status) {
      setShowSuccessModal(true)
      setSuccesMessage("Hash actualizado correctamente")
      setChangedHash(true)
      setModalVisible(false)
      setSelectedOrder(null)
      setHash("")
    } else {
      setShowErrorModal(true)
      if (
        data.data.message ===
        `"hash_transfer_in" length must be at least 10 characters long`
      ) {
        setErrorMessage("El hash debe tener mínimo 10 carácteres")
      }
    }
  }

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("dialog")}>
        <Text
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
          ]}>
          Crear nueva orden
        </Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Transacciones recientes</Text>
          </View>

          {orders?.length === 0 ? (
            <View style={styles.noOrdersContainer}>
              <Text style={styles.clear}>No tienes órdenes aún</Text>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../assets/clear.png")}
                  style={styles.clearImage}
                />
              </View>
            </View>
          ) : (
            orders?.map((order) => (
              <TouchableOpacity
                key={order.id}
                onPress={() => {
                  handleOrderPress(order)
                  setOrder(order)
                }}>
                <View style={styles.contentContainer}>
                  <Image
                    source={require("../../assets/transfer.png")}
                    style={styles.image}
                  />

                  <View style={styles.detailsContainer}>
                    <View style={styles.subContainer}>
                      <Text style={styles.boldText}>{order.state}</Text>
                      <View
                        style={{
                          flexDirection: "column",
                          gap: 3,
                          position: "relative"
                        }}>
                        <Text style={styles.price}>
                          ${formatNumber(order.amount_currency_out)}
                        </Text>
                        {order.state === "pending" && (
                          <Text style={styles.send}>Enviar hash</Text>
                        )}
                      </View>
                    </View>
                    <Text style={styles.timeText}>
                      {formatDateTime(order.created_at)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>

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
        />
      </ScrollView>
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
    color: "white"
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

export default RecentTransactions
