import { combineReducers } from "redux";
import { productReducer } from "./Productreducer";

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;