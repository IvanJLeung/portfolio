import React from "react";
import "./Jumbotron.scss";
import Bounce from "react-reveal/Bounce";
import logo from "../../resources/Hey I'm Ivan.png";

function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <Bounce Bottom duration={2000} delay={500}>
                    <img src={logo} alt="Hey I'm Ivan" />
                </Bounce>
            </div>
        </div>
    );
}

export default Jumbotron;
