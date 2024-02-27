import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { formatDateTime, formatNumber } from "../utils/Constants";

const RecentTransactions = ({ navigation, orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOrderPress = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Transacciones recientes</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("recentTransactionsView")}
          >
            <Text style={[styles.titleText, { color: "#C3F53C" }]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {orders?.map((order) => (
          <TouchableOpacity
            key={order.id}
            onPress={() => handleOrderPress(order)}
          >
            <View style={styles.contentContainer}>
              <Image
                source={require("../../assets/transfer.png")}
                style={styles.image}
              />

              <View style={styles.detailsContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.boldText}>{order.state}</Text>
                  <Text style={styles.price}>
                    ${formatNumber(order.amount_currency_out)}
                  </Text>
                </View>
                <Text style={styles.timeText}>
                  {formatDateTime(order.created_at)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Detalle de la orden</Text>
            {selectedOrder && (
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  Solicitante: {selectedOrder.owner_account_bank_transfer}
                </Text>
                <Text style={styles.modalText}>
                  Cuenta a transferir: {selectedOrder.number_account_bank_transfer}
                </Text>
                <Text style={styles.modalText}>
                  Estado: {selectedOrder.state}
                </Text>
                <Text style={styles.modalText}>
                  Monto solicitado: ${formatNumber(selectedOrder.amount_currency_out)} COPS
                </Text>
                <Text style={styles.modalText}>
                  Fecha de solicitud: {formatDateTime(selectedOrder.created_at)}
                </Text>
                <TextInput style={styles.inputHash} placeholder="Pon tu hash"/>

              </View>
            )}
                        <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
               <Text style={styles.modalButtonText}>Enviar Hash</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  cardContainer: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  contentContainer: {
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    objectFit: "contain",
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "white",
  },
  timeText: {
    color: "#888",
  },
  price: {
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color:"#F4F3F5"
  },
  modalContent: {
    marginBottom: 20,
    alignItems: "flex-start",
  },
  modalText: {
    marginBottom: 10,
    color:"#F4F3F5"

  },
  modalCloseButton: {
    backgroundColor: "#C3F53C",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:200,
    marginTop:10
  },
  modalButtonText: {
    color: "#10231D",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputHash:{
    height:40,
    width:250,
    backgroundColor:"white",
    padding:10,
    borderRadius:20,
    marginTop:10
  }
});

export default RecentTransactions;
