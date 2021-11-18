const redux= require('redux');
const createStore = redux.createStore;

const initialState= {
    counter: 0
}

//Reducer- it takes 2 arguments old state and action
const rootReducer = (state= initialState, action) => {
    return state;
};

//Store
const store= createStore(rootReducer);
console.log(store.getState()); // to verify the store

//Dispatching Action


//Subscription