import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const RecentTransactions = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Recent Transactions</Text>
          <TouchableOpacity onPress={() => navigation.navigate("recentTransactionsView")}>
            <Text style={[styles.titleText, { color: "#C3F53C" }]}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/men.png")}
            style={styles.image}
          />

          <View style={styles.detailsContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.boldText}>USDC Recharge</Text>
              <Text style={styles.price}>$500.00</Text>
            </View>
            <Text style={styles.timeText}>02:15 PM . Sept 17, 2023</Text>
          </View>
        </View>

        {/* Tarjeta 2 */}
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/google.png")}
            style={styles.image}
          />

          <View style={styles.detailsContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.boldText}>Google Payment</Text>
              <Text style={styles.price}>$410.00</Text>
            </View>
            <Text style={styles.timeText}>02:15 PM . Sept 17, 2023</Text>
          </View>
        </View>

        {/* Tarjeta 3 */}
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/visa.png")}
            style={styles.image}
          />

          <View style={styles.detailsContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.boldText}>Visa Transaction</Text>
              <Text style={styles.price}>$720.00</Text>
            </View>
            <Text style={styles.timeText}>02:15 PM . Sept 17, 2023</Text>
          </View>
        </View>

        {/* Tarjeta 4 */}
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.image}
          />

          <View style={styles.detailsContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.boldText}>Facebook Purchase</Text>
              <Text style={styles.price}>$600.00</Text>
            </View>
            <Text style={styles.timeText}>02:15 PM . Sept 17, 2023</Text>
          </View>
        </View>

        {/* Tarjeta 5 */}
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/check.png")}
            style={styles.image}
          />

          <View style={styles.detailsContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.boldText}>Check Deposit</Text>
              <Text style={styles.price}>$53.00</Text>
            </View>
            <Text style={styles.timeText}>02:15 PM . Sept 17, 2023</Text>
          </View>
        </View>

        {/* Tarjeta 6 */}
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/congratulations.png")}
            style={styles.image}
          />

          <View style={styles.detailsContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.boldText}>Congratulations Reward</Text>
              <Text style={styles.price}>$60.00</Text>
            </View>
            <Text style={styles.timeText}>02:15 PM . Sept 17, 2023</Text>
          </View>
        </View>
      </View>
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
    justifyContent: "space-between"
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
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
    objectFit:"contain"
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
    justifyContent: "space-between",
    marginBottom: 5
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
  }
});

export default RecentTransactions;
