import React from "react";
import "./Social.scss";

function Social(props) {
    return (
        <div class="social">
            <a href={props.website} target="_blank" rel="noopener noreferrer">
                <i class={props.icon}></i>
            </a>
        </div>
    );
}

export default Social;
