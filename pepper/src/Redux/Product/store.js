import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../rootReducer";
import { pReducer } from "./preducer";

const store = createStore(rootReducer, applyMiddleware(thunk))

export {store}