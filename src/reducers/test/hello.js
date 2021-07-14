const initState = {
  fact: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_FACT":
      return {
        ...state,
        fact: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
