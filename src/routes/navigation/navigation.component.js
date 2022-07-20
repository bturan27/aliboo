import { Fragment ,useContext } from 'react';

import  {Outlet, Link} from 'react-router-dom';

// import {ReactComponent as HorseLogo} from '../../assets/crown.svg'
import './navigation.styles.scss';

import companyLogo from '../../assets/horse2.jpg'

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';


import CartIcon from '../../components/cart-icon/cart-icon.component';




const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    // console.log(currentUser);
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                <img className='horsepic' src={companyLogo} ></img>
                <h1>AliBoo </h1>
                {/* <HorseLogo className='logo'/> */}
                {/* <marquee>Welcome to AliBOO Farm</marquee><h2></h2> */}
                </Link>
                {/* <h2>Welcome to AliBOO Farm</h2> */}
                <marquee>Welcome to AliBoo Farm</marquee>
                <div className='nav-links-container'>

                <Link className='nav-link' to='/shop'>Shop
                </Link>
                {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>Sign Out </span>
                        ) : (
                        <Link className='nav-link' to='/auth'>Sign in
                        </Link>
                        )}
                        <CartIcon />
                </div>
                <CartDropdown />
            </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation;


/// burada fragment kullanildi buna tekrar bak//////