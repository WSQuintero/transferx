import React from "react"
import { Image, Text, TouchableOpacity, View, Linking } from "react-native"
import PageWrapper from "../components/PageWrapper"
import stylesContactView from "../styles/stylesContactView"
import BackButton from "../components/BackButton"
import FooterMenu from "../components/FooterMenu"

function ContactView({ navigation }) {
  return (
    <>
      <PageWrapper>
        <BackButton />
        <View style={stylesContactView.generalContainer}>
          <Text style={stylesContactView.generalTitle}>Contacto</Text>

          <View style={stylesContactView.containerChange}>
            <View>
              <Text style={stylesContactView.titleContainer}>
                Servicio de Asistencia
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("tickets")
                }}
                style={stylesContactView.button}>
                <Text style={{ color: "black", fontSize: 12 }}>
                  Crear ticket
                </Text>
                <Image source={require("../../assets/icons/send.png")} />
              </TouchableOpacity>
            </View>
            <View>
              <Image source={require("../../assets/rocket.png")} />
            </View>
          </View>
        </View>

        <Text style={stylesContactView.generalTitleTwo}>
          Detalles de Contacto
        </Text>
        <View style={stylesContactView.containerCard}>
          <View style={stylesContactView.mainContainer}>
            <View style={stylesContactView.leftContainer}>
              <Image
                source={require("../../assets/call.png")}
                style={stylesContactView.icon}
              />
            </View>
            <View style={stylesContactView.rightContainer}>
              <View style={stylesContactView.textContainer}>
                <Text style={stylesContactView.textTitle}>Teléfono</Text>
                <Text style={stylesContactView.text}>+57 312 4207521</Text>
              </View>
            </View>
          </View>

          <View style={stylesContactView.mainContainer}>
            <View style={stylesContactView.leftContainer}>
              <Image
                source={require("../../assets/whatsapp.png")}
                style={stylesContactView.icon}
              />
            </View>
            <TouchableOpacity
              style={stylesContactView.rightContainer}
              onPress={() =>
                Linking.openURL(
                  "https://api.whatsapp.com/send?phone=573124207521&text=Buen%20d%C3%ADa.%20Para%20saber%20"
                )
              }>
              <View style={stylesContactView.textContainer}>
                <Text style={stylesContactView.textTitle}>Whatsapp</Text>
                <Text style={stylesContactView.text}>+57 312 4207521</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={stylesContactView.mainContainer}>
            <View style={stylesContactView.leftContainer}>
              <Image
                source={require("../../assets/sms.png")}
                style={stylesContactView.icon}
              />
            </View>
            <View style={stylesContactView.rightContainer}>
              <View style={stylesContactView.textContainer}>
                <Text style={stylesContactView.textTitle}>Email</Text>
                <Text style={stylesContactView.text}>test@trasnferx.com</Text>
              </View>
            </View>
          </View>
        </View>
      </PageWrapper>
      <FooterMenu actual="contact" navigation={navigation} />
    </>
  )
}

export default ContactView
