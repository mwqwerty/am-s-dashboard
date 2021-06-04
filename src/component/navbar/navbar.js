import './navbar.css';
import {Link} from "react-router-dom";
import {LoginContainer} from "../login/LoginContainer";
import {Auth} from "../auth";


const Navbar = ({sidebar, openSidebar}) => {
    const logout = () => {
        try {
            localStorage.clear();
            Auth.logout();
            console.log(localStorage.getItem('isAuth'));

        } catch (e) {
            console.log("err :" + e);
        }
    }
    return (
        <nav className='navbar'>
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"/>
            </div>
            <div className="navbar__left" >
                <a href="/">Hello</a>
                <a href="/" className="active_link">Admin</a>
            </div>
            <div className="navbar__right" >
                <Link >
                    <i onClick={logout} className="fa fa-search"/>
                </Link>
                <Link to="/">
                    <i className="fa fa-clock-o"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;