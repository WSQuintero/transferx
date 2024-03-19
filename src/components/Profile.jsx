import React, { useContext, useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { MyContext } from "../context/context"
import { AntDesign } from "@expo/vector-icons"

function Profile() {
  const [openProfile, setOpenProfile] = useState(false)
  const { informationUser, token, $Exchange } = useContext(MyContext)
  const [colombianBanks, setColombianBanks] = useState()

  useEffect(() => {
    if (token && token !== "") {
      const fetchBanks = async () => {
        try {
          const { status, data } = await $Exchange.getBanks(token)

          if (status) {
            setColombianBanks(data.data)
          } else {
            console.log("Error fetching banks")
          }
        } catch (error) {
          console.error("Error fetching banks:", error)
        }
      }

      fetchBanks()
    }
  }, [$Exchange, token])
  return (
    <View
      style={{
        width: "100%",
        position: "relative",
        marginTop: 50
      }}>
      <TouchableOpacity
        onPress={() => setOpenProfile(true)}
        style={{
          borderWidth: 0.2,
          borderColor: "white",
          height: 30,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          position: "absolute",
          right: 20
        }}>
        <Text
          style={{
            color: "#fff"
          }}>
          Perfil
        </Text>
      </TouchableOpacity>
      {openProfile && (
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.2)",
            zIndex: 100,
            top: 0,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            gap: 10
          }}>
          <TouchableOpacity
            style={{ position: "absolute", top: 20, right: 20 }}
            onPress={() => setOpenProfile(false)}>
            <AntDesign name="closecircle" size={40} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#C3F53C",
              fontSize: 20,
              borderWidth: 0.2,
              borderColor: "#C3F53C",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 20
            }}>
            Nombre:{" "}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 0.2,
              borderColor: "gray",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 10
            }}>
            {informationUser?.user?.firstname}
          </Text>
          <Text
            style={{
              color: "#C3F53C",
              fontSize: 20,
              borderWidth: 0.2,
              borderColor: "#C3F53C",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 20
            }}>
            Teléfono:{" "}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 0.2,
              borderColor: "gray",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 10
            }}>
            {informationUser?.user?.cellphone}
          </Text>
          <Text
            style={{
              color: "#C3F53C",
              fontSize: 20,
              borderWidth: 0.2,
              borderColor: "#C3F53C",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 20
            }}>
            Email:{" "}
          </Text>

          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 0.2,
              borderColor: "gray",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 10
            }}>
            {informationUser?.user?.email}
          </Text>
          <Text
            style={{
              color: "#C3F53C",
              fontSize: 20,
              borderWidth: 0.2,
              borderColor: "#C3F53C",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 20
            }}>
            Wallet:{" "}
          </Text>

          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 0.2,
              borderColor: "gray",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 10
            }}>
            {informationUser?.user?.address_wallet_transfer_in}
          </Text>
          <Text
            style={{
              color: "#C3F53C",
              fontSize: 20,
              borderWidth: 0.2,
              borderColor: "#C3F53C",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 20
            }}>
            Banco asociado cuenta bancaria:{" "}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 0.2,
              borderColor: "gray",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 10
            }}>
            {
              colombianBanks.find(
                (bank) =>
                  bank.id === informationUser?.user?.id_bank_transfer_out
              ).name
            }
          </Text>
          <Text
            style={{
              color: "#C3F53C",
              fontSize: 20,
              borderWidth: 0.2,
              borderColor: "#C3F53C",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 20
            }}>
            Número de cuenta bancaria:
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 0.2,
              borderColor: "gray",
              width: "100%",
              textAlign: "center",
              padding: 5,
              borderRadius: 10
            }}>
            {informationUser?.user?.id_number_owner_account_bank_transfer}
          </Text>
        </View>
      )}
    </View>
  )
}

export default Profile
