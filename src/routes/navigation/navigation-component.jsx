import { Fragment,useContext } from "react";
import { UserContext } from "../../contexts/usercontexts";
import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firestore.utils";
import { ReactComponent as CrownLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';



const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    const signOutHandler = async() => {
        await signOutUser();
    }

    console.log('got current user innavigation component',currentUser);
    return(
        <Fragment>
            <div className="navigation-container debug debug-grid">
                <Link to={'/'}> <CrownLogo className="crownlogo"/> </Link>
                <div className="navigation-links-container">

                    <Link to={'/shop'} className='navigation-link'>Shop</Link>
                    {
                        currentUser ? (
                            <span className="navigation-link" onClick={signOutHandler}>Sign Out</span>
                        ):( <Link to={'/authorization'} className='navigation-link'>Sign-In</Link>)
                    }
  

                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation