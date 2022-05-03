import { Fragment,useContext } from "react";
import { UserContext } from "../../contexts/usercontexts";
import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firestore.utils";
import { ReactComponent as CrownLogo} from '../../assets/crown.svg';
import ShopIcon from "../../Components/ShoppingCartIcon/ShoppingCartIcon";
import './navigation.styles.scss';
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
            <div className="navigation-container">
                <Link to={'/'}> <CrownLogo className="crownlogo"/> </Link>
                <div className="navigation-links-container">

                    <Link to={'/shop'} className='navigation-link'>Shop</Link>
                    {
                        currentUser ? (
                            <span className="navigation-link" onClick={signOutHandler}>Sign Out</span>
                        ):( <Link to={'/authorization'} className='navigation-link'>Sign-In</Link>)
                    }
                
                     <ShopIcon/>

                </div>
                {
                    cartdroppeddown && (<CartDropDown/>)
                }

            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation