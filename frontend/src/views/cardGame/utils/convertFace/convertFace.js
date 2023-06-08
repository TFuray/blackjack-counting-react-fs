export const convertFace = (hand) => {
  let array = []
  if (!hand) {
    return null
  }
  hand.map((card) => {
    if (
      card.value === "KING" ||
      card.value === "QUEEN" ||
      card.value === "JACK"
    ) {
      return array.push(10)
    } else if (card.value === "ACE") {
      return array.push(1)
    } else {
      return array.push(Number(card.value))
    }
  })
  console.log(array)
  return array
}
