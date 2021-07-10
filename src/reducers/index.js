import { combineReducers } from "redux";

import helloReduser from "./test/hello";

const rootReducer = combineReducers({
  greeting: helloReduser,
});

export default rootReducer;
