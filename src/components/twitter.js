import React from "react";
import {Button, Col, Row, Image} from "react-bootstrap";
import "./images/tweet.png"
import {TwitterTweetEmbed} from "react-twitter-embed";

export class Twitter extends React.Component {
    render() {
        return (
            <div className="centerContent">
                <div className="selfCenter">
                    <Row>
                        <Col bsPrefix={"twitter-image-col"}>
                            <Image src={require("./images/tweet.png")}
                                   href={"https://twitter.com/EquilibriaCC/status/1274543946895519744"}
                            />
                        </Col>
                        <Col bsPrefix={"twitter-text-col"}>
                            <h3 id={"twittertext"}>Join us on Twitter and<br/>Discord to stay in the know.</h3>
                            <div className="button-box col-lg-12">
                                <Button href="https://twitter.com/EquilibriaCC" variant={"outline-primary"}
                                        id={"twitter-button"} size="lg">Twitter</Button>
                                <Button href="https://t.co/m25KnRL7yv" variant="outline-primary"
                                        id={"discord-button"} size="lg">Discord</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export class TwitterParallax extends React.Component {
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
                className='twitter-parallax-header-background'
                style={{backgroundPositionY: this.state.offset}}
            >
                <section
                    className='twitter-parallax-container'
                    style={{bottom: this.state.offset / 2}}
                >
                    <Twitter/>
                </section>
            </header>
        );
    }
}

