import './Header.css';
import './SmallMenu.css';
import {Container, Navbar, Row} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar className="main">
            <Container>
                <Row>
                    <div className="smallMenu">
                        <p className="candidate">Сооискатель</p>
                        <p className="employer">| Работодатель</p>
                        <p className="hr">| HR</p>
                        <div className="smallMenu2">
                            <p>RU </p>
                            <a href="#"> Войти</a>
                        </div>
                    </div>
                    <div className="header_input-block">
                        <section className="bigMenu">
                            <form className="formS">
                                <div className="search">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="inner-addon"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                    <path fill-rule="evenodd"
                                          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg>
                                <input type="text" placeholder="На какую должность вы ищете кандидата?"
                                       className="firstIn"/>
                                </div>
                            </form>

                            <form>
                                <input type="text" placeholder="Город" className="secondIn"/>
                            </form>
                            <form><input type="submit" name="" value="Найти кандидатов" className="thirdIn"/></form>
                        </section>
                    </div>
                </Row>
            </Container>
        </Navbar>
    )
};

export {Header};
