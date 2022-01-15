import './BodyWithFilters.css';
import ukraine from '../../img/ukraine.jpg';
import germany from '../../img/germany.jpg';
import russia from '../../img/russia.jpg';
import england from '../../img/england.jpg';
import poland from '../../img/poland.jpg';
import spain from '../../img/spain.jpg';

const Filters = () => {
    return (
        <main className="divWithFilters twoUser">
            <div>
                <h3>Фильтры</h3>
                <p>Только с фотографией</p>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
                <div>
                    <h3>Возраст</h3>
                    <input type="range" id="volume" name="volume"
                           min="0" max="11"/>
                    <form> от <input type="text" placeholder="18yr"/> до<input
                        type="text" placeholder="40"/> лет
                    </form>
                </div>
                <div className="sex">
                    <h3>Пол</h3>
                    <button>Любой</button>
                    <button>Женщины</button>
                    <button>Мужчины</button>
                </div>

                <div className="checkWork">
                    <h3>Желаемая зарплата</h3>
                    <input type="range" id="volume" name="volume"
                           min="0" max="11"/>
                    <form> от <input type="search" placeholder="GFRGR"/> до<input type="text" placeholder="ffr"/></form>
                    <p>Не показывать без зарплаты</p>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"/>
                    </label></div>

                <div className="checkWork">
                    <h3>Опыт работы</h3>
                    <div><input type="checkbox"/><p>Без опыта</p></div>
                    <div><input type="checkbox"/><p>До 1 года</p></div>
                    <div><input type="checkbox"/><p>От 1 до 2 лет</p></div>
                    <div><input type="checkbox"/><p>От 2 до 5 лет</p></div>
                    <div><input type="checkbox"/><p>От 5 до 10 лет</p></div>
                    <div><input type="checkbox"/><p>Более 10 лет</p></div>
                    <div><p>Только студенты</p><label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"/>
                    </label></div>
                </div>


                <h3>Владение языками</h3>
                <section className="languages">
                    <div className="dropdown">
                        <input type="checkbox"/> <img src={england} alt="england"/><span>Английский</span>
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
                        <input type="checkbox"/> <img src={russia} alt="russia"/><span>Русский</span>
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
                        <input type="checkbox"/> <img src={ukraine} alt="ukraine"/><span>Украинский</span>
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
                        <input type="checkbox"/> <img src={germany} alt="germany"/><span>Немецкий</span>
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
                        <input type="checkbox"/> <img src={poland} alt="poland"/><span>Польский</span>
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
                        <input type="checkbox"/> <img src={spain} alt="spain"/><span>Испанский</span>
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
    )
}

export {Filters};
