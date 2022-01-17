import './User.css';
import {useState} from "react";

export default function User({item, users}) {
    let [toggle, setToggle] = useState('show')

    return (
        <div>
            {users.map((item) => (
                <div className="user_box">
                    <div className="divWithAll">
                        <h2>Продавец - консультант</h2>
                        <img src={item.photo} alt="qwerty"/>
                        {item.id} -- {item.category} -- {item.first_name}

                        {item.last_name}</div>

                    <div className="oneSmallElement">
                        <p className={toggle}>
                            <div><p>Пожаловаться</p><p>Скрыть кандидата</p></div>
                        </p>
                        <form className="heart">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart" fill="#F42C3C"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </form>
                        <form className="reklamation" onClick={() => {
                            if (toggle === 'hide') {
                                setToggle('show')
                            } else if (toggle === 'show') {
                                setToggle('hide')
                            }
                        }
                        }/>
                    </div>
                </div>)
            )}

        </div>
    );
}
