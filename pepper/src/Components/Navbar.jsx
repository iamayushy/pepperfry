import nav from '../Components/nav.module.css'
const Navbar = () => {
    return(
        <div className={nav.container}>
            <section className={nav.navbar}>
            <section>
                <a className={nav.logo} href="#">.</a>
            </section>
            <section className={nav.search}>
                <input placeholder='Your door to happiness opens with a search' type="text" name="" id="" />
                <input type="submit" name="" id="" />
            </section>
            <section className={nav.user}>
               <a href="#"><img src={'https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg'} alt="" /></a>
               <a href="#"><img src={'https://ii1.pepperfry.com/images/svg/icon-profile-21.svg?v=1'} alt="" /></a>
                <a href="#"><img src={'https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg'} alt="" /></a>
                <a href="#"><img src={'https://ii1.pepperfry.com/images/svg/icon-cart-21.svg'} alt="" /></a>
            </section>
            </section>

            <section className={nav.links}>
                <ul>
                    <li> <a href="#">Furniture</a> </li>
                    <li> <a href="#">Sofas & Recliners</a> </li>
                    <li> <a href="#">Storage</a> </li>
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
        </div>
    )
}
export {Navbar}