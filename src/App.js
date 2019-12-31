import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import skills from "./resources/Skills.png";

import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Building from "./Components/Building/Building";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Breaker from "./Components/Breaker/Breaker";
import SkillList from "./Components/SkillList/SkillList";
import ProjectList from "./Components/ProjectList/ProjectList";

function App() {
    return (
        <div>
            <section class="section-1">
                <Navbar></Navbar>
                <Jumbotron></Jumbotron>
                <Building></Building>
            </section>
            <section class="section-2">
                <About></About>
            </section>
            <section class="section-3">
                <Breaker url={skills} alt="Skills"></Breaker>
                <SkillList></SkillList>
            </section>
            <section class="section-4">
                <ProjectList></ProjectList>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default App;
