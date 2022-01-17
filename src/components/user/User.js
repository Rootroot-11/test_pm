import './User.css';
import {useState} from "react";

export default function User({item, users}) {
    let [toggle, setToggle] = useState('show')

    return (
        <div>
            {users.map((item) => (
                <div className="user_box">
                    <h2>Продавец - консультант</h2>
                    <img src={item.photo} alt="qwerty"/>
                    {item.id} -- {item.category} -- {item.first_name}

                    <p className={toggle}>
                        <div><p>Пожаловаться</p><p>Скрыть кандидата</p></div>
                    </p>
                    {item.last_name}
                    <form className="reklamation" onClick={()=> {
                        if (toggle === 'hide'){
                            setToggle('show')
                        } else  if (toggle === 'show'){
                            setToggle('hide')
                        }
                    }
                    }/>
                </div>)
            )}

        </div>
    );
}
