import { combineReducers } from "redux";
import { creducer } from "./Cart/creducer";
import { pReducer } from "./Product/preducer";

const rootReducer = combineReducers({
    products: pReducer,
    cart: creducer
})

export {rootReducer}