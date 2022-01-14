import React from "react";

export default function Footer() {
    return (
        <div>
            <div>
                <a href="https://github.com/Kuleenabinoy">
                    <img src={require("./assets/logos/github-logo.png")} alt="github" className="logo"></img>
                </a>
                <a href="https://www.linkedin.com/in/kuleenabinoy/">
                    <img src={require("./assets/logos/linkedin-logo.png")} alt="github" className="logo"></img>
                </a>
            </div>
        </div>
    );
}
