const FETCH_CART = 'FETCH_CART'
const FETCH_WISH = 'FETCH_WISH'

const fetchCartData = (data) =>({
    type: FETCH_CART,
    payload: data,

    
})

const fetchWish = (wdata) =>({
    type: FETCH_CART,
    payload: wdata,
    meta: false
})

const getCart = () => {
    return(dispatch) => {
        
        fetch(`https://aqueous-atoll-89890.herokuapp.com/cart`)
        .then(res => res.json())
        .then(data => dispatch(fetchCartData(data)))
    }
}

const getWish = () => {
    return(dispatch) => {
        fetch(`https://aqueous-atoll-89890.herokuapp.com/wish`)
        .then(res => res.json())
        .then(data => dispatch(fetchWish(data)))
    }
}

export {getCart, fetchCartData, FETCH_CART, FETCH_WISH, fetchWish, getWish}