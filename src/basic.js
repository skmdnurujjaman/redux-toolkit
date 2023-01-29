import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      let newInc = state + action.payload;
      return newInc;

    case "DECREMENT":
      let newDec = state - action.payload;
      return newDec;

    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("current state", store.getState());
});

store.dispatch({
  type: "INCREMENT",
  payload: 1,
});
store.dispatch({
  type: "INCREMENT",
  payload: 5,
});
store.dispatch({
  type: "DECREMENT",
  payload: 1,
});
