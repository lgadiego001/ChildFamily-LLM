import Footer from "./Footer";
import ts1 from "../assets/transscript1.png";
import NavBar from './NavBar'

const SlideTitle = () => {
    return (
        <>
            <div className="slide">
                <h1>Sentiment Analysis using LLMs for Parent Child Interactions
                </h1>
                <h2>Jacky Baltes^1, Shinmin Wang^2, Sia Yean^2, Alex Socop^2, Saeed Saeedvand^1 <br />
                    <a href="mailto:jacky.baltes@ntnu.edu.tw">jacky.baltes@ntnu.edu.tw</a><br />
                    (1) Dept. of Electrical Engineering <br />
                    (2) Dept. of Child and Family Science <br />
                    National Taiwan Normal University, Taipei, Taiwan</h2>

                <div className="parbox">
                    <ul>
                        <li>Collaboration between Dept. of Electrical Engineering and Dept. of Child and Family Science at NTNU</li>
                        <li>High workload for case workers in analysing transscripts of parents interacting with their children</li>
                    </ul>
                </div>

                <div>
                    <img src={ts1} style={{ width: "50vw" }} />
                </div>
                <NavBar />
                <Footer />
            </div>
        </>
    )
}

export default SlideTitle
