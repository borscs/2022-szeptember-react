import {useState, useRef, useContext} from 'react';

import classes from './AuthForm.module.css';
import AuthContext from "../../Store/auth-context";

const AuthForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLodding, setIsLodding] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enterdEmail = emailInputRef.current.value;
        const enterdPassword = passwordInputRef.current.value;

        setIsLodding(true);

        let url;
        if (!isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAky2Fkzs9b3Qqb6WsI7b2HYW0Mk7NR2zA';
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAky2Fkzs9b3Qqb6WsI7b2HYW0Mk7NR2zA';
        }

            fetch( url,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enterdEmail,
                        password: enterdPassword,
                        returnSecureToken: true,
                    }),
                    headers: {
                        'Content-Type' : 'application/json',
                    }
                }).then((res) => {
                    setIsLodding(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        console.log(data);
                        throw Error(data.error.message);
                    });
                }
            }).then((data) => {
                authCtx.login(data.idToken);
                console.log(data);

            }).catch((err) => {
                alert(err.message);
            });
    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required ref={passwordInputRef}/>
                </div>
                <div className={classes.actions}>
                    {!isLodding ? <button>{isLogin ? 'Login' : 'Create Account'}</button>
                        : <p>Sending request...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
