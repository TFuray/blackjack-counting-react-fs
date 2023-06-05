export const calcTotal = (hand, dispatch, setTotal) => {
  let temTotal = hand.map((data) => {
    if (data.value === "ACE") {
      return 11;
    } else if (data.value === "KING") {
      return 10;
    } else if (data.value === "QUEEN") {
      return 10;
    } else if (data.value === "JACK") {
      return 10;
    } else {
      return Number(data.value);
    }
  });
  let tempTotal = temTotal.reduce((acc, val) => acc + val, 0);
  dispatch(setTotal(tempTotal));
};