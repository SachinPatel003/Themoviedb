import { combineReducers } from "redux";
import { productReducer } from "./Productreducer";
import { productStatus } from "./status";

const rootReducer = combineReducers({
  productReducer,
  productStatus
});

export default rootReducer;