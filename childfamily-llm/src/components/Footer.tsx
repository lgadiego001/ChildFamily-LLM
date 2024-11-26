import logo from "../assets/ntnu logo red.png";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <table style={{ padding: "50" }} >
                    <tbody>
                        <tr>
                            <td style={{width:"33%"}}>
                                <img src={logo} />
                            </td>
                            <td style={{ width: "33%" }}>
                                <p>ICAST 2024</p>
                            </td>
                            <td style={{ width: "33%" }}>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Footer
