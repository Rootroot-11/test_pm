import Users from "./components/users/Users";
import './App.css';
import {Header} from "./components/header/Header";

export default function App() {
    return (
        <div className="wrap">
            <Header/>
            <Users/>

        </div>
    );
}
