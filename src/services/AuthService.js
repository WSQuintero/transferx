import axios from "axios"
import Config from "react-native-config"

export default class AuthService {
  constructor(token = null) {
    this.API_URL = Config.API_URL
    this.token = token
  }

  async signUp({ firstname, lastname, email, cellphone, password }) {
    try {
      const response = await axios.post(
        "http://transferx-backend.concilbot.com/api/v1/users/signup",
        {
          firstname,
          lastname,
          email,
          cellphone,
          password
        }
      )

      return { status: true, data: response.data }
    } catch (error) {
      return { status: false, data: error.response }
    }
  }

  async signIn({ email, password }) {
    try {
      const response = await axios.post(
        "http://transferx-backend.concilbot.com/api/v1/users/signin",
        {
          email,
          password
        }
      )

      return { status: true, data: response.data }
    } catch (error) {
      return { status: false, data: error.response }
    }
  }

  // Otros métodos de la clase...
}
