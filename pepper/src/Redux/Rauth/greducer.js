import { GOOGLE_AUTH, IS_AUTH, LOGOUT, USER_IN } from "./action"

const init = {
    userDetail : {},
    userid: {},
    profile: {}
    
}

const greducer = (store = init, action) => {
    switch(action.type){
        case GOOGLE_AUTH:
            return{
                ...store,
                userDetail: {...action.payload}
                
            }
        case IS_AUTH:{
            return{
                ...store,
                userid: {
                    login: true,
                    detail: action.payload,
                    
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
        case USER_IN:{
            return{
                ...store,
                profile: action.payload
            }
        }
        default:
            return store
    }
}

export {greducer}