import React from "react";
import {Col, Row, Container} from "react-bootstrap";

export class MiniParallax extends React.Component {
    constructor() {
        super()

        this.state = {
            offset: 0
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }

    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset
        });
    };

    render() {
        return (
            <header
                className='parallax-header-background-mini'
                style={{backgroundPositionY: this.state.offset}}
            >
                <section
                    className='parallax-container-mini'
                    style={{bottom: this.state.offset / 4}}
                >
                </section>
            </header>
        );
    }
}

export class MainParallax extends React.Component {
    constructor() {
        super()

        this.state = {
            offset: 0
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }

    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset
        });
    };

    render() {
        return (
            <header
                className='parallax-header-background'
                style={{backgroundPositionY: this.state.offset}}
            >
                <section
                    className='parallax-container'
                    style={{bottom: this.state.offset / 2}}
                >
                    <Row bsPrefix={"parallax-row"}>
                        <Col bsPrefix={"parallax-col"}>
                            {/*<Image id={"xeqheaderlogo"}*/}
                            {/*       src={require("./images/xeqheaderlogo.png")}*/}
                            {/*       alt={"XEQ Header Logo"*/}
                            {/*} />*/}
                            <h1 id={"headertext"}>Powerful.<br/>Private.<br/>Decentralized.
                            </h1>
                        </Col>
                    </Row>
                </section>
            </header>
        );
    }
}