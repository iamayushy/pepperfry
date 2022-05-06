import { Accordion } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Redux/Cart/action'
import { Pbox } from '../Components/Pbox'
import ck from '../Pages/ck.module.css'
import { Modal, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom'
const CheckOut = () => {
    const allCart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const [sum, setSum] = useState(0)
    const [cs, setC] = useState(0)
    const [opened, setOpened] = useState(false)
    const nav = useNavigate()
    useEffect(() => {
        dispatch(getCart())
    },[])
    let num = 0
    let c = 0
    allCart.forEach((ele) => {
        num += ele.Price
        c+= ele.count
    })
    useEffect(() => {
        allCart.forEach((ele) => {
            setSum(num * ele.count)
        })

        setC(c)
    })

    const [add, setAdd] = useState({
        name:'',
        city:'',
        state:'',
        address:'',
        phone:''

    })

    const [data, setdata] = useState({})

    const handleD = (e) => {
        const {name, value} = e.target
        setAdd({
            ...add,
            [name]:value
        })
    }

    const addD = (e) => {
        e.preventDefault()
        fetch('http://localhost:3004/user',{
            method:'POST',
            body:JSON.stringify(add),
            headers: { "Content-type": "application/json; charset=UTF-8" },

        }).then(res => res.json())
        .then(ans => setdata(ans))

    }
    
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
                    

                    
                        <form className={ck.form} onSubmit={addD}>
                            <input onChange={handleD} value={add.name} type="text" placeholder='Full Name' name="name" id="" />
                            <input onChange={handleD} value={add.city} type="text" placeholder='City' name="city" id="" />
                            <input onChange={handleD} value={add.state} type="text" placeholder='State' name="state" id="" />
                            <input onChange={handleD} value={add.address} type="text" placeholder='Address' name="address" id="" />
                            <input onChange={handleD} value={add.phone} type="number" placeholder='Phone No' name='phone'/>
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
                                <p>{cs}</p>
                                <p>&#8377; {sum}</p>
                            </div>
                            <button style={{backgroundColor:'orangered', border:'1px solid orangered', color:'white',}} onClick={() => setOpened(true)}>PAY</button>
                        </div>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className={ck.pay}>
            
            <Modal
            size='full'
            overflow='outside'
        opened={opened}
        onClose={() => setOpened(false)}
        title="Order Placed Successfully"
      >
        <div className={ck.den}>
            <h1>Name: {data.name}</h1>
            <p>Phone: {data.phone}</p>
            <p>Address: {data.address}</p>
            <p>City: {data.city}</p>

        </div>

        <div className={ck.or}>
        {allCart.map(usr => (<div className={ck.os} key={usr.id}>
                            <h4>{usr.name}</h4>
                            <h4>{usr.Price}</h4>
                            <h4>{usr.title}</h4>
                            <h4>{usr.count}</h4>
                            <img src={usr.image} alt="" />
                           
                        </div>))}
        </div>
        <div style={{marginTop:'2rem'}}>
            <Group position='center'>
            <Button onClick={() =>  nav('/')}>SHOP MORE</Button>
            </Group>
        </div>
      </Modal>

            </div>
        </div>
    )
}
export { CheckOut }