import { Card } from "./Card"
import  dec from '../Order/decor.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getOrders } from "../Redux/Product/action"
import { getCurrent } from "../Redux/Rauth/action"

const Order = () => {
    const dispatch = useDispatch()
    const auth = useSelector(store => store.gauth.userid)

    const order = useSelector(store => store.products.order)
    const [det, setDet] = useState({
        name: '',
        phone: '',
        address: ''
    })
    useEffect(() => {
        dispatch(getOrders())
        
    }, [])
    let filtered = [];
    let ord = []
    if (auth.login === true){
    filtered = order.filter((ele) => ele.fire === auth.detail.token)
    filtered.forEach(element => {
        ord = [...element.orders]
        
        })

        
      
    };

    
    return(
        <div className={dec.look}>
            <h1>Your Order's</h1>
            <div className={dec.box}>

                {filtered.map((ele) => (
                    <Card key={ele.id}
                    name={ele.name}
                    address={ele.address}
                    phone={ele.phone}
                    >
                    {ord.map(em=>{
                       return <div>
                            <div className={dec.im}>
                                <img src={em.image} alt="" />
                            </div>
                            <div className={dec.text}>
                                <h2 style={{fontWeight:'600', color:'black'}}>{em.name}</h2>
                                <p style={{color:'orangered'}}>&#8377; {em.Price}</p>
                            </div>
                        </div>
                    })}
                    </Card>

                ))}
               
                {

                    // ord.map((ele) => (
                    //     <Card 
                    //     name={ele.name}
                    //     price={ele.Price}
                    //     image={ele.image}>
                    //     {filtered.map(em => (
                    //         <div>
                    //         <h3 style={{fontWeight:'600', color:'black'}} >Name: {em.name}</h3>
                    //         <h3 style={{fontWeight:'600', color:'black'}} >Contact No: {em.phone}</h3>
                    //         <p>Address: {em.address}</p>
                    //         </div>
                    //     ))}   
                    //     </Card>
                    // ))
                }
             
            </div>
        </div>
    )
}
export {Order}