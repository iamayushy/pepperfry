import { useState } from 'react';
import {getData} from '../Mock/Dummy'
import com from '../Components/com.module.css'



const Complete = () => {
    const arr = getData()
    const [show, setShow] = useState('')
    return(
        <div className={com.size}>
            <div className={com.header}>
                <h3>MORE INFORMATION</h3>
                <p>Elegent Designer Gaming Chair In Grey Color by Adiko Systems</p>
            </div>
            <div>
                <div className={com.list}>
                    <ul>
                        <li className={`${com.btn} ${com.active}`} onClick={() => arr.forEach(s => setShow(s.view))}> <p>Overview</p> </li>
                        <li className={com.btn} onClick={() => arr.forEach(s => setShow(s.info))} > <p>Additional Info</p> </li>
                        <li className={com.btn} onClick={() => arr.forEach(s => setShow(s.care))} > <p>Care</p> </li>
                        <li className={com.btn} onClick={() => arr.forEach(s => setShow(s.warr))} > <p>Warranty</p> </li>
                        <li className={com.btn} onClick={() => arr.forEach(s => setShow(s.returna))} > <p>Return Policy</p> </li>
                    </ul>
                </div>
                <div className={com.dis}>
                    {arr.map((user, index) => (
                        <div key={index}>
                            {show}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export {Complete}
