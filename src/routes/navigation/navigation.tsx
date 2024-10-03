import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style.js";
import { useSelector } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.js";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.jsx";
import { selectCurrentUser } from "../../store/user/userSelector.js";
import { selectIsCartOpen } from "../../store/cart/cartSelector.js";
import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.js";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
