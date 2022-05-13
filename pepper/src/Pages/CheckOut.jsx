import { Accordion, useAccordionState } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Redux/Cart/action'
import { Pbox } from '../Components/Pbox'
import ck from '../Pages/ck.module.css'
import { Modal, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { async } from '@firebase/util'
const CheckOut = () => {
    const allCart = useSelector(state => state.cart.cart)
    const auth = useSelector(store => store.gauth.userid)
    const dispatch = useDispatch()
    const [sum, setSum] = useState(0)
    const [cs, setC] = useState(0)
    const [state, handlers]= useAccordionState({total: 3, initialItem: 0})
    const [opened, setOpened] = useState(false)
    const nav = useNavigate()
    useEffect(() => {
        dispatch(getCart())
        handlers.toggle(1)
    }, [])
    let num = 0
    let c = 0
    allCart.forEach((ele) => {
        num += ele.Price
        c += ele.count
    })
    useEffect(() => {
        allCart.forEach((ele) => {
            setSum(num * ele.count)
        })

        setC(c)
    })

    const [add, setAdd] = useState({
        name: '',
        address: '',
        phone: ''

    })

    const [data, setdata] = useState({})

    const handleD = (e) => {
        const { name, value } = e.target
        setAdd({
            ...add,
            [name]: value
        })
    }

    const handlemoney = (e) => {
        e.preventDefault()
        if(add.name.length >= 5 && add.address.length > 14 && add.phone.length === 10){
            handlers.toggle(2)
        }
        else{
            alert('Empty Fields && number of digits must be 10')
        }

        
    }
    const handlePayment = () => {
            
        if(add.name.length >= 5 && add.address.length > 14 && add.phone.length === 10){
        
        fetch('https://aqueous-atoll-89890.herokuapp.com/user', {
            method: 'POST',
            body: JSON.stringify(

                
              {  ...add,
                "fire": auth.detail.token,
                "orders": [...allCart]}


        ),
        headers: { "Content-type": "application/json; charset=UTF-8" },

        })
            .then(res => res.json())
            .then(ans => console.log(ans))
            .catch(err => console.log('error', err))

            alert('Ordered Placed Succesfully 😁')
            nav('/orders')
    
    }
    else{
        handlers.toggle(1)
    }
    }






    return (
        <div className={ck.cont}>
            <div className={ck.acc}>
                <Accordion state={state} onChange={handlers.setState} iconPosition="right" iconSize={10}>
                    <Accordion.Item   label="Your Cart">
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
                            />))}
                        </div>
                        <Group position='right'>
                        <Button color='dark' onClick={() => handlers.toggle(1)}>Next</Button>
                        </Group>
                    </Accordion.Item>

                    <Accordion.Item label="Address">



                        <form className={ck.form} onSubmit={handlemoney}>
                            <input required onChange={handleD} value={add.name} type="text" placeholder='Full Name' name="name" id="" />
                            <input required onChange={handleD} value={add.address} type="text" placeholder='Address' name="address" id="" />
                            <input required onChange={handleD} value={add.phone} type="number" placeholder='Phone No' name='phone' />
                            <input onClick={handlemoney} type="submit" value="Next" name="" id="" />
                        </form>
                    </Accordion.Item>

                    <Accordion.Item label="Payment">

                        <div className={ck.fed}>
                            <div style={{ color: 'green' }}>
                                <p>Total Items</p>
                                <p>Total Cost</p>
                            </div>
                            <div style={{ color: 'red' }}>
                                <p>{cs}</p>
                                <p>&#8377; {sum}</p>
                            </div>
                            <button disabled={auth.login? false: true} style={{ backgroundColor: 'orangered', border: '1px solid orangered', color: 'white', }} onClick={handlePayment}>{auth.login ? 'PAY': 'Please Login'}</button>
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