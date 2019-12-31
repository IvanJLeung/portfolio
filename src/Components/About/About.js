import React from "react";
import "./About.scss";
import Roll from "react-reveal/Roll";
import me from "../../resources/Me.png";

function About() {
    return (
        <div class="container about" id="about">
            <div class="row">
                <div class="col-md left-col">
                    <Roll left>
                        <img src={me} alt="Portrait" />
                    </Roll>
                </div>
                <div class="col-md my-auto right-col">
                    <Roll right delay={500}>
                        <h1>About Me</h1>
                        <p>
                            Hello, my name is Ivan Leung and I am from Irvine, California. I am a second-year Computer
                            Science student at Georgia Institute of Technology concentrating in Artificial Intelligence
                            and Digital Media.
                        </p>
                        <p>
                            Aside from computer programming, I am also very passionate about artistic expression.
                            Currently, I am working towards becoming a web-developer all the while continuing to pursue
                            my passion in film, photography, and graphic design.
                        </p>
                    </Roll>
                </div>
            </div>
        </div>
    );
}

export default About;
