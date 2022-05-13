import { auth, provider } from "../../../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { Detail } from "../../Components/Detail";
const GOOGLE_AUTH = "GOOGLE_AUTH";
const IS_AUTH = 'IS_AUTH';
const LOGOUT = 'LOGOUT';
const USER_IN = 'USER_IN'
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

const getUser = (userDetail) => (
    {
        type: USER_IN,
        payload: userDetail
    }
)

const userLogOut = (data) => ({
    type: LOGOUT,
    payload: data
})

const getGAuth = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const cred = GoogleAuthProvider.credentialFromResult(result)
                const token = cred.accessToken;

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
            if (cred) {
                const uid = cred.uid
                const name = cred.displayName
                const detail = {
                    token: cred.uid,
                    uid: cred.getIdToken(),
                    displayName : cred.displayName,
                    email : cred.email,
                    phone: cred.phoneNumber,
                    photoURL : cred.photoURL,
                    emailVerified : cred.emailVerified,
                }
                dispatch(getCurrenUser(detail))
            }

            else {
                console.log('User Does Not Exist')
            }
        })
    }
}

const fetchUser = () => {
    return (dispatch) => {
        let detail
        const user = auth.currentUser
        if (user !== null) {
            detail = {
                displayName : user.displayName,
                email : user.email,
                photoURL : user.photoURL,
                emailVerified : user.emailVerified,
            }
        }

        dispatch(getUser(detail))
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

export {USER_IN,fetchUser,getUser, LOGOUT, signMeOut, userLogOut, fetchAuth, getGAuth, GOOGLE_AUTH, IS_AUTH, getCurrenUser, getCurrent }