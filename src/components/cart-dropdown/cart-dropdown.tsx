import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style.jsx";
import Button from "../button/button.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.jsx";
import { selectCartItems } from "../../store/cart/cartSelector.js";

export type TCartItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
};

const CartDropdown: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item: TCartItem) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
