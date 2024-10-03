import { CART_ACTION_TYPES, CartItem } from "./cartTypes";

import { ActionWithPayload } from "../../utils/reducer/reducer.utils";

import { addItemToCart, setIsCartOpen } from "./cartAction";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export type SetCartItemsAction = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export type SetIsCartOpenAction = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type CartAction = SetCartItemsAction | SetIsCartOpenAction;

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    default:
      return state;
  }
};
