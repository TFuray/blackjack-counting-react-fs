import { addCardToHand, setDealerTotal } from "@slices/dealer/dealerSlice"
import { calcTotal } from "./utils/calcTotal/calcTotal"
import { useDispatch } from "react-redux"
import { useDrawOneQuery } from "@slices/api/cards/cardsApiSlice"
import { apiSlice } from "@slices/api/apiSlice"

export const hitDealer = async (dealerHand) => {
  const dispatch = useDispatch()
  const { data } = useDrawOneQuery()

  dispatch(addCardToHand(data.cards[0]))
  calcTotal(dealerHand, dispatch, setDealerTotal)
  dispatch(apiSlice.util.resetApiState())
}
