import axios from "axios"
import Config from "react-native-config"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default class UserService {
  constructor(token) {
    this.API_URL = Config.API_URL
    this.token = token
  }

  async sendKYC(body) {
    try {
      const response = await axios.post(
        `${this.API_URL}/users/validate`,
        body,
        {
          headers: {
            Authorization: this.token
          }
        }
      )

      return { status: true, data: response.data }
    } catch (error) {
      return { status: false, data: error.response }
    }
  }
}
