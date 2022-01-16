import React from "react";
const styles = {
    a: {
        margin: 30,
    },
};
export default function Resume() {
    return (
        <div>
            <section>
                <h2 className="top-title">Resume</h2>
                <div>
                    <a style={styles.a} href={require("../assets/files/kuleena cv.pdf")}>
                        Download My Resume{" "}
                    </a>
                </div>
                <div>
                    <ul>
                        <br></br>
                        <h3>Front-End Proficiencies</h3>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                    </ul>
                    <ul>
                        <br></br>
                        <h3>Back-End Proficiencies</h3>
                        <li>APIs</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>Model View Controller (MVC)</li>
                        <li>REST</li>
                        <li>Progressive Web Applications (PWA)</li>{" "}
                    </ul>
                    <br></br>

                    <ul>
                        <h3>Dev Tool Proficiencies</h3>
                        <li>Git</li>
                        <li>npm</li>
                        <li>Jest</li>
                        <li>Webpack</li>
                    </ul>
                    <br></br>

                    <ul>
                        <h3>Database Proficiencies</h3>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>NoSQL</li>
                        <li>SQLite</li>
                        <li>GraphQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
