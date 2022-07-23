import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import React from 'react';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            {[].map(item => <CartItem cartItem= {item} />)};
            <Button>Check Out </Button>
        </div>
    )
}

export default CartDropdown;