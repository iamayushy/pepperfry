import { Accordion } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Redux/Cart/action'
import { Pbox } from '../Components/Pbox'
import ck from '../Pages/ck.module.css'
const CheckOut = () => {
    const allCart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const [sum, setSum] = useState(0)
    useEffect(() => {
        dispatch(getCart())
    },[])
    let num = 0
    allCart.forEach((ele) => {
        num += ele.Price
    })
    useEffect(() => {
        setSum(num)
    })
    
    return (
        <div className={ck.cont}>
            <div className={ck.acc}>
                <Accordion iconPosition="right" iconSize={10}>
                    <Accordion.Item label="Your Cart">
                        <div>
                        {allCart.map(usr => (<Pbox key={usr.id}
                            name={usr.name}
                            price={usr.Price}
                            desc={usr.title}
                            number={usr.count}
                            image={usr.image}
                            increase={() => UpdateCart(usr.id, usr)}
                            reduce={() => UpdateCartD(usr.id, usr)}
                            handle={() => handleDelete(usr.id)}
                        /> ))}
                        </div>
                    </Accordion.Item>

                    <Accordion.Item label="Address">
                        <form className={ck.form}>
                            <input type="text" placeholder='Full Name' name="" id="" />
                            <input type="text" placeholder='City' name="" id="" />
                            <input type="text" placeholder='State' name="" id="" />
                            <input type="text" placeholder='Address' name="" id="" />
                            <input type="number" placeholder='Phone No'/>
                            <input type="submit" name="" id="" />
                        </form>
                    </Accordion.Item>

                    <Accordion.Item label="Payment">

                        <div className={ck.fed}>
                            <div style={{color:'green'}}>
                                <p>Total Items</p>
                                <p>Total Cost</p>
                            </div>
                            <div style={{color:'red'}}>
                                <p>{allCart.length}</p>
                                <p>&#8377; {sum}</p>
                            </div>
                        </div>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className={ck.pay}>

            </div>
        </div>
    )
}
export { CheckOut }