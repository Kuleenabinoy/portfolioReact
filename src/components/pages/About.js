import React from "react";
const styles = {
    avatar: {
        height: 300,
    },
};
export default function About() {
    return (
        <section className="container">
            <h2 class="top-title">Kuleena Binoy</h2>
            <hr></hr>
            <div>
                <img style={styles.avatar} id="avatar" src={require("../assets/images/imageme.jpg")} alt="avatar" />
                <p>
                    Web Developer passionate about building and designing creative, impactful and user-friendly web
                    applications. I am a Graduate in Computer Science, recently earned Certificate in Full Stack Web
                    Development from the Monash University, with skills in JavaScript, Html, CSS, JavaScript, Node.js,
                    React.js, and Responsive web design.
                </p>
                I always provide result driven solutions utilising my hands-on experience of designing, developing, and
                implementing applications and solutions with a range of technologies and programming languages.
                <p>
                    My work experience in various sectors has strengthened my confidence and increased my resilience to
                    handle work-related pressures in demanding circumstances. I have worked closely with the management team
                    of a growing business consulting practice in its early stages and as a team we have achieved all the
                    team targets.
                </p>
                <p>
                    I am looking forward to implementing my technical skills and collaborative nature to write cleaner code,
                    identify and fix errors, and assist my team in achieving the performance targets, in line with the
                    organisational objectives and values.
                </p>
            </div>
        </section>
    );
}
