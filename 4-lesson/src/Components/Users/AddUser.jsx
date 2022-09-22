import {Fragment, useRef, useState} from "react";

import adduser from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({onAddUser}) => {
    const enterUserName = useRef();
    const enterAge = useRef();
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    // const userNameChangeHandler = (event) => {
    //     setEnterAge(event.target.value);
    // };
    //
    // const userAgeChangeHandler = (event) => {
    //     setEnterUserName(event.target.value);
    // };

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enterUserName.current.value.trim().length === 0 || enterAge.current.value.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid Name or Age (non-empty values).',
            });
            return;
        }
        if (+enterAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age',
            });
            return;
        }
        onAddUser(enterUserName, enterAge);
        enterUserName.current.value = '';
        enterAge.current.value = '';
    }

    return (
        <Fragment>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onChange={errorHandler}
                />
            )}
            <Card className={adduser.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        id="username"
                        type="text"
                        ref={enterUserName}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={enterAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser;
