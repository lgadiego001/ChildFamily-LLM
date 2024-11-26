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
                <li>
                    <Link to="/child-parent-interactions">CPI</Link>
                </li>
                <li>
                    <Link to="/classifications">Class.</Link>
                </li>
                <li>
                    <Link to="/setup">Setup</Link>
                </li>
                <li>
                    <Link to="/prompts">Prompts</Link>
                </li>
                <li>
                    <Link to="/evaluations">Evaluation</Link>
                </li>
                <li>
                    <Link to="/conclusions">Conclusions</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar