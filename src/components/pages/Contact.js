import React from "react";
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
    return (
        <div>
            <section className="container">
                <h2 className="top-title">Contact Form.. </h2>
                <form style={styles.contactform} className="contactform">
                    <label style={styles.formlabel} className="formlabel">
                        Name:
                    </label>
                    <input type="text" className="formcontol"></input>
                    <br></br>
                    <label style={styles.formlabel} className="formlabel">
                        Email:
                    </label>

                    <input type="text" className="formcontol"></input>
                    <br />
                    <label style={styles.formlabel} className="formlabel">
                        Message:
                    </label>
                    <input type="textarea" className="formcontrol" rows="5"></input>
                    <br />
                    <button>Submit</button>
                </form>
            </section>
        </div>
    );
}
