import Footer from "./Footer";
import NavBar from './NavBar';

const SlideSetup = () => {
    return (
        <>
            <div className="slide">
                <h1>Child Parent Interactions
                </h1>
                <div className="parbox">
                    <ul>
                        <li>Local setup for privacy and security</li>
                        <li>Consumer grade server: i7 CPU, 32GB RAM, 1 NVidia RTX 3060 GPU</li>
                        <li>LLama3 8B: 8 billion parameters, released April 2024</li>
                        <li><em>instruct</em> model</li>
                        <li>upgrade to Llama 3.2</li>
                    </ul>
                </div>
                <NavBar />
                <Footer />
            </div>
        </>
    )
}

export default SlideSetup
