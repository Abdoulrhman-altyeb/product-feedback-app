import axios from "axios";
const greeting = () => async (dispatch) => {
  const fact = await axios.get("http://numbersapi.com/random/math");
  console.log(fact);
  dispatch({
    type: "GET_FACT",
    payload: fact.data,
  });
};

export default greeting;
