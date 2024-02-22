import React, {useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import ChatInput from "../components/ChatInput"
import UploadButtons from "../components/UploadButtons"
import FourCards from "../components/FourCards"
import BurgerMenuButton from "../components/BurgerMenuButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesChatWithOptionsView from "../styles/stylesChatWithOptionsView"
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native"

const ChatWithOptionsSection = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState()
  const [messages, setMessages] = useState([])
  const [showCards, setShowCards] = useState(true)
  const [showUploadButtons, setShowUploadButtons] = useState(false)
  const [selectedImage, setSelectedImage] = useState()
  const fontsLoaded = useLoadFonts()

  useEffect(() => {
    if (!messages[0] && !messages[1] && !selectedImage) return
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: 6, text: "", sender: "sent", img: String(selectedImage) }
      ])
    }, 500)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: 7,
          text: "Lovely choice! 👌 Now, let's break it down. I'd rate this ensemble a solid 7/10.",
          sender: "received"
        }
      ])
    }, 1000)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: 8,
          text: "Let’s bump it up, add a statement accessory like a chunky necklace or stylish belt. For an extra touch, try ankle boots from Aldo. ",
          sender: "received"
        }
      ])
    }, 1500)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: 9, text: " Find them at:  ", sender: "received" }
      ])
    }, 2000)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: 10,
          text: "",
          sender: "received",
          imagesShop: [
            "../../assets/DSW.png",
            "../../assets/hw.png",
            "../../assets/madden.png",
            "../../assets/ZARA.png"
          ]
        }
      ])
    }, 2000)
  }, [selectedImage])

  const handleCardPress = (index) => {
    setSelectedCard(index)
    setShowCards(false)
    const prdefinidedMessages = {
      0: "Can you rate my outfit?!",
      1: "What type of style would look good on me?",
      2: "Help me pick an outfit for a date.",
      3: "What's the latest fashion trend for chic style?"
    }

    setMessages([{ id: 4, text: prdefinidedMessages[index], sender: "sent" }])

    setTimeout(() => {
      if (prdefinidedMessages[0]) {
        setMessages((prev) => [
          ...prev,
          { id: 5, text: "Sure, send me a photo!?", sender: "received" }
        ])
        setTimeout(() => {
          setShowUploadButtons(true)
        }, 1000)
      }
    }, 1000)
  }


  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={stylesChatWithOptionsView.container}>
        <View style={stylesChatWithOptionsView.imageContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={stylesChatWithOptionsView.favicon}
          />
        </View>
        <View style={stylesChatWithOptionsView.imageContainer}>
          <BurgerMenuButton navigation={navigation} />
          <Image
            source={require("../../assets/iaphoto.png")}
            style={stylesChatWithOptionsView.image}
          />
        </View>
        {showCards && (
          <>
            <TouchableOpacity
              style={[
                stylesChatWithOptionsView.card,
                selectedCard === 0 && stylesChatWithOptionsView.selectedCard
              ]}
              onPress={() => handleCardPress(0)}>
              <Text
                style={[
                  stylesChatWithOptionsView.cardText,
                  selectedCard === 0 && stylesChatWithOptionsView.selectedText
                ]}>
                Can you rate my outfit?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesChatWithOptionsView.card,
                selectedCard === 1 && stylesChatWithOptionsView.selectedCard
              ]}
              onPress={() => handleCardPress(1)}>
              <Text
                style={[
                  stylesChatWithOptionsView.cardText,
                  selectedCard === 1 && stylesChatWithOptionsView.selectedText
                ]}>
                What type of style would look good on me?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesChatWithOptionsView.card,
                selectedCard === 2 && stylesChatWithOptionsView.selectedCard
              ]}
              onPress={() => handleCardPress(2)}>
              <Text
                style={[
                  stylesChatWithOptionsView.cardText,
                  selectedCard === 2 && stylesChatWithOptionsView.selectedText
                ]}>
                Help me pick an outfit for a date.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesChatWithOptionsView.card,
                selectedCard === 3 && stylesChatWithOptionsView.selectedCard
              ]}
              onPress={() => handleCardPress(3)}>
              <Text
                style={[
                  stylesChatWithOptionsView.cardText,
                  selectedCard === 3 && stylesChatWithOptionsView.selectedText
                ]}>
                What's the latest fashion trend for chic style?
              </Text>
            </TouchableOpacity>
          </>
        )}
        <View style={stylesChatWithOptionsView.chatContainer}>
          {messages[0] &&
            messages.map((message) => (
              <View key={message.id}>
                {message.img && selectedImage ? (
                  <View style={stylesChatWithOptionsView.imagePreview}>
                    <Image
                      source={{ uri: message.img }}
                      style={stylesChatWithOptionsView.previewImage}
                    />
                  </View>
                ) : message.text ? (
                  <View
                    style={[
                      stylesChatWithOptionsView.message,
                      message.sender === "sent"
                        ? stylesChatWithOptionsView.sentMessage
                        : stylesChatWithOptionsView.receivedMessage
                    ]}>
                    <Text
                      style={{
                        color: message.sender === "sent" ? "#2d2ade" : "white"
                      }}>
                      {message.text}
                    </Text>
                  </View>
                ) : message.imagesShop ? (
                  <FourCards
                    img={message.imagesShop[0]}
                    imgTwo={message.imagesShop[1]}
                    imgThree={message.imagesShop[2]}
                    imgFour={message.imagesShop[3]}
                  />
                ) : null}
              </View>
            ))}
        </View>

        {showUploadButtons && !selectedImage && (
          <UploadButtons
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </ScrollView>
      <ChatInput />
    </PageWrapper>
  )
}

export default ChatWithOptionsSection
