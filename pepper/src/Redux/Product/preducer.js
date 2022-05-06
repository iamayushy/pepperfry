import { FETCH_ONE, FETCH_PRODUCTS } from "./action"

const init = {
    products: [],
    details: {}
}
const pReducer = (store = init, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            return{
                ...store,
                products: action.payload
            }
        case FETCH_ONE:{
            return{
                ...store,
                details:action.payload
            }
        }

        default:
            return store
    }
}

export {pReducer}