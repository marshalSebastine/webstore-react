import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import userSelector from '../../store/user/user-selector';
import { selectIsCartOpen } from '../../store/cart/cart-selector';
import { signOutStart } from '../../store/user/user-action-types';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import ShopIcon from '../../Components/ShoppingCartIcon/ShoppingCartIcon';
import {
  NavigationContainerStyled, NavigationLink, CrownLogoStyles, NavigationLinksContainer,
} from './navigation-styles';
import CartDropDown from '../../Components/drop-down-cart/DropDownCartComponent';




function Navigation() {

  const dispatch = useDispatch();
  const cartdroppeddown = useSelector(selectIsCartOpen);
  const currentUser = useSelector(userSelector);
  const signOutHandler = () => dispatch(signOutStart());
  return (
    <>
      <NavigationContainerStyled>
        <CrownLogoStyles to="/">
          {' '}
          <CrownLogo />
          {' '}
        </CrownLogoStyles>
        <NavigationLinksContainer>

          <NavigationLink to="/shop">Shop</NavigationLink>
          {
                        currentUser ? (
                          <NavigationLink as="span" onClick={signOutHandler}>Sign Out</NavigationLink>
                        ) : (<NavigationLink to="/authorization">Sign-In</NavigationLink>)
                    }

          <ShopIcon />

        </NavigationLinksContainer>
        {
                    cartdroppeddown && (<CartDropDown />)
                }

      </NavigationContainerStyled>
      <Outlet />
    </>
  );
}

export default Navigation;
