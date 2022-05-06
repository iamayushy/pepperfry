import { useEffect, useState } from 'react'
import cart from '../Components/cart.module.css'
import {Group} from '@mantine/core'
import { Pbox } from './Pbox'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Redux/Cart/action'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const navs = useNavigate()
    const allcart = useSelector(store => store.cart.cart)
    const dispatch = useDispatch()
    const [carts, setcartDetails] = useState([])
    const [ac, setAC] = useState(0)
    const [count, setCount] = useState(0)
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

    
    

    const UpdateCart = (indo, data) => {
        fetch(`http://localhost:3004/cart/${indo}`, {
            method: "PUT",
            body: JSON.stringify({
                ...data,
                "count": data.count + 1
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => dispatch(getCart()))
            .catch((err) => console.log(err));
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3004/cart/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((response) => response.json())
            .then((json) => dispatch(getCart()))
            .catch((err) => console.log(err));
    }

    const UpdateCartD = (indo, data) => {
        fetch(`http://localhost:3004/cart/${indo}`, {
            method: "PUT",
            body: JSON.stringify({
                ...data,
                "count": data.count - 1
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => dispatch(getCart()))
            .catch((err) => console.log(err));
    }

    
    
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
            increase={() =>UpdateCart(usr.id, usr)}
            reduce={() => UpdateCartD(usr.id,usr)}
            handle={() => handleDelete(usr.id)}
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
            <button onClick={() => allcart.length > 0? navs('/checkout'):navs('/')} className={cart.confirm}>{allcart.length > 0 ? 'Confirm Your Order': 'Cart Is Empty'}</button>
            </Group>
        </div>
    </>
    )
}
export {Cart}