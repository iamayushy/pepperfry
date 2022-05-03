import { useState } from 'react'
import de from '../Components/detail.module.css'


const Detail = () => {
    const arr = [
        'https://ii1.pepperfry.com/media/catalog/product/g/e/800x880/genji-study-table-in-columbia-walnut-finish-by-mintwud-genji-study-table-in-columbia-walnut-finish-b-6dhah3.jpg',
        'https://ii1.pepperfry.com/media/catalog/product/g/e/800x880/genji-writing-desk-in-columbia-walnut-finish-by-mintwud-genji-writing-desk-in-columbia-walnut-finish-xqyqhv.jpg',
        'https://ii1.pepperfry.com/media/catalog/product/g/e/800x880/genji-writing-desk-in-columbia-walnut-finish-by-mintwud-genji-writing-desk-in-columbia-walnut-finish-lfvm6y.jpg'
    ]
    const [image, setImage] = useState(0)
    const next = () => {
        image === arr.length - 1 ? setImage(0) : setImage(image + 1)
    }
    const prev = () => {
        image === 0 ? setImage(arr.length - 1) : setImage(image - 1)
    }
    const [more, setMore] = useState(0)
    const bigNext = () => {
        more === arr.length - 1? setMore(0) : setMore(more + 1)
    }
    const bigPrev = () => {
        more === 0 ? setMore(arr.length - 1) : setMore(more - 1)
    }
    
    return (
        <div className={de.cont}>
         <div className={de.main}>
            <div className={de.img}>
                <div className={de.big}>
                    <button className={de.mover} onClick={prev} >{'<'}</button>
                    <div>
                        <img src={arr[image]} alt="" />
                    </div>
                    <button className={de.mover} onClick={next}>{'>'}</button>
                </div>
                <div className={de.small}>
                    <div className={de.smsl}>
                    <button className={de.mover} onClick={bigPrev} >{'<'}</button>
                    <img onMouseOver={() =>  setImage(more - 1)} src={arr[more - 1]} alt="" />
                    <img onMouseOver={() => setImage(more)}  src={arr[more]} alt="" />
                    <img onMouseOver={() =>  setImage(more + 1)} src={arr[more + 1]} alt="" />

                    <button className={de.mover} onClick={bigNext}>{'>'}</button>

                    </div>
                </div>

            </div>
            <div>
                <div className={de.pname}>
                    <h3>Some Table Brand</h3>
                    <p>By Mintwud</p>
                </div>
                <div className={de.rprice}>
                    <span>
            
                        <p>⭐⭐⭐⭐⭐</p>
                        <p style={{fontWeight:'600'}}>12 Month's Warranty</p>
                    </span>
                    <h2 style={{fontWeight:'600'}}> &#8377; 3,299 <span style={{fontSize:'0.7rem', fontWeight:'bold', color:'green', marginLeft:'9px'}}>(43% off)</span> </h2>
                </div>

                <div className={de.pincode}>
                    <section className={de.des}>
                    <h3 style={{fontWeight:'600'}}>Delivery</h3>
                    <input placeholder='Enter Pincode' type="text" name='pincode' />
                    </section>
                    <p>Delivery - Free For Today</p>
                </div>

                <div className={de.quant}>
                    <form className={de.qs}>
                        <select>
                            <option value="1" > {'Qty'} 1</option>
                            <option value="2" > {'Qty'} 2</option>
                            <option value="3" > {'Qty'} 3</option>
                            <option value="4" > {'Qty'} 4</option>
                            <option value="5" > {'Qty'} 5</option>
                            <option value="6" > {'Qty'} 6</option>
                        </select>
                        <input id='cart' value='ADD TO CART' type="button"/>
                        <input id = 'some' value='BUY NOW' type="submit"/>
                    </form>
                </div>
                <div className={de.ts}>
                <h4>detials</h4>
                    <div className={de.fea}>
                       
                        <div>
                            <p>Brand</p>
                            <p className={de.dm}>Maka</p>

                            <p>Weight</p>
                            <p className={de.dm}>18kg</p>

                            <p>Warranty</p>
                            <p className={de.dm}>12 Months Warranty</p>

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