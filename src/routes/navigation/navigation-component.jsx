import { Fragment,useContext } from "react";
import { UserContext } from "../../contexts/usercontexts";
import {  Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firestore.utils";
import { ReactComponent as CrownLogo} from '../../assets/crown.svg';
import ShopIcon from "../../Components/ShoppingCartIcon/ShoppingCartIcon";
import {NavigationContainerStyled,NavigationLink,CrownLogoStyles,NavigationLinksContainer} from './navigation-styles.js';
import CartDropDown from "../../Components/drop-down-cart/DropDownCartComponent";
import {CartContext} from "../../contexts/CartContext";



const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {cartdroppeddown} = useContext(CartContext);
    const signOutHandler = async() => {
        await signOutUser();
    }

    return(
        <Fragment>
            <NavigationContainerStyled>
                <CrownLogoStyles to={'/'}> <CrownLogo/> </CrownLogoStyles >
                <NavigationLinksContainer>

                    <NavigationLink to={'/shop'}>Shop</NavigationLink>
                    {
                        currentUser ? (
                            <NavigationLink as='span' onClick={signOutHandler}>Sign Out</NavigationLink>
                        ):( <NavigationLink to={'/authorization'}>Sign-In</NavigationLink>)
                    }
                
                     <ShopIcon/>

                </NavigationLinksContainer>
                {
                    cartdroppeddown && (<CartDropDown/>)
                }

            </NavigationContainerStyled>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation