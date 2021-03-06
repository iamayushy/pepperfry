import {FcGoogle} from 'react-icons/fc'
import reg from '../Common/reg.module.css'
import { useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrent, getGAuth } from '../Redux/Rauth/action'

const Register = ({mover, close, handle}) => {


    
    const user = useSelector(store => store.gauth.userDetail)
    const auth = useSelector(store => store.gauth.userid)

    const dispatch = useDispatch()
    const [userDetail, setUserDetail] = useState({
        name:'',
        email:'',
        password:''
    })
    
    const getChange = (e)=> {
        const {value, name} = e.target

        setUserDetail({
            ...userDetail,
            [name]:value
        })
        
    }

   

    const getIn = (e) => {
        e.preventDefault()
        fetch('https://reqres.in/api/logi',{
            method:'POST',
            body:JSON.stringify(userDetail)
        })
        .then((res) => console.log(res))
    
    }


    



    return(
        <div className={reg.cont}>
            <div className={reg.ib}>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_21042022.jpg" alt="" />
            </div>

            <div className={reg.fm}>
                <form className={reg.form} onSubmit={getIn}>
                    <input onChange={getChange} disabled value={userDetail.name} required type="text" placeholder="Use GOOGLE SIGN IN  😅" name='name'/>
                    <input onChange={getChange} disabled value={userDetail.email} required type="email" placeholder="Email" name='email'/>
                    <input onChange={getChange} disabled value={userDetail.password} placeholder='Password' type="password" name='password'/>
                    <input onClick={close}  type="submit" value="Register"/>
                    <p>By registering you agree to our <span style={{textDecorationLine:'underline'}}>Terms & Conditions</span></p>

                </form>

                <div className={reg.glo}>
                    <button onClick={mover}>Existing User ? Login</button>
                    <div style={{display:'flex',alignItems:'center', gap:'1.5rem', marginTop:'1rem'}}>
                        
                        <span>or continue with </span><FcGoogle onClick={handle} size='2rem'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Register}