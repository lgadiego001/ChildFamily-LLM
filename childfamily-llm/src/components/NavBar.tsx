import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Start</Link>
                </li>
                <li>
                    <Link to="/large-language-models">LLMs</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar