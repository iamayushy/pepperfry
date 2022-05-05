import reg from '../Common/reg.module.css'
import {FcGoogle} from 'react-icons/fc'

const Login = ({mover}) => {
    return(
        <div className={reg.cont}>
            <div className={reg.ib}>
                <img src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg" alt="" />
            </div>
            <div className={reg.fm}>
                <form className={reg.form}>
                    <input required type="email" placeholder="Email"/>
                    <input required placeholder='Password' type="password" pattern="password"/>
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
