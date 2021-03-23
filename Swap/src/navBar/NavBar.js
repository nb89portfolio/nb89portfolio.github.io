import React, { Component } from "react";
import './navBar.css';
import Logo from '../global/logo/logo.svg';
import GitHub from '../global/github/github.svg';
import StackOverflow from '../global/stackoverflow/StackOverflow.svg';
import LinkedIn from '../global/linkedin/linkedin.svg';
import Plum from '../global/plum/plum.svg';

class NavBar extends Component {
    render() {
        return (            
            <nav>
                <a href="#"><img src={Logo} alt="The logo home button is a outlined file folder."></img></a>
                <span>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Lessons</a></li>
                        <li><a href="#">Client</a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><img src={GitHub} alt="GitHub logo button."></img></a></li>
                        <li><a href="#"><img src={StackOverflow} alt="Stack Overflow logo button."></img></a></li>
                        <li><a href="#"><img src={LinkedIn} alt="Linked In logo button."></img></a></li>
                        <li><a href="#"><img src={Plum} alt="Plum logo button."></img></a></li>
                    </ul>
                </span>
            </nav>
        );
    }
}

export default NavBar;