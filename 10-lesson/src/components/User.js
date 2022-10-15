import classes from './User.module.css';
import React from "react";

class User extends React.Component {
    componentWillUnmount() {
        console.log('User will unmount!');
    }

    render() {
        return <li className={classes.user}>{this.props.name}</li>
    };
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
