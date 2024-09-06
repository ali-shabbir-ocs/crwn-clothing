import './cart-dropdown.scss'
import Button from '../button/button'
import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-item'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartcontext'
const CartDropdown = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <div div className='cart-dropdown-container' >
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;