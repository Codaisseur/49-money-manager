// src/store/account/reducer.js
const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  console.log("State in reducer", state);
  console.log("Action in reducer", action);
  // console.log("An action has been fired with type:", action.type);

  switch (action.type) {
    case "account/deposit": {
      // THIS WILL BREAK TIME TRAVEL AMONG OTHER THINGS
      // BECAUSE OUR REDUCER WILL NOT BE PURE ANYMORE:
      // state.amount += action.payload;
      // return state;

      // THIS IS THE PROPER WAY OF DOING IT
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
