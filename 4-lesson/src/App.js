import logo from './logo.svg';
import './App.css';

import {Fragment, useState} from "react";

import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUsersHandler = (uName, uAge) =>{
    setUserList((prevUserList) => {
      return [
          ...prevUserList,
        {
          name: uName, age: uAge, id: Math.random().toString()
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUsersHandler}/>
      {/*<UserList users={userList}/>*/}
    </Fragment>
  );
}

export default App;
