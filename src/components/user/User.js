import './User.css';

export default function User({item}) {
    return (
        <div className="avatar_box">
            <img src={item.photo} alt="qwerty"/>

            <div className="user_box">
                <h2>Продавец - консультант</h2>
                {item.id} -- {item.category} - {item.currency} -- {item.first_name}
                <hr/>
                {item.last_name}
            </div>
        </div>
    );
}
