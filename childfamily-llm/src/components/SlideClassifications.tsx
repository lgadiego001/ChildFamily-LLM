import Footer from "./Footer";
import NavBar from './NavBar';
import ts1 from '../assets/transscript1.png';

const SlideClassifications = () => {
    return (
        <>
            <div className="slide">
                <h1>Classifications
                </h1>

                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: "50%" }}>
                                <div className="parbox">
                                    <ul>
                                        <li><b>Evaluate (Ev)</b>: responding to child's speech (e.g., praise, correct, scold)</li>
                                        <li><b>Expand (Ex)</b>: elaborating on child's speech</li>
                                        <li><b>Prompt (P)</b>: prompting child to do something</li>
                                        <li><b>Repeat (R)</b>: ask child to repeat</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <img src={ts1} style={{ width: "100%" }} />
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

export default SlideClassifications
