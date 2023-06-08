import { GetRecommendedPlayerAction } from "blackjack-strategy"

export const basicStrat = (player, dealer) => {
  const options = {
    hitSoft17: true, // Does dealer hit soft 17
    surrender: "none", // Surrender offered - none, late, or early
    double: "9or10or11", // Double rules - none, 10or11, 9or10or11, any
    // doubleRange:[0,21],         // Range of values you can double,
    // if set supercedes double (v1.1 or higher)
    doubleAfterSplit: true, // Can double after split
    resplitAces: false, // Can you resplit aces
    offerInsurance: true, // Is insurance offered
    numberOfDecks: 6, // Number of decks in play
    maxSplitHands: 4, // Max number of hands you can have due to splits
    count: {
      // Structure defining the count (v1.3 or higher)
      system: null, // The count system - only "HiLo" is supported
      trueCount: null,
    }, // The TrueCount (count / number of decks left)
    strategyComplexity: "simple", // easy (v1.2 or higher), simple, advanced,
  }
  return GetRecommendedPlayerAction(player, dealer, 1, true, options)
}
