import "./Nav.css"
import React, { useContext } from 'react'
import CartContext from "../Context/Cart/CartContext"

export default function Nav() {
    const {cartItems, showHideCart} = useContext(CartContext)
    return (
        <nav >
            <div className="nav__left">Stor</div>
            <div className="nav__middle">
                <div className="input__wrapper">
                    <input type ="text"/>
                    <i className="fas fa-search"/>
                </div>
            </div>
            <div className="nav__right">
                <div className="cart__icon">
                    <i className="fa fa-shopping-cart" aria-hidden="true" onClick={showHideCart}/>
                    {cartItems.length > 0 && <div className="item__count"><span>{cartItems.length}</span></div>}
                </div>
            </div>
        </nav>
    )
}
