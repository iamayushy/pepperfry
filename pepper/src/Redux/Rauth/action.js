import { auth, provider } from "../../../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
const GOOGLE_AUTH = "GOOGLE_AUTH";
const IS_AUTH = 'IS_AUTH';
const LOGOUT = 'LOGOUT';
const fetchAuth = (userdata) => (
    {
        type: GOOGLE_AUTH,
        payload: userdata
    }
)
const getCurrenUser = (uid) => ({
    type: IS_AUTH,
    payload: uid
})

const userLogOut = (data) => ({
    type : LOGOUT,
    payload: data
})

const getGAuth = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const cred = GoogleAuthProvider.credentialFromResult(result)
            const token  = cred.accessToken;

            const user = result.user;
            dispatch(fetchAuth(user))
            
        })
        .catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
           
            const email = error.email;
          
            const credential = GoogleAuthProvider.credentialFromError(error);
            
          });
    }
}

const getCurrent = () => {
    return (dispatch) => {
        onAuthStateChanged(auth, (cred) => {
            if(cred){
                const uid = cred.uid
                dispatch(getCurrenUser(uid))
            }

            else{
                console.log('User Does Not Exist')
            }
        })
    }
}


const signMeOut = () => {
    return (dispatch) => {
       signOut(auth)
       .then(() => {
           dispatch(userLogOut(false))
       })
       .catch((err) => {
           console.log('error', err)
       })
    }
}

export {LOGOUT,signMeOut,userLogOut ,fetchAuth, getGAuth, GOOGLE_AUTH, IS_AUTH, getCurrenUser, getCurrent}