import { combineReducers } from "redux";

import helloReduser from "./test/hello";

const rootReducer = combineReducers({
  randomFact: helloReduser,
});

export default rootReducer;
