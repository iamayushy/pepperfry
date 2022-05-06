import { FETCH_WISH } from "./action"

const init ={
    love: false,
    lovedata: []
}

const wreducer = (store = init, action) => {
    switch(action.type){
        case FETCH_WISH:{
            return{
                ...store,
                lovedata:action.payload,
                meta: true
            }
        }
        default:
            return store
    }
}

export {wreducer}