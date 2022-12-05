import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from "../../Store/auth-context";
import {useContext} from "react";

const MainNavigation = () => {
    const authCtx = useContext(AuthContext);
    const isloggedIn = authCtx.isLoggedIn;

    const loauthHandler = () => {
        authCtx.logout();
    };
    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    {!isloggedIn ? <li>
                            <Link to='/auth'>Login</Link>
                        </li> :
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    }
                    {isloggedIn &&  <li>
                        <button onClick={loauthHandler}>Logout</button>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
