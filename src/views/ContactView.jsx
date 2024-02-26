import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import PageWrapper from "../components/PageWrapper";
import stylesContactView from "../styles/stylesContactView";
import BackButton from "../components/BackButton";
import FooterMenu from "../components/FooterMenu";

function ContactView({navigation}) {

  return (
    <>
    <PageWrapper>
      <BackButton/>
      <View style={stylesContactView.generalContainer}>
      <Text style={stylesContactView.generalTitle}>Contact</Text>

      <View style={stylesContactView.containerChange}>
      <View>
        <Text style={stylesContactView.titleContainer}>
          Instant Help Desk
        </Text>
        <TouchableOpacity onPress={() => {}} style={stylesContactView.button}>
          <Text style={{ color: "black",fontSize:12 }}>Send Message</Text>
          <Image source={require("../../assets/icons/send.png")}/>
        </TouchableOpacity>
        </View>
        <View>
          <Image source={require("../../assets/rocket.png")}/>
        </View>
      </View>
      </View>

      <Text style={stylesContactView.generalTitleTwo}>Contact Details</Text>
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
              <Text style={stylesContactView.textTitle}>Phone</Text>
              <Text style={stylesContactView.text}>
              00 234 455 0000
              </Text>
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
          <View style={stylesContactView.rightContainer}>
            <View style={stylesContactView.textContainer}>
              <Text style={stylesContactView.textTitle}>Whatsapp</Text>
              <Text style={stylesContactView.text}>
              00 234 455 0000
              </Text>
            </View>
          </View>
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
              <Text style={stylesContactView.text}>
              00 234 455 0000
              </Text>
            </View>
          </View>
        </View>
    </View>
    </PageWrapper>
    <FooterMenu actual="contact" navigation={navigation}/>
    </>
  );
}

export default ContactView;
