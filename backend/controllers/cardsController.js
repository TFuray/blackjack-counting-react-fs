import axios from "axios"

const deckId = "uvqxjozsb08l"
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
    const response = await axios.get(`${baseUrl}/draw?count=4`)
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


export { dealHand, drawOne, shuffleCards }
