import './Header.css';
import './SmallMenu.css';
import {HeaderWrapper} from "./styled";

const Header = () => {
    return (
        <div>
            <div className="smallMenu">
                <p className="candidate">Сооискатель</p>
                <p className="employer">| Работодатель</p>
                <p className="hr">| HR</p>
            </div>
            <div className="header_input-block">
                <section className="bigMenu">
                    <form>
                        <input type="text" placeholder="На какую должность вы ищете кандидата?" className="firstIn"/>
                    </form>

                    <form>
                        <input type="text" placeholder="Город" className="secondIn"/>
                    </form>
                    <form><input type="submit" name="" value="Найти кандидатов" className="thirdIn"/></form>
                </section>
            </div>
        </div>
    )
};

export {Header};
