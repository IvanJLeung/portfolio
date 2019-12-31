import React from "react";
import "./GradientCard.scss";

function GradientCard(props) {
    return (
        <div class="card">
            <div class="main">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
            <div class="additional" style={props.style}>
                <div class="more-info">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <i class={props.icon}></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GradientCard;
