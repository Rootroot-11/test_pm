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

            <div className="oneUser">
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
            <main className="divWithFilters twoUser">
                <div>
                    <h3>Фильтры</h3>
                    <p>Только с фотографией</p>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <div>
                        <h3>Возраст</h3>
                        <input type="range" id="volume" name="volume"
                               min="0" max="11"/>
                        <form> от <input type="text" placeholder="18yr"/> до<input
                            type="text" placeholder="40"/> лет
                        </form>
                    </div>
                    <div>
                        <h3>Пол</h3>
                    </div>

                    <h3>Желаемая зарплата</h3>
                    <input type="range" id="volume" name="volume"
                           min="0" max="11"/>
                    <form> от <input type="search" placeholder="GFRGR"/> до<input type="text" placeholder="ffr"/></form>
                    <p>не показывать без зарплаты</p>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>

                    <h3>Опыт работы</h3>

                    <h3>Владение языками</h3>
                    <input type="checkbox"/>
                    <input type="checkbox"/>

                    <section className="languages">
                        <div className="dropdown">
                            <span>Английский</span>
                            <div className="dropdown-content">
                                <p>(А1) – начальный</p>
                                <p>(А2) – ниже среднего</p>
                                <p>(В1) – средний</p>
                                <p>(В2) – выше среднего</p>
                                <p>(C1) – продвинутый</p>
                                <p>(C2) – профессиональный уровень владения</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span>Русский</span>
                            <div className="dropdown-content">
                                <p>(А1) – начальный</p>
                                <p>(А2) – ниже среднего</p>
                                <p>(В1) – средний</p>
                                <p>(В2) – выше среднего</p>
                                <p>(C1) – продвинутый</p>
                                <p>(C2) – профессиональный уровень владения</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span>Украинский</span>
                            <div className="dropdown-content">
                                <p>(А1) – начальный</p>
                                <p>(А2) – ниже среднего</p>
                                <p>(В1) – средний</p>
                                <p>(В2) – выше среднего</p>
                                <p>(C1) – продвинутый</p>
                                <p>(C2) – профессиональный уровень владения</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span>Немецкий</span>
                            <div className="dropdown-content">
                                <p>(А1) – начальный</p>
                                <p>(А2) – ниже среднего</p>
                                <p>(В1) – средний</p>
                                <p>(В2) – выше среднего</p>
                                <p>(C1) – продвинутый</p>
                                <p>(C2) – профессиональный уровень владения</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span>Польский</span>
                            <div className="dropdown-content">
                                <p>(А1) – начальный</p>
                                <p>(А2) – ниже среднего</p>
                                <p>(В1) – средний</p>
                                <p>(В2) – выше среднего</p>
                                <p>(C1) – продвинутый</p>
                                <p>(C2) – профессиональный уровень владения</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span>Испанский</span>
                            <div className="dropdown-content">
                                <p>(А1) – начальный</p>
                                <p>(А2) – ниже среднего</p>
                                <p>(В1) – средний</p>
                                <p>(В2) – выше среднего</p>
                                <p>(C1) – продвинутый</p>
                                <p>(C2) – профессиональный уровень владения</p>
                            </div>
                        </div>
                    </section>
                    <span className="flag-icon flag-icon-eng"/>
                    <span className="flag-icon flag-icon-afg"/>

                    <div className="checkWork">
                        <h3>Тип занятости</h3>
                        <div><input type="checkbox"/> <p>Полная занятость</p></div>
                        <div><input type="checkbox"/>  <p>Неполная занятость</p></div>
                        <div><input type="checkbox"/>  <p>Удаленная работа</p></div>
                    </div>

                    <div className="checkWork">
                        <h3>Образование</h3>
                        <div><input type="checkbox"/><p>Высшее</p></div>
                        <div><input type="checkbox"/><p>Неоконченное высшее</p></div>
                        <div><input type="checkbox"/><p>Средне-специальное</p></div>
                        <div><input type="checkbox"/><p>Среднее</p></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
