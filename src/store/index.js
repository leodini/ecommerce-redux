import { createStore, combineReducers } from "redux";
import carReducer from "./cars";
import layoutReducer from "./layout";

const rootReducer = combineReducers({
  carReducer,
  layoutReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
