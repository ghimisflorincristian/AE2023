import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../header/Header.css"

const Header = (props) => {

    const isCartDisplayed = () => {
        return props?.cart.length === 0;
    }

    return (
        <div className="user-menu">
            <Link to="/home">
                MobiStore
            </Link>
            <div className="profile-container">
                <div className="profile-info">
                    <Link to="/cart">{isCartDisplayed && `Your cart (${props.cart.length})`}</Link>
                    <div></div>
                    <Link
                        className="signout"
                        to="/">
                        Sign out
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header