import axios from "axios"

export default class TicketService {
  constructor(token = null) {
    this.token = token
  }

  async getTickets(token) {
    try {
      const response = await axios.get(
        `https://transferx-backend.concilbot.com/api/v1/tickets`,
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

  async createTicket(token, body) {
    try {
      const response = await axios.post(
        `https://transferx-backend.concilbot.com/api/v1/tickets`,
        body,
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
