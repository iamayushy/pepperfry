import {FcGoogle} from 'react-icons/fc'
import reg from '../Common/reg.module.css'
const Register = ({mover}) => {
    return(
        <div className={reg.cont}>
            <div className={reg.ib}>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_21042022.jpg" alt="" />
            </div>

            <div className={reg.fm}>
                <form className={reg.form}>
                    <input required type="text" placeholder="Name" />
                    <input required type="email" placeholder="Email"/>
                    <input required placeholder='Password' type="password" pattern="password"/>
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