import React from "react";
import "./ProjectList.scss";
import Fade from "react-reveal/Fade";
import GradientCard from "../GradientCard/GradientCard";

function ProjectList(props) {
    const projectList = [
        {
            title: "CSPaint",
            desc:
                "CSPaint is a JavaFX application that I implemented in my object oriented programming class during my freshman year of college. This program is created to resemble MSPaint, but simpler.",
            link: "https://gist.github.com/IvanJLeung/3996f58fb6bb29a6e37f2f5fcebbca89#gistcomment-3123728",
            icon: "fas fa-palette",
            style: { background: "#fab1a0" }
        },
        {
            title: "Hearthstone Pack Opening Simulator",
            desc:
                "Hearthstone Pack Opening Simulator is a program that replicates the card pack opening system in Hearthstone (an online card game).",
            link: "https://gist.github.com/IvanJLeung/e4fb53fd9d7b1484232e4e820435c164#gistcomment-3123732",
            icon: "fas fa-dragon",
            style: { background: "#b8e994" }
        },
        {
            title: "Ocean Trader",
            desc:
                "Ocean Trader is a spinoff of the popular strategy game Space Trader, seeking to provide the same adventures based on the open seas.",
            link: "https://gist.github.com/IvanJLeung/b5339d87545d39d79dcd5f51f5f4a33d#gistcomment-3123741",
            icon: "fas fa-ship",
            style: { background: "#a3afff" }
        }
    ].map(({ title, desc, link, icon, style }) => {
        return <GradientCard title={title} desc={desc} link={link} icon={icon} style={style}></GradientCard>;
    });

    return (
        <div class="container-fluid projects" id="projects">
            <div class="row">
                <Fade duration={3000}>{projectList}</Fade>
            </div>
        </div>
    );
}

export default ProjectList;
