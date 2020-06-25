import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {DelfiPicture, MobilePicture, WalletPicture} from "./pictures";

export class HashRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://api.ili.bet/api/v1/explorer")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <h2 id={"oraclenodeheader"}>Hashrate: Unkown</h2>;
        } else if (!isLoaded) {
            return <h3 id={"oraclenodeheader"}>Hashrate: ...</h3>;
        } else {
            return (
                <h3 id={"oraclenodeheader"}>Hashrate:<br/>{this.state.items.hashrate}</h3>
            );
        }
    }
}

export class Roi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://api.ili.bet/api/v1/explorer")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <h2 id={"oraclenodeheader"}>Daily Return: Unkown</h2>;
        } else if (!isLoaded) {
            return <h3 id={"oraclenodeheader"}>Daily Return: ...</h3>;
        } else {
            return (
                <h3 id={"oraclenodeheader"}>Daily Return:<br/>{Math.round(this.state.items.nodereward)} XEQ</h3>
            );
        }
    }
}

export class StakingRequirement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://api.ili.bet/api/v1/explorer")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <h2 id={"oraclenodeheader"}>Requirement: Unkown</h2>;
        } else if (!isLoaded) {
            return <h3 id={"oraclenodeheader"}>Requirement: ...</h3>;
        } else {
            return (
                <h3 id={"oraclenodeheader"}>Requirement:<br/>{this.state.items.stakingreq} XEQ</h3>
            );
        }
    }
}

export class NumberOfOracleNodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://api.ili.bet/api/v1/explorer")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <h2 id={"oraclenodeheader"}>Active Oracle Nodes: Unkown</h2>;
        } else if (!isLoaded) {
            return <h2 id={"oraclenodeheader"}>Active Oracle Nodes: ...</h2>;
        } else {
            return (
                <h2 id={"oraclenodeheader"}>Oracle Nodes:<br/>{this.state.items.numberofservicenodes} Active</h2>
            );
        }
    }
}

export class OracleInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://api.ili.bet/api/v1/explorer")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <h2 id={"oraclenodeheader"}>Active Oracle Nodes: Unkown</h2>;
        } else if (!isLoaded) {
            return <h2 id={"oraclenodeheader"}>Active Oracle Nodes: ...</h2>;
        } else {
            return (
                <Row id={"firstequilibriatextrow"}>
                    <Col bsPrefix={"equilibriacols2"}>
                    </Col>
                    <Col bsPrefix={"equilibriacols"}>
                        <h2 id={"oracleequilibriah"}>Get Rewarded for Contributing</h2>
                        <p id={"equilibriaparagraph"}>Equilibria Oracle Node stakers get rewarded for running a node.
                            This helps incentivize
                            good actors to run nodes that protect and strengthen the network.</p>
                        <p id={"equilibriaparagraph"}>The current cost of starting a node
                            is <strong>{items.stakingreq} XEQ</strong> which grants you <strong>{items.blockreward}
                                XEQ</strong> every {items.numberofservicenodes} blocks.
                            At this rate you will make <strong>{items.nodereward} XEQ</strong> per day for each node you
                            have, and you will have a
                            100% ROI in <strong>{items.breakeven} days</strong>.</p>
                        <p id={"equilibriaparagraph"}>Ready to start your node?</p>
                        <div id={"oraclebtndiv"}>
                            <Button variant="outline-primary" id={"oraclebtn"}><strong>Get Started</strong></Button>
                        </div>
                    </Col>
                </Row>
            );
        }
    }
}

export class EquilibriaSupply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://api.ili.bet/api/v1/explorer")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <h2 id={"oraclenodeheader"}>Supply: Unkown</h2>;
        } else if (!isLoaded) {
            return <h2 id={"oraclenodeheader"}>Supply: ...</h2>;
        } else {
            return (
                <h2 id={"oraclenodeheader"}>Supply:<br/>{this.state.items.supply}/84M</h2>
            );
        }
    }
}

export class MetalPrices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://api.ili.bet/api/v1/metals")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <h3>Gold Price: {this.state.items.XAU}</h3>
            );
        }
    }
}
