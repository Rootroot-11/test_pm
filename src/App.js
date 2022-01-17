import Users from "./components/users/Users";
import './App.css';
import {Footer} from "./components/footer/Footer";
import {FooterSecond} from "./components/footer2/FooterSecond";

export default function App() {
    return (
        <div className="wrap">
            <Users/>
            <Footer/>
            <FooterSecond/>
        </div>
    );
}
