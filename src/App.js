import axios from "axios"
import { useEffect, useState } from "react";
import './App.css';
import UserList from './UserList'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {

        setUsers(response.data);
      })
}, []);
 
  return (
    <div className="App">
      <h1 className="title">List of Users</h1>
      {<UserList users={users}/>}
    </div>
  );
}

export default App;
