import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.style.jsx';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { UserContext } from '../../contexts/usercontext';
import { CartContext } from '../../contexts/cartcontext';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import { signOutUser } from '../../utils/firebase/firebase';
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo'></CrwnLogo>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) :
                        (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && < CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
export default Navigation