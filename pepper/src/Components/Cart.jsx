import { useEffect, useState } from 'react'
import cart from '../Components/cart.module.css'
import { Pbox } from './Pbox'
const Cart = ({close}) => {
    const [ac, setAC] = useState(0)
    const click = [
        {name:'MY CART', index: 0},
        {name:'MY WISHLIST', index: 1},
        {name:'RECENT', index:2}
    ]
    return(
        <div className='slide-in'>
            <div className={cart.cont}>
                <div className={cart.nav}>
                    <h1 onClick={close} className={cart.x}>
                        X
                    </h1>
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
                
                <div className={cart.all}>
                {ac === 0 && <Pbox
                name={'Decorative Chair'}
                price={'43,000'}
                desc={'A comfortable chair for doing all your work from home task'}
                number={23}
                />}
                {ac === 1 && <Pbox
                name={'Sofa Set'}
                price={'291000'}
                desc={'A comfortable chair for doing all your work from home task'}
                number={1}
                />}
                {ac === 2 && <h1>Recent</h1>}
                </div>
                <button className={cart.confirm}>Confirm The Order</button>

            </div>
        </div>
    )
}
export {Cart}