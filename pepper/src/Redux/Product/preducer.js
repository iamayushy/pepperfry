import { FETCH_ONE, FETCH_ORDERS, FETCH_PRODUCTS } from "./action"

const init = {
    products: [],
    details: {},
    order: []
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
        case FETCH_ORDERS:{
            return{
                ...store,
                order: action.payload
            }
        }

        default:
            return store
    }
}

export {pReducer}