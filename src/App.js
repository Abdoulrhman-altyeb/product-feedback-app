import React from "react";
import greeting from "./actions/greeting";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const hello = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{hello}</p>
      <button onClick={() => dispatch(greeting())}>say hello</button>
    </div>
  );
}

export default App;
