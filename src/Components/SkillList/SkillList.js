import React from "react";
import "./SkillList.scss";
import Fade from "react-reveal/Fade";
import Skill from "../Skill/Skill";

function SkillList(props) {
    const programming = ["Java", "Python", "C/C++", "Data Structures", "Algorithms"].map((skill) => (
        <Skill title={skill}></Skill>
    ));

    const web = ["React", "HTML5", "CSS/Sass", "Javascript", "Bootstrap"].map((skill) => <Skill title={skill}></Skill>);

    const media = ["Git", "SQL", "Computer Graphics", "Graphic Design", "Video/Photo Editing"].map((skill) => (
        <Skill title={skill}></Skill>
    ));

    return (
        <div class="container skills">
            <div class="row">
                <div class="col-md">
                    <Fade left delay={500}>
                        {web}
                    </Fade>
                </div>
                <div class="col-md">
                    <Fade bottom delay={1000}>
                        {programming}
                    </Fade>
                </div>
                <div class="col-md">
                    <Fade right delay={1500}>
                        {media}
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default SkillList;
