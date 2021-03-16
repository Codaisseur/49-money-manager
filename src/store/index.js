import { combineReducers, createStore } from "redux";
import accountReducer from "./account/reducer";
import teacherReducer from "./teacher/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  combineReducers({
    account: accountReducer,
    teacher: teacherReducer,
  }),
  enhancer
);

export default store;
