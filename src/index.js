import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'react-vertical-timeline-component/style.min.css';
import {Roadmap} from "./components/roadmap";
import {MainNav} from "./components/nav";
import {EquilibriaSection} from "./components/equilibriasection";
import {ModalPopup} from "./components/modal_popup";
import {Twitter, TwitterParallax} from "./components/twitter";
import {ThreeCols} from "./components/threecols";
import {MainParallax, MiniParallax} from "./components/parallax";
import {DelfiSection} from "./components/delfi";
import {Container} from "react-bootstrap";

class Main extends React.Component {

    render() {
        return (
            <div id={"main"}>
                <MainNav/>
                <MainParallax/>
                <ThreeCols/>
                <TwitterParallax/>
                <EquilibriaSection/>
                <Roadmap/>
                <MiniParallax />
                <DelfiSection />
            </div>

        );
    }
}


ReactDOM.render(<Main/>, document.getElementById('root'));