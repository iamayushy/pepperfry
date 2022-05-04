import  pr from '../Common/pro.module.css'
const ProductC = () => {
    return(
        <div className={pr.container}>
            <div className={pr.desc}>
                <div className={pr.pic}>
                    <img src="https://ii2.pepperfry.com/media/catalog/product/a/m/494x544/amanda-seater-sofa-set--2-2-1-c--in-dark-grey-colour-by-primrose-amanda-seater-sofa-set--2-2-1-c--in-xuqjgk.jpg" alt="random shit" />
                    <button>ADD TO CART</button>
                </div>
                <div className={pr.det}>
                    <h1>Amanda Corner Sofa</h1>
                    <span style={{color:'gray'}}>Promisine</span>
                    <h3>&#8377; 45,3000</h3>
                    <span>34% off</span>
                </div>
            </div>
        </div>
    )
}

export {ProductC}