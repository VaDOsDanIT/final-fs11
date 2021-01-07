import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReduser";

const { applyMiddleware, combineReducers, createStore } = require("redux");
const reducer = combineReducers({
});

export default () => {
  return createStore(
    composeWithDevTools(applyMiddleware(thunk))
  );
};
