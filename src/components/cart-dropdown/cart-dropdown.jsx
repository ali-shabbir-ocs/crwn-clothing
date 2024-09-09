import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.style.jsx'
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