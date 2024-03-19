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
  Linking,
  Keyboard,
  Clipboard
} from "react-native"

import { Feather } from "@expo/vector-icons"
import { formatDateTime, formatNumber } from "../utils/Constants"
import ModalSuccess from "./ModalSuccess"
import ModalError from "./ModalError"
import { MyContext } from "../context/context"
import Profile from "./Profile"

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
  const [showSuccessModalOrder, setShowSuccessModalOrder] = useState(false)
  const [succesMessage, setSuccesMessage] = useState()
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [order, setOrder] = useState()
  const [isPending, setIsPending] = useState(false)
  const { informationUser, $User, setInformationUser } = useContext(MyContext)
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
  useEffect(() => {
    if (showSuccessModalOrder) {
      setTimeout(() => {
        setShowSuccessModalOrder(false)
      }, 3000)
    }
  }, [showSuccessModalOrder])

  useEffect(() => {
    const getSarlaft = async () => {
      if (token) {
      }
      const { status, data } = await $User.getLastSarlaft(token)
      console.log(informationUser)
      if (status) {
        if (data.data.length && informationUser?.sarlaft_validated === 0) {
          setShowSuccessModalOrder(true)
          setIsPending(true)
        }
      }
    }
    getSarlaft()
  }, [token])
  return (
    <>
      <Profile />
      <View style={{ position: "relative" }}>
        <TouchableOpacity
          style={[
            styles.titleText,
            {
              color: "#C3F53C",
              borderRadius: 20,
              borderColor: "#C3F53C",
              borderWidth: 1,
              padding: 5,
              width: 200,
              textAlign: "center",
              marginTop: 50,
              position: "absolute",
              right: 20
            }
          ]}
          onPress={() => {
            if (
              informationUser?.user.kyc_validated === 1 &&
              informationUser?.user.sarlaft_validated === 1
            ) {
              navigation.navigate("newExchange")
            } else if (
              informationUser?.user.kyc_validated === 1 &&
              informationUser?.user.sarlaft_validated === 0
            ) {
              navigation.navigate("sarlaft")
            } else {
              navigation.navigate("dialog")
            }
          }}>
          <Text
            style={[
              styles.titleText,
              {
                color: "#C3F53C",
                textAlign: "center"
              }
            ]}>
            Crear nueva orden
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          onPress={() =>
            Clipboard.setString(informationUser?.user?.referal_code)
          }>
          <Text
            style={[
              styles.titleText,
              { fontSize: 14, marginLeft: 40, color: "#C3F53C" }
            ]}>
            Código referido: {informationUser?.user?.referal_code}
          </Text>
        </TouchableOpacity>
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
                      <Text style={styles.boldText}>
                        {order.state === "in_progress" && "En progreso"}
                        {order.state === "pending" && "Pendiente"}
                        {order.state === "complete" && "Completada"}
                        {order.state === "rejected" && "Rechazada"}
                      </Text>
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
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 3,
                        position: "relative"
                      }}>
                      <Text style={styles.timeText}>
                        {formatDateTime(order.created_at)}
                      </Text>
                      <Text style={styles.timeText}>X-REF: {order.id}</Text>
                    </View>
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
              <TouchableOpacity
                style={[
                  styles.button,
                  { position: "absolute", right: "5%", top: "5%" }
                ]}
                onPress={() => setModalVisible(false)}>
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Detalle orden</Text>
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
                    {formatNumber(selectedOrder.amount_currency_out)} COP
                  </Text>
                  <Text style={styles.modalText}>
                    Fecha de solicitud:{" "}
                    {formatDateTime(selectedOrder.created_at)}
                  </Text>
                  <Text style={styles.modalText}>
                    X-REF: {selectedOrder.id}
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
                        multiline={true}
                        onKeyPress={(event) => {
                          if (event.nativeEvent.key === "Enter") {
                            Keyboard.dismiss()
                          }
                        }}
                        onChangeText={(value) => setHash(value)}
                      />
                      <TouchableOpacity
                        style={[styles.modalCloseButton, { width: 250 }]}
                        onPress={() => handleUpdateHash(order)}>
                        <Text style={styles.modalButtonText}>Enviar Hash</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}

              {selectedOrder?.url_voucher_transfer_out && (
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={async () => {
                    setModalVisible(false)

                    await Linking.openURL(
                      selectedOrder.url_voucher_transfer_out
                    )
                  }}>
                  <Text style={styles.modalButtonText}>
                    Ver comprobante de pago
                  </Text>
                </TouchableOpacity>
              )}
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
      <ModalSuccess
        showSuccessModal={showSuccessModalOrder}
        succesMessage={
          "Tu solicitud para poder realizar órdenes está pendiente, una vez aprobada podrás disfrutar de este servicio"
        }
      />
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
    fontSize: 14,
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
    height: 65,
    width: 250,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
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
