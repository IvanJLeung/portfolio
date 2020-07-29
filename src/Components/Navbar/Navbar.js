import React from "react";
import "./Navbar.scss";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#home">
                <p>Ivan Leung</p>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="mr-auto"></div>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">
                            <p>Home</p> <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="#projects">
                            <p>Projects</p>
                        </a>
                    </li> */}
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="https://drive.google.com/file/d/1EsUZrDwQkVLEr0Xk9woJ1p9Z8m1u1Cj2/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>Resume</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">
                            <p>About</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
