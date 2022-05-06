import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { pReducer } from "./preducer";

const store = createStore(pReducer, applyMiddleware(thunk))

export {store}