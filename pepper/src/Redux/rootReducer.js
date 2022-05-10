import { combineReducers } from "redux";
import { creducer } from "./Cart/creducer";
import { pReducer } from "./Product/preducer";
import { greducer } from "./Rauth/greducer";
import { wreducer } from "./Wish/wreducer";

const rootReducer = combineReducers({
    products: pReducer,
    cart: creducer,
    wish: wreducer,
    gauth: greducer,
})

export {rootReducer}