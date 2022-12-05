import React, {useCallback, useState} from "react";


const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
})



export const AuthContextProvider = (props) => {
    const tokenData = localStorage.getItem('token');

    let initialToken;
    if(tokenData){
        initialToken = tokenData.token;
    }


    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    console.log(!!token);

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logOutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
    }, []);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logOutHandler,
    }
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext
