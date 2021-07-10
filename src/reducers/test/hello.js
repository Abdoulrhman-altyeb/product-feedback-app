const initState = {
  greeting: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GREETING":
      return {
        ...state,
        greeting: "hiii",
      };

    default:
      return state;
  }
};

export default reducer;
