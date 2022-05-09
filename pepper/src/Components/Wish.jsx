import sim from '../assets/rev.png'
import wish from '../Components/wish.module.css'
const Wish = ({wname, wtext, wprice, wim, mvc, del}) => {
    return(
        <div className={wish.container}>
            <div className={wish.icont}>
                <img src={wim} alt="" />
            </div>
            <div className={wish.itex}>
                <h3>{wname}</h3>
                <p>{wtext}</p>
                <p className={wish.pr}>&#8377; {wprice}</p>

                <button onClick={mvc}>Move To Cart</button>
                <button onClick={del} className={wish.re}>Remove</button>
            </div>
        </div>
    )
}
export {Wish}