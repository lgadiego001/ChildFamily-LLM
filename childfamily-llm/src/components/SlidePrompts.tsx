import Footer from "./Footer";
import NavBar from './NavBar';

const SlidePrompts = () => {

    const prompt1 = `
You are a child psychologist. ...
Classify each of the following interactions into one
of several categories:
PROMPT (parent asks further questions to make the
child elaborate),
EVALUATE (parent praises or scolds the child),
EXPAND (parent elaborates on the child's speech or action)
REPEAT (parent requests the child to repeat after her),
or UNKNOWN (interaction type is unknown).
For each block of messages, return a classification
in JSON format using the following template ...
Continue until you classified all interactions.
`;

    const prompt2 = `
You are a child psychologist. Below is a transcript
of an interaction between a child and the parent while
they are reading a book. Classify the parent's speech
as PROMPT (asking relevant questions), EVALUATE
(responding to the child), EXPAND (elaborating on the
child's speech) or REPEAT (requesting the child to say
something). Here are some examples of the classifications.
Example 1: Child: "Woof, woof!" Mother: "Oh, woof, woof?"
Classification: EVALUATE. The mother responded to the
child's utterance.
Example 2: Child: "woof, woof!" Mother: "Look, woof-woof is
wagging his tail."
Classification: EXPAND.
The mother provided more details to the child's speech.
Example 3: Child: "A car." Mother: "A red car."
Classification: EXPAND. The mother described the object
that the child mentioned.
...
`;

    return (
        <>
            <div className="slide">
                <h1>Prompt Engineering
                </h1>

                <div className="parbox">
                    <p>Fine-tuning of the network is expensive ($20,000 USD)</p>
                    <p>Black art: create the correct prompt to guide the network (into the correct completions)</p>
                    <table>
                        <tbody>
                            <tr style={{verticalAlign: "top"}}>
                                <td style={{ width: "50%" }}>
                                    <p>Prompt 1:</p>
                                    <div style={{ fontSize: "0.4em", background: "#c0c0c0", color: "#101010" }}>
                                        <pre>
                                            {prompt1}
                                        </pre>
                                    </div>
                                </td>
                                <td style={{ width: "50%" }}>
                                    <p>Prompt 2:</p>
                                    <div style={{ fontSize: "0.4em", background: "#c0c0c0", color: "#101010" }}>
                                        <pre>
                                            {prompt2}
                                        </pre>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <NavBar />
                <Footer />
            </div>
        </>
    )
}

export default SlidePrompts;
