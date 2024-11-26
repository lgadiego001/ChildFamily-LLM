import Footer from "./Footer";
import NavBar from './Navbar';

const SlideLargeLanguageModels = () => {
    return (
        <>
            <div className="slide">
                <h1>Large Language Models
                </h1>

                <div className="parbox">
                    <ul>
                        <li>AI has made tremendous progress in recent years.</li>
                        <li>Extremely large deep neural networks were trained on enormous training data</li>
                        <li>Ever increasing parallel computing power (GPUs)</li>
                        <li>400 Billion parameters</li>
                        <li>Foundational models for vision, generative AI, ...</li>
                        <li>Large language models for text applications: Predict the next token in a stream</li>
                        <li>Tokens are embedded in a high dimensional latent space for similarity</li>
                        <li>Transformer nextworks to model context and attention</li>
                    </ul>
                </div>
                <NavBar />
                <Footer />
            </div>
        </>
    )
}

export default SlideLargeLanguageModels
