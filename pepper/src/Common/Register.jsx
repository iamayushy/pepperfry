import {FcGoogle} from 'react-icons/fc'
import reg from '../Common/reg.module.css'
import { useState } from 'react'

const Register = ({mover}) => {

    
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
        console.log(userDetail)
    }

    const getIn = (e) => {
        e.preventDefault()
    
    }
    



    return(
        <div className={reg.cont}>
            <div className={reg.ib}>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_21042022.jpg" alt="" />
            </div>

            <div className={reg.fm}>
                <form className={reg.form} onSubmit={getIn}>
                    <input onChange={getChange} value={userDetail.name} required type="text" placeholder="Name" name='name'/>
                    <input onChange={getChange} value={userDetail.email} required type="email" placeholder="Email" name='email'/>
                    <input onChange={getChange} value={userDetail.password} placeholder='Password' type="password" name='password'/>
                    <input  type="submit" value="Register"/>
                    <p>By registering you agree to our <span style={{textDecorationLine:'underline'}}>Terms & Conditions</span></p>

                </form>

                <div className={reg.glo}>
                    <button onClick={mover}>Existing User ? Login</button>
                    <div style={{display:'flex',alignItems:'center', gap:'1.5rem', marginTop:'1rem'}}>
                        
                        <span>or continue with </span><FcGoogle size='2rem'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Register}