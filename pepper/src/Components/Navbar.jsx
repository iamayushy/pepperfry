import { useEffect, useState } from 'react'
import nav from '../Components/nav.module.css'
import { Cart } from './Cart'
import { Modal } from '@mantine/core';
import { Register } from '../Common/Register';
import { Login } from '../Common/Login';
import { Big } from '../Common/Big';
import { Link, useNavigate } from 'react-router-dom';
import {Drawer} from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getCurrent, getCurrenUser, getGAuth, signMeOut } from '../Redux/Rauth/action';
import { Menu } from '@mantine/core';
import {GrUserExpert} from 'react-icons/gr'
import {FiLogOut, FiBox} from 'react-icons/fi'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [opened, setOpened] = useState(false)
    const [reg, setReg] = useState(false)
    const [den, setDen] = useState(false)
    const [search, setSearch] = useState('')
    const [find, setFind] = useState('')
    const navigate = useNavigate()
    const auth = useSelector(store => store.gauth.userid)
    const simple = useSelector(store => store.gauth.userDetail)
    const dispatch = useDispatch()
    const rev = () => {
        setShow(!show)
    }
    const check = () => {
        setReg(!reg)
    }
    const handleChange = (e) => {
      e.key === 'Enter'? setFind(search):'';
      
    }
    useEffect(() => {
        dispatch(getCurrent())
        
    },[])
    useEffect(() => {
        navigate(`${find}`)
        
        
    },[find])
  
   
   const handleGoogle = () =>{
    setOpened(auth.login)
    dispatch(getGAuth())
    dispatch(getCurrent())
    dispatch(fetchUser())
    
    
    
  }
  const signOut = () => {
      dispatch(signMeOut())
  }
   
    return (
        <div className={nav.container}>
            <section className={nav.navbar}>
                <section>
                    <Link className={nav.logo} to="/">.</Link>
                </section>
                <section className={nav.search}>
                    <input onKeyDown={handleChange} onChange={(e) => setSearch(e.target.value)}  placeholder='Only search sofa or table as data is limited' type="text" name="" id="" />
                    <input type="submit" name="" id="" />
                </section>
                <section className={nav.user}>
                    <a href="#"><img src={'https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg'} alt="help" /></a>
                    <a href="#" onClick={() => {
                        setOpened(!auth.login)
                    }}><img style={{borderRadius:'50%'}} src={auth.login? auth.detail.photoURL :'https://ii1.pepperfry.com/images/svg/icon-profile-21.svg?v=1'} alt="user" /></a>
                    {auth.login && <Menu>
                        <Menu.Label size={222}><h2>👋, {auth.detail.displayName}</h2></Menu.Label>
                        <Menu.Item onClick={() => {auth.login ? navigate('/orders'): ''}} icon={<FiBox/>}>My Orders</Menu.Item>
                        <Menu.Item onClick={signOut} color='red' icon={<FiLogOut/>}>Logout</Menu.Item>

                    </Menu>}
                    <a href="#" onClick={rev}> <img src={'https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg'} alt="love" /></a>
                    <a className={nav.cart} onClick={rev} href="#"><img src={'https://ii1.pepperfry.com/images/svg/icon-cart-21.svg'} alt="cart" /></a>
                    <Drawer
                    position="right"
                    opened={show}
                    onClose={() => setShow(false)}
                    size={600}
                    
                    >
                        <Cart/>
                    </Drawer>
                    <div>
                        <Modal
                            size='xl'
                            opened={opened}
                            onClose={() => setOpened(false)}
                            
                        >
                            
                            {reg === false ? <Register handle={handleGoogle} close={() => setOpened(false)} mover={check}/> : <Login mover={check}/>}
                        </Modal>
                            
                           
                    </div>
                </section>
            </section>

            <section className={nav.links}>
                <ul>
                    <li><a href="#">Sofas & Recliners</a> </li>
                    <li> <a href="#">Storage</a> </li>
                    <li> <a href="#">Furniture</a> </li>
                    <li> <a href="#">Beds & Mattresses</a> </li>
                    <li> <a href="#">Dining & Bar</a> </li>
                    <li> <a href="#">Wall Accents</a> </li>
                    <li> <a href="#">Decor</a> </li>
                    <li> <a href="#">Lighting</a> </li>
                    <li> <a href="#">Home Linen</a> </li>
                    <li> <a href="#">Carpets</a> </li>
                    <li><a href="$">Garden & Outdoor</a></li>
                    <li><a href="$">Appliances</a></li>
                    <li><a href="$">Modular</a></li>

                </ul>
                
            </section>
            {den && <Big/>}
            
        </div>
    )
}
export { Navbar }