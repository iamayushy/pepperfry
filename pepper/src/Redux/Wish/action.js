const GET_WISH = "GET_WISH"

const getWish = (wishlist) => (
    {
        type:GET_WISH,
        payload: wishlist
    }
)

const fetchWish = () => {
    return(dispatch) => {
        fetch(`https://aqueous-atoll-89890.herokuapp.com/wish`)
        .then(res => res.json())
        .then(data => dispatch(getWish(data)))
    }
}
export {GET_WISH, fetchWish, getWish}