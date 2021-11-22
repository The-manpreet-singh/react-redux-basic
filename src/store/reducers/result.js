import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }), // set new Date for a unique id pass as a js object results: state.results.concat(state.counter)
      };
    case actionTypes.DELETE_RESULT:
      // const id= 2;
      // const newArray = [...state.results];
      // newArray.splice(id,1)
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      ); // filter method bascially created new array
      return {
        ...state,
        results: updatedArray,
      };
    default:
  }
  return state;
};

export default reducer;
