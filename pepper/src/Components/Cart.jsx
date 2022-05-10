import { useEffect, useState } from 'react'
import cart from '../Components/cart.module.css'
import {Group, Loader, Transition} from '@mantine/core'
import { Pbox } from './Pbox'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Redux/Cart/action'
import { useNavigate } from 'react-router-dom'
import { Wish } from './Wish'
import { fetchWish } from '../Redux/Wish/action'

const Cart = () => {
    const navs = useNavigate()
    const allcart = useSelector(store => store.cart.cart)
    const allwish = useSelector(store => store.wish.wish)

    const[progress, setProgress] = useState(false)
    const dispatch = useDispatch()
    const [carts, setcartDetails] = useState([])
    const [ac, setAC] = useState(0)
    const click = [
        {name:'MY CART', index: 0},
        {name:'MY WISHLIST', index: 1},
        {name:'RECENT', index:2}
    ]
    console.log(ac);

    useEffect(() => {
        // fetch('http://localhost:3004/cart')
        // .then(res => res.json())
        // .then(ans => setcartDetails(ans))

        dispatch(getCart())
        dispatch(fetchWish())
        
    }, [])

    
    

    const UpdateCart = (indo, data) => {
        setProgress(true)
        fetch(`https://aqueous-atoll-89890.herokuapp.com/cart/${indo}`, {
            method: "PUT",
            body: JSON.stringify({
                ...data,
                "count": +data.count + 1
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => {dispatch(getCart())
            setProgress(false)})
            .catch((err) => console.log(err));
    }

    const handleDelete = (id) => {
        setProgress(true)
        fetch(`https://aqueous-atoll-89890.herokuapp.com/cart/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((response) => response.json())
            .then((json) => {dispatch(getCart())
                setProgress(false)})
            .catch((err) => console.log(err));
    }

    const UpdateCartD = (indo, data) => {
        setProgress(true)
        if(data.count === 1){
            handleDelete(indo)
        }
        
        fetch(`https://aqueous-atoll-89890.herokuapp.com/cart/${indo}`, {
            method: "PUT",
            body: JSON.stringify({
                ...data,
                "count": data.count - 1
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => {dispatch(getCart())
                setProgress(false)})
            .catch((err) => console.log(err));
    
    }

    const WishDelete = (did) => {
        setProgress(true)
        fetch(`https://aqueous-atoll-89890.herokuapp.com/wish/${did}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((response) => response.json())
            .then((json) => {dispatch(getCart())
                dispatch(fetchWish())
                setProgress(false)})
            .catch((err) => console.log(err));

    }
    const moveToCart = (mtoc, mid) => {
        setProgress(true)
        fetch('https://aqueous-atoll-89890.herokuapp.com/cart',{
            method:'POST',
            body:JSON.stringify({
                ...mtoc
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
        .then(res => res.json())
        .then(ans => {
            WishDelete(mid)
            dispatch(getCart())
            dispatch(fetchWish())
            setProgress(false)
        })
        .catch(err => console.log(err))
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
           
            
            <div className={cart.load}>
            {progress === false ? '': 
            
            <Group position='center'>
            <Loader color='gray'/>
            </Group>
            }
           
            </div>
            
           
            <div className={cart.float}>
            
            
            {ac === 0 && allcart.map( usr => (<Pbox key={usr.id}
            name={usr.name}
            price={usr.Price}
            desc={usr.title}
            number={usr.count}
            image={usr.image}
            loader={''}
            increase={() =>UpdateCart(usr.id, usr)}
            reduce={() => UpdateCartD(usr.id,usr)}
            handle={() => handleDelete(usr.id)}
            
            />))}
            {/* <Group position='center'> */}
            { ac === 0 &&
            <button onClick={() => allcart.length > 0? navs('/checkout'):navs('/')} className={cart.confirm}>{allcart.length > 0 ? 'PROCEED TO PAY': 'ADD ITEMS TO CART'}</button>
}
            {/* </Group> */}
            </div>
            
            <div className={cart.float}>
            {ac === 1 && allwish.map(wd => (
                <Wish
                key={wd.id}
                wim={wd.image}
                wname={wd.name}
                wtext={wd.title}
                wprice={wd.Price}
                mvc={() => moveToCart(wd, wd.id)}
                del={() => WishDelete(wd.id)}/>
            ))
            }
            { ac === 1 &&
            <button className={cart.confirm}>{allwish.length > 0 ? 'ADD MORE TO WISH': 'YOU WISH IS EMPTY'}</button>
            }
            </div>

            
            
            
            {/* </div> */}
            {/* <Group position='center'>
            <button onClick={() => allcart.length > 0? navs('/checkout'):navs('/')} className={cart.confirm}>{}</button>
            </Group> */}
        </div>
    </>
    )
}
export {Cart}