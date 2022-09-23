import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rooteReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;