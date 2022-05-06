import { Link } from 'react-router-dom'
import  pr from '../Common/pro.module.css'
const ProductC = ({image, price, brand, name, rou, pid}) => {
    
    return(
        <div  className={pr.container}>
            <Link to={`/${rou}/${pid}`}>
            <div className={pr.desc}>
                <div className={pr.pic}>
                    <img src={image} alt="random shit" />
                    <button>ADD TO CART</button>
                </div>
                <div className={pr.det}>
                    <h1>{name}</h1>
                    <span style={{color:'gray'}}>{brand}</span>
                    <h3>&#8377; {price}</h3>
                    <span>34% off</span>
                </div>
            </div>
            </Link>
        </div>
    )
}

export {ProductC}