import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.style.jsx'
import Button from '../button/button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../store/cart/cartSelector.js'

const CartDropdown = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
export default CartDropdown;