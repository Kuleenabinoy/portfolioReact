import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
    // const styles = {
    //     submitbtn: {
    //         margin: 30,
    //     },
    // };
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage("please enter a valid email");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <section>
            <div className="container">
                <h2 className="page-header">Contact Me</h2>
            </div>
            <div>
                <form id="contact-form">
                    <div>
                        <label>Name:</label>
                        <br></br>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="Name" />
                    </div>
                    <div>
                        <label>Email address:</label>
                        <br></br>
                        <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                    </div>
                    <div>
                        <label>Message:</label>
                        <br></br>
                        <textarea name="Message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" onSubmit={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
    //     <div>
    //         <section className="container">
    //             <h2 className="top-title">Contact Form.. </h2>

    //             <form className="contactform">
    //                 <div>
    //                     <label className="formlabel">Name:</label>
    //                     <input
    //                         type="text"
    //                         className="formcontrol"
    //                         name="name"
    //                         defaultValue={name}
    //                         onChange={handleChange}
    //                     ></input>
    //                 </div>
    //                 <div>
    //                     {" "}
    //                     <label className="formlabel">Email:</label>
    //                     <input
    //                         type="text"
    //                         name="email"
    //                         defaultValue={email}
    //                         onBlur={handleChange}
    //                         className="formcontrol"
    //                     ></input>
    //                 </div>
    //                 <div>
    //                     <label className="formlabel">Message:</label>
    //                     <textarea
    //                         name="message"
    //                         defaultValue={message}
    //                         onChange={handleChange}
    //                         className="formcontrol"
    //                         rows="5"
    //                     />
    //                 </div>
    //                 <div>
    //                     <button style={styles.submitbtn} className="submitbtn" type="submit" onSubmit={handleSubmit}>
    //                         Submit
    //                     </button>
    //                 </div>
    //                 <div>
    //                     {errorMessage && (
    //                         <div>
    //                             <p className="error-text">{errorMessage}</p>
    //                         </div>
    //                     )}
    //                 </div>
    //             </form>
    //         </section>
    //     </div>
    // );
}
