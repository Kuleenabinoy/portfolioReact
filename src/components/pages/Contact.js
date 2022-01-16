import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
const styles = {
    contactform: {
        margin: 40,
    },
    formControl: {
        margin: 20,
    },
    formlabel: {
        margin: 20,
    },
};

export default function Contact() {
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
        <div>
            <section className="container">
                <h2 className="top-title">Contact Form.. </h2>
                <form style={styles.contactform} className="contactform">
                    <label style={styles.formlabel} className="formlabel">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="formcontol"
                        name="name"
                        defaultValue={name}
                        onChange={handleChange}
                    ></input>
                    <br></br>
                    <label style={styles.formlabel} className="formlabel">
                        Email:
                    </label>
                    <input
                        type="text"
                        name="email"
                        defaultValue={email}
                        onBlur={handleChange}
                        className="formcontol"
                    ></input>

                    <br />
                    <label style={styles.formlabel} className="formlabel">
                        Message:
                    </label>
                    <input
                        type="textarea"
                        name="message"
                        defaultValue={message}
                        onChange={handleChange}
                        className="formcontrol"
                        rows="7"
                    ></input>

                    <br />
                    <button type="submit" onSubmit={handleSubmit}>
                        Submit
                    </button>
                    <div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </form>
            </section>
        </div>
    );
}
