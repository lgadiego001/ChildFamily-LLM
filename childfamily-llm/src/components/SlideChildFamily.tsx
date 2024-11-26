import Footer from "./Footer";
import NavBar from './NavBar';
import ts1 from '../assets/transscript1.png';

const SlideChildFamily = () => {
    return (
        <>
            <div className="slide">
                <h1>Child Parent Interactions
                </h1>

                <table>
                    <tbody>
                        <tr>
                            <td style={{width:"50%"}}>
                                <div className="parbox">
                                    <ul>
                                        <li>Analyse interactions between children and parents</li>
                                        <li>Video recordings of interactions while jointly reading a book</li>
                                        <li>Labor intensive process to transscribe and classify videos</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <img src={ts1} style={{ width: "100%"}}/>
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

export default SlideChildFamily
