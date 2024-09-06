import './cart-icon.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartcontext';
import { ReactComponent as ShoppingIcon } from '../../assets/111 shopping-bag.svg';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen} >
            <ShoppingIcon className="shopping-icon" />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default CartIcon;