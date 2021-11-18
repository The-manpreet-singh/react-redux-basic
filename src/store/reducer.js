const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        counter: state.counter + action.val,
      };
    case "SUBTRACT":
      return {
        counter: state.counter - action.val,
      };
    default:
  }
  return state;
};

export default reducer;
