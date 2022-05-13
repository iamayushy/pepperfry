import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from "../rootReducer";
import { pReducer } from "./preducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export {store}