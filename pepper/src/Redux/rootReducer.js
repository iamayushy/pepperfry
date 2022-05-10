import { combineReducers } from "redux";
import { creducer } from "./Cart/creducer";
import { pReducer } from "./Product/preducer";
import { wreducer } from "./Wish/wreducer";

const rootReducer = combineReducers({
    products: pReducer,
    cart: creducer,
    wish: wreducer,
})

export {rootReducer}