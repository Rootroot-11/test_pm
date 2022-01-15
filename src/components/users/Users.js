import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";
import '../header/Header.css';
import './Users.css';
import {Filters} from "../bodyWithFilters/BodyWithFilters";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [page_count, setPage_Count] = useState([]);
    const [page, setPage] = useState(1);
    const [value] = useState('');

    useEffect(() => {
        getUsers(page, 10)
            .then(value => {
                setUsers(value.results)
                const arr = []
                for (let i = 0; i < value.page_count; i++) {
                    arr.push(i)
                }
                setPage_Count(arr);
            });
    }, [page]);

    const paginationHandler = (num) => {
        setPage(page + num)
    };

    return (
        <div className="body">
            <div className="menuOnBody">
                <h1>Мы подобрали 451 642 резюме</h1>
                <hr className="line"/>
                <p>Резюме продавец консультант во Всей Украине</p>
            </div>
<section className="mainUsers">
            <div className="oneUser">
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
            <Filters/>
</section>
            <div className="pagination">
                <button disabled={page <= 1} onClick={() => paginationHandler(-1)}>prev</button>
                {
                    page_count.map((_, index) => <button
                        className={page === index + 1 ? 'activeBtn' : 'btn'}
                        onClick={() => setPage(index + 1)}>{index + 1}</button>)
                }
                <button disabled={page >= page_count} onClick={() => paginationHandler(1)}>next</button>
            </div>

        </div>
    );
}
