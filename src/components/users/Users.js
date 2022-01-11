import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";
import '../header/Header.css';
import './Users.css';

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.results]));
    }, []);

    return (
        <div className="body">
            <div className="menuOnBody">
                <h1>Мы подобрали 451 642 резюме</h1>
                <hr className="line"/>
                <p>Резюме продавец консультант во Всей Украине</p>
            </div>
            <main>
                <div className="oneUser">
                    {
                        users.map(value => <User item={value} key={value.id}/>)
                    }
                </div>
            </main>
        </div>
    );
}
