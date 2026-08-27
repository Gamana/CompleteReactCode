import { useReducer } from "react";



// 1. Initial state
const initialState = {
  count: 0
};



// 2. Reducer function
function reducer(state, action) {


  switch (action.type) {


    case "INCREMENT":
      return {
        count: state.count + 1
      };


    case "DECREMENT":
      return {
        count: state.count - 1
      };


    case "RESET":
      return {
        count: 0
      };


    default:
      return state;
  }
}



// 3. React component
function App() {


  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );



  return (
    <div>
      <h1>UseReducer Counter</h1>


      <h2>Count: {state.count}</h2>


      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>


      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrease
      </button>


      <button
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}


export default App;