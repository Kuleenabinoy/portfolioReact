import React from "react";
const styles = {
    logo: {
        width: 50,
        height: 50,
        margin: 50,
        cursor: "pointer",
    },
};
export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <div>
                    <a href="https://github.com/Kuleenabinoy">
                        <img
                            style={styles.logo}
                            src={require("./assets/logos/github-logo.png")}
                            alt="github"
                            className="logo"
                        ></img>
                    </a>
                    <a href="https://www.linkedin.com/in/kuleenabinoy/">
                        <img
                            style={styles.logo}
                            src={require("./assets/logos/linkedin-logo.png")}
                            alt="github"
                            className="logo"
                        ></img>
                    </a>
                </div>
            </div>
        </footer>
    );
}
