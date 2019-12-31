import React from "react";
import "./Breaker.scss";
import Fade from "react-reveal/Fade";

function Breaker(props) {
    return (
        <div class="container-fluid breaker">
            <Fade top>
                <img src={props.url} alt={props.alt} />
            </Fade>
        </div>
    );
}

export default Breaker;
