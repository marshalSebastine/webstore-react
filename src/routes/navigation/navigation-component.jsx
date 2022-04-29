import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';


const Navigation = () => {

    return(
        <Fragment>
            <div className="navigation-container debug debug-grid">
                <Link to={'/'}> <CrownLogo className="crownlogo"/> </Link>
                <div className="navigation-links-container">

                    <Link to={'/shop'} className='navigation-link'>Shop</Link>
                    <Link to={'/authorization'} className='navigation-link'>Sign-In</Link>

                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation