import axios from "axios"
import Config from "react-native-config"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default class UserService {
  constructor(token) {
    this.API_URL = Config.API_URL
    this.token = token
  }

  async sendKYC(token, body) {
    try {
      const response = await axios.post(
        `https://transferx-backend.concilbot.com/api/v1/users/validate-kyc`, // Cambiar la URL a la URL local
        body,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data"
          }
        }
      )

      return { status: true, data: response.data }
    } catch (error) {
      return { status: false, data: error.response }
    }
  }
  async sendSarlaft(token, body) {
    try {
      const formData = body

      const headers = new Headers()
      headers.append("Authorization", token)

      const requestOptions = {
        method: "POST",
        headers: headers,
        body: formData,
        redirect: "follow"
      }

      const response = await fetch(
        "https://transferx-backend.concilbot.com/api/v1/users/linking", // Cambiar la URL a la URL local
        requestOptions
      )

      const data = await response.json()

      if (response.ok) {
        return { status: true, data: data }
      } else {
        return { status: false, data: data }
      }
    } catch (error) {
      return { status: false, data: error }
    }
  }

  async getLastSarlaft(token) {
    try {
      const response = await axios.get(
        `https://transferx-backend.concilbot.com/api/v1/users/link`,
        {
          headers: {
            Authorization: token
          }
        }
      )

      return { status: true, data: response.data }
    } catch (error) {
      return { status: false, data: error.response }
    }
  }
}
