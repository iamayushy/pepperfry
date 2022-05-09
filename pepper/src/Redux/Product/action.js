const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const FETCH_ONE = 'FETCH_ONE'

const fetchProducts = (product) => ({
    type:FETCH_PRODUCTS,
    payload: product
})
const fetchSingle = (details) => ({
    type: FETCH_ONE,
    payload: details
})
const getProducts = (path) => {
    return (dispatch) =>{
        fetch(`https://aqueous-atoll-89890.herokuapp.com/${path}`)
        .then(res => res.json())
        .then(data => dispatch(fetchProducts(data)))
    }
}

const getOneProducts = (pathOne, pathTwo) => {
    return (dispatch) =>{
        fetch(`https://aqueous-atoll-89890.herokuapp.com/${pathOne}/${pathTwo}`)
        .then(res => res.json())
        .then(data => dispatch(fetchSingle(data)))
    }
}

export {getProducts, fetchProducts, FETCH_PRODUCTS, getOneProducts, fetchSingle, FETCH_ONE}