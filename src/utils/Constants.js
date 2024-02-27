export const TEST = "test"

export const handleCall = async (callback) => {
  if (!callback) {
    return { status: false, data: null }
  }
  try {
    return { status: true, data: await callback() }
  } catch (error) {
    return { status: false, data: error }
  }
}

export function formatNumber(number) {
  const [integerPart, decimalPart] = number.toString().split(".")
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  return decimalPart
    ? `${formattedIntegerPart},${decimalPart}`
    : formattedIntegerPart
}

export function formatDateTime(dateTimeString) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  const date = new Date(dateTimeString)

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const meridiem = hours < 12 ? "AM" : "PM"
  const formattedHours = hours % 12 || 12
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes

  const formattedDate = `${formattedHours}:${formattedMinutes} ${meridiem} . ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`

  return formattedDate
}
