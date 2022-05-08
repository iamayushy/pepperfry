import { FETCH_CART } from "./action"

const init = {
   
    cart : []
}

const creducer = (store = init, action) => {
    switch(action.type){
        case FETCH_CART:
            return{
                ...store,
                
                cart:action.payload,
               
              
            }
        
        default:
            return store
    }
}
export {creducer}