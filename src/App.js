import Users from "./components/users/Users";
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

export default function App() {
    return (
        <div className="wrap">
            <Header/>
            <Users/>
            <Footer/>
        </div>
    );
}
