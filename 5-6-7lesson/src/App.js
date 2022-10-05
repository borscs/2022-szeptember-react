import React, {Fragment, useContext} from 'react';

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";

function App() {
    const ctx = useContext(AuthContext)
    return (
        <Fragment>
            <MainHeader/>
            <main>
                {!ctx.isLoggedIn && <Login/>}
                {ctx.isLoggedIn && <Login/>}
            </main>
        </Fragment>
    );
}

export default App;
