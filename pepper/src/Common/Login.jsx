import reg from '../Common/reg.module.css'
import {FcGoogle} from 'react-icons/fc'
import { useState } from 'react'

const Login = ({mover}) => {
    const [userDetail, setUserDetail] = useState({
        email:'',
        password:''
    })

    const getChange = (e)=> {
        const {value, name} = e.target

        setUserDetail({
            ...userDetail,
            [name]:value
        })
        console.log(userDetail)
    }

    const getIn = (e) => {
        e.preventDefault()
        fetch('https://reqres.in/api/register',{
            method:'POST',
            body:JSON.stringify(userDetail),
            
        })
        .then((res) => res.json())
        .then((ans) => console.log(ans))

    
    }
    return(
        <div className={reg.cont}>
            <div className={reg.ib}>
                <img src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg" alt="" />
            </div>
            <div className={reg.fm}>
                <form className={reg.form} onSubmit={getIn}>
                    <input name='email' onChange={getChange} value={userDetail.email} required type="email" placeholder="Email"/>
                    <input name='password' onChange={getChange} value={userDetail.password} placeholder='Password' type="password"/>
                    <input  type="submit" value="Login"/>
                    <p>By registering you agree to our <span style={{textDecorationLine:'underline'}}>Terms & Conditions</span></p>
                

                </form>

                <div className={reg.glo}>
                    <button onClick={mover}>New User ? Register</button>
                    <div style={{display:'flex',alignItems:'center', gap:'1.5rem', marginTop:'1rem'}}>
                        
                        <span>or continue with </span><FcGoogle size='2rem'/>
                    </div>
                </div>
        </div>
    </div>
    )
}
export {Login}
