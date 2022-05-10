import { GET_WISH } from "./action"

const init = {
    wish: []
}


const wreducer = (store = init, action) => {
    switch(action.type){
        case GET_WISH:
            return{
                ...store,
                wish: action.payload
            }
        default:
            return store
    }
}

export {wreducer}