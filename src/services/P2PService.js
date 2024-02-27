import axios from "axios"
import Config from "react-native-config"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default class P2PService {
  constructor(token) {
    this.API_URL = Config.API_URL
    this.token = token
  }

  async getBanks(token) {
    try {
      const response = await axios.get(
        "https://transferx-backend.concilbot.com/api/v1/users/banks",
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
  async updateWallet(token, newWalletAddress) {
    try {
      const response = await axios.put(
        "https://transferx-backend.concilbot.com/api/v1/users/update-wallet-address",
        {
          address_wallet_transfer_in: newWalletAddress
        },
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

  async updateInformationBank(token, informationBank) {
    try {
      const response = await axios.put(
        "https://transferx-backend.concilbot.com/api/v1/users/update-bank",
        informationBank,
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

  async getP2PRate(token) {
    try {
      const response = await axios.get(
        "https://transferx-backend.concilbot.com/api/v1/userP2P/rate",
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

  async getP2PRate(token) {
    try {
      const response = await axios.get(
        "https://transferx-backend.concilbot.com/api/v1/userP2P/rate",
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

  async getP2PQuote(token, usdt) {
    try {
      const response = await axios.get(
        `https://transferx-backend.concilbot.com/api/v1/userP2P/quote/${usdt}`,
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

  async p2pRequest(token, amount) {
    try {
      const response = await axios.post(
        `https://transferx-backend.concilbot.com/api/v1/userP2P/`,
        {
          amount_currency_in: amount,
          hash_transfer_in:
            "98322f96be989f2844bb663afbd906d26363a5ec9eb1de7499abd6b19cbf20a9"
        },
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

  async p2pGetAllRequest(token) {
    try {
      const response = await axios.get(
        `https://transferx-backend.concilbot.com/api/v1/userP2P/`,
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
