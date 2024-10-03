import './cart-item.scss';
import { TCartItem } from '../cart-dropdown/cart-dropdown';

type CartItemProps = {
    cartItem: TCartItem;
}

const CartItem :React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}x {price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;