import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";
import '../header/Header.css';
import './Users.css';
import {Filters} from "../bodyWithFilters/BodyWithFilters";
import {Header} from "../header/Header";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [page_count, setPage_Count] = useState([]);
    const [page, setPage] = useState(1);

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
    const [value, setValue] = useState([]);

    const paginationHandler = (num) => {
        setPage(page + num)
    };

    return (
        <div className="body">
            <Header/>

            <div className="menuOnBody">
                <h1>Мы подобрали <b>451 642</b> резюме</h1>
               <div><hr className="line"/></div>
                <div className="smallWindows">
                    <p>Резюме продавец консультант во Всей Украине</p>
                    <b>за все время</b>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="blue"
                         className="bi bi-chevron-down special" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
            <section className="mainUsers">
                <div className="oneUser">
                    {
                        <User item={value} users={users} key={value.id}/>
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
