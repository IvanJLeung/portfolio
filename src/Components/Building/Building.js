import React from "react";
import "./Building.scss";
import Fade from "react-reveal/Fade";
import buildings from "../../resources/Buildings.png";

function Building() {
    return (
        <div class="container-fluid">
            <Fade bottom distance="30%" duration={1500} delay={1000}>
                <img src={buildings} alt="Buildings" />
            </Fade>
        </div>
    );
}

export default Building;
