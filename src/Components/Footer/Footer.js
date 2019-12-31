import React from "react";
import "./Footer.scss";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Social from "../Social/Social";

function Footer() {
    const socialList = [
        {
            website: "https://twitter.com/HeyoIvan",
            icon: "fab fa-twitter"
        },
        {
            website: "https://www.linkedin.com/in/ivan-leung-2022/",
            icon: "fab fa-linkedin"
        },
        {
            website: "https://github.com/IvanJLeung/",
            icon: "fab fa-github"
        }
    ].map(({ website, icon }) => {
        return <Social class="social" website={website} icon={icon}></Social>;
    });

    return (
        <div class="footer">
            <div class="socialButtons">
                <Roll bottom>{socialList}</Roll>
            </div>
            <div class="copyright">
                <Fade bottom duration={2000}>
                    <p>
                        ©2019 Made with <span class="heart">♥</span> by Ivan Leung. All rights reserved.
                    </p>
                </Fade>
            </div>
        </div>
    );
}

export default Footer;
