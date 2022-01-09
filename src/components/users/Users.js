import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";
import '../header/Header.css';

export default function Users() {

  const [users, setUsers] = useState([]);
  useEffect(()=> {
    getUsers().then(value => setUsers([...value.results]));
  },[]);

    return (
        <div>
          {
            users.map(value => <User item={value} key={value.id}/>)
          }
        </div>
    );
}
