import './checkout-item.scss'
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';
import { useDispatch, useSelector } from 'react-redux';
const CheckoutItem = ({ cartItem }) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;