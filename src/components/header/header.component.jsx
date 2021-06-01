import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const hidden = useSelector(state => state.cart.hidden);
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          : 
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div> 
      {!hidden ? <CartDropdown /> : ''}
    </div>
  )
}


export default Header;
