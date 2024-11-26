import Footer from "./Footer";
import NavBar from './NavBar';

const SlideLargeLanguageModels = () => {
    return (
        <>
            <div className="slide">
                <h1>Conclusions
                </h1>

                <div className="parbox">
                    <ul>
                        <li>LLMs hold promise to help with data cleaning and data preparation tasks</li>
                        <li>Individual classifications may be different, but summary scores are similar</li>
                        <li>Hallucinations were more pronounced with more complex prompts. Lower temperature</li>
                        <li>Creation of simulated interactions for training of psychologiests</li>
                    </ul>
                </div>
                <div style={{height:"100px"}}>
                </div>
                <div className="parbox" style={{ fontSize: "0.5em" }}>
                    <p>
                        This research has been supported through the following NSTC grants: NSTC 113-2221-E-003 -010.
                        This work was also financially supported by the Chinese Language and Technology Center of
                        National Taiwan Normal University (NTNU) from The Featured Areas Research Center Program
                        within the framework of the Higher Education Sprout Project by the Ministry of
                        Education (MOE) in Taiwan.
                    </p>
                </div>
                <NavBar />
                <Footer />
            </div>
        </>
    )
}

export default SlideLargeLanguageModels
