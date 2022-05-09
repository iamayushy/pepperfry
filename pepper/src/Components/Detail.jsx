import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import de from '../Components/detail.module.css'
import { getOneProducts } from '../Redux/Product/action'
import { BsHeart, BsSuitHeartFill } from 'react-icons/bs'
import { getCart } from '../Redux/Cart/action'
import {Loader} from '@mantine/core'
import { fetchWish } from '../Redux/Wish/action'



const Detail = () => {
    const detail = useSelector(store => store.products.details)
    const cartD =  useSelector(store => store.cart.cart)
    const allwish = useSelector(store => store.wish.wish)
    const dispatch = useDispatch()
    const params = useParams()
    const np = '';
    // const [final, setFinal] = useState({});
    const [simage, setimage] = useState([])
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [wish, setWish] = useState(false)
    const [cout, setCout] = useState(1)
    const [load, setLoad] = useState(false)
    const[isCart, setCart] = useState(false)
    useEffect(() => {

        dispatch(getOneProducts(params.id, params.c))
        dispatch(getCart())
        dispatch(fetchWish())
        
        
        
        

        fetch(`https://aqueous-atoll-89890.herokuapp.com/${params.id}/${params.c}`)
            .then((res) => res.json())
            .then((ans) => {
                setImages(ans.image)
            })
        setLoading(false)



    }, [])

    // console.log(detail)
    const handleCount = (e) => {
        setCout(e.target.value)
    }
    
    
    console.log(allwish);
    

    const checkConflict = () => {
        setLoad(true)
       
        cartD.forEach(element => {
            if(element.id === detail.id){
                
                UpdateCart(element.id, element)
                return
                
                
                
            }
        });

        // setCart(false)
        ADDTOCART()

    }
    const UpdateCart = (indo, data) => {
        fetch(`https://aqueous-atoll-89890.herokuapp.com/cart/${indo}`, {
            method: "PUT",
            body: JSON.stringify({
                ...data,
                "count": +data.count + +cout
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => {dispatch(getCart())
                setCart(true)
            setLoad(false)})
            .catch((err) => console.log(err));
    }
    const deletewish = (info) => {
        fetch(`https://aqueous-atoll-89890.herokuapp.com/wish/${info}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(ans => dispatch(fetchWish()))
        
    }

    const ADDTOWISH = () => {
        // fetch(`https://aqueous-atoll-89890.herokuapp.com/wish`, {
        //     method:'POST',
        //     body:JSON.stringify({
        //         "id": detail.id,
        //         "title": detail.title,
        //         "name":detail.name,
        //         "Price": detail.Price,
        //         "mywish": true,
        //         "image": images[1],
        //         "count":1
        //     })
        // })
        // .then(res => res.json())
        // .then(ans => dispatch(fetchWish()))
        console.log(detail)
        
    }
    const ADDTOCART = () => {
        fetch(`https://aqueous-atoll-89890.herokuapp.com/cart`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                ...detail,
                "image": images[1],
                "count": cout
            })
        }).then(res => res.json())
        .then(ans => {dispatch(getCart())
            setCart(true)
        setLoad(false)})


            
            .catch((error) => {
                // UpdateCart(detail.id);
            })
    }
   


    const [image, setImage] = useState(0)
    const next = () => {
        image === images.length - 1 ? setImage(0) : setImage(image + 1)
    }
    const prev = () => {
        image === 0 ? setImage(image.length - 1) : setImage(image - 1)
    }
    const [more, setMore] = useState(0)
    const bigNext = () => {
        more === images.length - 1 ? setMore(0) : setMore(more + 1)
    }
    const bigPrev = () => {
        more === 0 ? setMore(image.length - 1) : setMore(more - 1)
    }

    return (
        <div className={de.cont}>
            <div className={de.main}>
                <div className={de.img}>
                    <div className={de.big}>
                        <button className={de.mover} onClick={prev} >{'<'}</button>
                        <div>
                            <img src={images[image + 1]} alt="cornman" />
                        </div>
                        <button className={de.mover} onClick={next}>{'>'}</button>
                    </div>
                    <div className={de.small}>
                        <div className={de.smsl}>
                            <button className={de.mover} onClick={bigPrev} >{'<'}</button>
                            <img onMouseOver={() => setImage(more - 1)} src={images[more - 1]} alt="" />
                            <img onMouseOver={() => setImage(more)} src={images[more]} alt="" />
                            <img onMouseOver={() => setImage(more + 1)} src={images[more + 1]} alt="" />

                            <button className={de.mover} onClick={bigNext}>{'>'}</button>

                        </div>
                    </div>
               
                </div>
                <div>
                    <div className={de.pname}>
                        <h3>{detail.title}</h3>
                        <p>{detail.name}</p>
                        
                        
                    </div>
                        {allwish.map(ele => {
                           if(ele.id === detail.id){
                               return <BsSuitHeartFill onClick={ () => deletewish(ele.id)} color='red' size='1.8rem' style={{float:'right', marginTop:'-5rem'}}/>
                           }
                           return <BsHeart onClick={ADDTOWISH} size='1.8rem' style={{float:'right', marginTop:'-5rem'}}/>
                        })}

                    <div className={de.rprice}>
                        <span>

                            <p>⭐⭐⭐⭐⭐</p>
                            <p style={{ fontWeight: '600' }}>12 Month's Wimageanty</p>
                        </span>
                        <h2 style={{ fontWeight: '600' }}> &#8377; {detail.Price} <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'green', marginLeft: '9px' }}>(43% off)</span> </h2>
                    </div>

                    <div className={de.pincode}>
                        <section className={de.des}>
                            <h3 style={{ fontWeight: '600' }}>Delivery</h3>
                            <input placeholder='Enter Pincode' type="text" name='pincode' />
                        </section>
                        <p>Delivery - Free For Today</p>
                    </div>
                    
                    <div className={de.quant}>
                        <form className={de.qs}>
                            <select defaultValue={cout} onChange={handleCount}>
                                <option value="1" > {'Qty'} 1</option>
                                <option value="2" > {'Qty'} 2</option>
                                <option value="3" > {'Qty'} 3</option>
                                <option value="4" > {'Qty'} 4</option>
                                <option value="5" > {'Qty'} 5</option>
                                <option value="6" > {'Qty'} 6</option>
                            </select>
                            <input className={de.inb} onClick={() => checkConflict()} id='cart' value= {'ADD TO CART'} type="button" />
                            <input id='some' value='BUY NOW' type="submit" />
                        </form>
                    </div>
                    <div className={de.load}>
            {load === false ? '': 
            
            
            <Loader variant='bars' color='gray'/>
            
            }
           
            </div>
                    <div className={de.ts}>
                        <h4>detials</h4>
                        <div className={de.fea}>

                            <div>
                                <p>Brand</p>
                                <p className={de.dm}>Maka</p>

                                <p>Weight</p>
                                <p className={de.dm}>18kg</p>

                                <p>Wimageanty</p>
                                <p className={de.dm}>12 Months Wimageanty</p>

                                <p>Produnct Rating</p>
                                <p className={de.dm}>5</p>
                            </div>
                            <div>
                                <p>Dimensions (In Inches)</p>
                                <p className={de.dm}>H 29.5 x W 39.3 x D 17.3</p>

                                <p>Color</p>
                                <p className={de.dm}>Wenge</p>

                                <p>Assembly</p>
                                <p className={de.dm}>Carpenter Assembly</p>

                                <p>Room Type</p>
                                <p className={de.dm}>Study Room</p>

                                <p>DIMENSIONS (IN Centimeters)</p>
                                <p className={de.dm}>H 79.5 x W 89.3 x D 37.3</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export { Detail }