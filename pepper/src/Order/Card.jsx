import bg from '../assets/bj.png'
import  dec from '../Order/decor.module.css'
const Card = ({name, phone, address, children}) => {
    return(
        <div className={dec.cc}>
            
            <div className={dec.im}>
                <img  src= {''} alt="" />
            </div>
            <div className={dec.text}>
                
                {children}
                <h3>Name: <b>{name}</b></h3>
                <p style={{color:'black', fontWeight:'600'}}>Phone: {phone}</p>
                <p style={{color:'black', fontWeight:'600'}}>Address: {address}</p>
                
            </div>
        </div>

    )
}
export {Card}