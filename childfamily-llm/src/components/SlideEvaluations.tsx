import Footer from "./Footer";
import NavBar from './NavBar';
import ev1 from '../assets/eval1.png';

const SlideEvaluations = () => {
    return (
        <>
            <div className="slide">
                <h1>Evaluations
                </h1>

                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: "50%" }}>
                                <div className="parbox">
                                    <ul>
                                        <li>Anecdotal: slightly better performance for Prompt 2</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <img src={ev1} style={{ width: "100%" }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <NavBar />
                <Footer />
            </div>
        </>
    )
}

export default SlideEvaluations
