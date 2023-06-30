import React,{useContext} from 'react'
import "./CartItem.css"
import CartContext from '../Context/Cart/CartContext'

export default function CartItem({item}) {
    const {removeItem} = useContext(CartContext)
    return (
        <li className="CartItem__item">
           <img src={item.image} alt={item.name} /> 
           <div>
               {item.name} $ {item.price}
           </div>
           <form>
               <select type="number">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
               </select>
           </form>
           <button className="CartItem__button" onClick={()=>removeItem(item._id)}>Remove</button>
        </li>
    )
}
