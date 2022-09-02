import { Fragment ,useContext } from 'react';

import  {Outlet, Link} from 'react-router-dom';

// import {ReactComponent as HorseLogo} from '../../assets/crown.svg'
import './navigation.styles.js';

import companyLogo from '../../assets/horse2.jpg'

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';


import CartIcon from '../../components/cart-icon/cart-icon.component';

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
    Logo,
    Head,
    Marquee
} from './navigation.styles';




const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);


    // console.log(currentUser);
    return(
        <Fragment>
            <NavigationContainer>
            {/* <h1>AliBoo </h1> */}
                <LogoContainer to='/'>
                {/* <h1>AliBoo </h1> */}
                    <Logo src={companyLogo} />
                    <Head>AliBoo </Head>
                    {/* <HorseLogo className='logo'/> */}
                    {/* <marquee>Welcome to AliBOO Farm</marquee><h2></h2> */}
                </LogoContainer>
                {/* <h2>Welcome to AliBOO Farm</h2> */}
                <Marquee>Welcome to AliBoo Farm</Marquee>
                <NavLinks>
                        <NavLink to='/shop'>Shop</NavLink>
                    {currentUser ? (
                        <NavLink  as='span' onClick={signOutUser}>Sign Out </NavLink>
                            ) : (
                        <NavLink  to='/auth'>Sign in</NavLink>
                            )}
                        <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown /> }
            </NavigationContainer>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation;


