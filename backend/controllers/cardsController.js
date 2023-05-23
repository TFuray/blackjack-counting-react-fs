import axios from "axios"

const deckId = "e8112km1zqho"
const baseUrl = `https://deckofcardsapi.com/api/deck/${deckId}`

const shuffleCards = async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/shuffle`)
    res.json(response.data)
  } catch (error) {
    console.error("Error retrieving deck:", error)
    res.status(500).json({ error: "Failed to retrieve deck" })
  }
}

const dealHand = async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/draw?count=2`)
    res.json(response.data)
  } catch (error) {
    console.error("Error retrieving deck:", error)
    res.status(500).json({ error: "Failed to retrieve deck" })
  }
}

const drawOne = async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/draw?count=1`)
    res.json(response.data)
  } catch (error) {
    console.error("Error retrieving deck:", error)
    res.status(500).json({ error: "Failed to retrieve deck" })
  }
}

export { shuffleCards, dealHand, drawOne}