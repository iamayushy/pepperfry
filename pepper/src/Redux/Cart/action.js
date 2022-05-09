const FETCH_CART = 'FETCH_CART'
const FETCH_WISH = 'FETCH_WISH'

const fetchCartData = (data) =>({
    type: FETCH_CART,
    payload: data,

    
})



const getCart = () => {
    return(dispatch) => {
        
        fetch(`https://aqueous-atoll-89890.herokuapp.com/cart`)
        .then(res => res.json())
        .then(data => dispatch(fetchCartData(data)))
    }
}



export {getCart, fetchCartData, FETCH_CART}