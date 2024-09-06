import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.scss'
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { UserContext } from '../../contexts/usercontext';
import { CartContext } from '../../contexts/cartcontext';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import { signOutUser } from '../../utils/firebase/firebase';
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    console.log(currentUser);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'></CrwnLogo>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    ) :
                        (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )}
                    <CartIcon />
                </div>
                {isCartOpen && < CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation