import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.scss'
import { UserContext } from '../../contexts/usercontext';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import { signOutUser } from '../../utils/firebase/firebase';
const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation