import { GOOGLE_AUTH, IS_AUTH, LOGOUT } from "./action"

const init = {
    userDetail : {},
    userid: {}
}

const greducer = (store = init, action) => {
    switch(action.type){
        case GOOGLE_AUTH:
            return{
                ...store,
                userDetail: action.payload
            }
        case IS_AUTH:{
            return{
                ...store,
                userid: {
                    login: true,
                    token: action.payload
                }
            }
        }
        case LOGOUT:{
            return{
                ...store,
                userid:{
                    login: action.payload,
                    token: null
                }
            }
        }
        default:
            return store
    }
}

export {greducer}