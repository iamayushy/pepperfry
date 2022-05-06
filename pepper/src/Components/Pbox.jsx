import pb from '../Components/pbox.module.css'
import rev from '../assets/rev.png'

const Pbox = ({name, desc, price, number, out, image, increase, reduce}) => {
    return(
        <>
        <div className={pb.items}>
                    <div className={pb.ig}>
                        <img src={image} alt="mock" />
                    </div>
                    <div className={pb.deal}>
                        <h4>{name}</h4>
                        <p>{desc}</p>
                        <p className={pb.price}>&#8377; {price}</p>

                        <div className={pb.redux}>
                            <div>
                                <button onClick={reduce}>-</button>
                                {number}
                                <button onClick={increase}>+</button>
                            </div>
                            <div onClick={out} className={pb.rem}>
                                Remove
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}
export {Pbox}