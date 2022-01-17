import Users from "./components/users/Users";
import './App.css';
import {Footer} from "./components/footer/Footer";

export default function App() {
    return (
        <div className="wrap">
            <Users/>
            <Footer/>
        </div>
    );
}
