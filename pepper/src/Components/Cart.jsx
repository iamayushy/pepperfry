import { useEffect, useState } from 'react'
import cart from '../Components/cart.module.css'
import {Group} from '@mantine/core'
import { Pbox } from './Pbox'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Redux/Cart/action'
const Cart = () => {
    const allcart = useSelector(store => store.cart.cart)
    const dispatch = useDispatch()
    const [carts, setcartDetails] = useState([])
    const [ac, setAC] = useState(0)
    const click = [
        {name:'MY CART', index: 0},
        {name:'MY WISHLIST', index: 1},
        {name:'RECENT', index:2}
    ]

    useEffect(() => {
        // fetch('http://localhost:3004/cart')
        // .then(res => res.json())
        // .then(ans => setcartDetails(ans))

        dispatch(getCart())
        
    }, [])

    
    
    console.log(carts);

    return(
        <>
        <div className={cart.cont}>
            <div className={cart.nav}>
                <ul className={cart.clinks}>
                    {click.map((list) => (
                        <div  key={list.index}>
                        <li onClick={() => {
                            setAC(list.index)
                        }}  className={ list.index === ac ?`${cart.active}`:`${cart.not}`}>{list.name}</li>
                        
                        </div>
                    ))}
                </ul>
            </div>
            
            {/* <div className={cart.all}> */}
            <div className={cart.float}>
            {ac === 0 && allcart.map( usr => (<Pbox key={usr.id}
            name={usr.name}
            price={usr.Price}
            desc={usr.title}
            number={usr.count}
            image={usr.image}
            />))}
            </div>

            <div className={cart.float}>
            {ac === 1 && carts.map( usr => (<Pbox key={usr.id}
            name={usr.name}
            price={usr.Price}
            desc={usr.title}
            number={usr.count}
            image={usr.image}
            />))}
            </div>

            
            
            
            {/* </div> */}
            <Group position='center'>
            <button className={cart.confirm}>Confirm The Order</button>
            </Group>
        </div>
    </>
    )
}
export {Cart}