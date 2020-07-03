import Popup from "reactjs-popup";
import {Button, Col, Row} from "react-bootstrap";
import React from "react";
import {EquilibriaSection} from "./equilibriasection"

export let myState = ""

export class ModalPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName : "null",
            name : "null",
            content : "null",
            isRendered : false
        }
    }
    componentDidMount(lastName, content) {
        let name = this.props.name
        this.setState({lastName: name})
        if (name === "ili") {
            this.setState({name: name})
            this.setState({lastName: "ili"})
        } else if (name === "equilibria") {
            this.setState({name: name})
            this.setState({lastName: "equilibria"})
        } else if (name === "delfi") {
            this.setState({name: name})
            this.setState({lastName: "delfi"})
        }

    }

    newRender() {
            return <EquilibriaSection />
    }
    render() {
        let name = this.state.name
        let lastName = this.state.lastName
        let content = this.state.content
        let isRendered = this.state.isRendered

        if (name === "ili") {
            myState = "ili"
        } else if (name === "equilibria") {
            myState = "equilibria"
        } else if (name === "delfi") {
            myState = "delfi"
        }
        console.log(myState)
        return (

            <Row>
                <Col bsPrefix={"threecols1"}>
                    <h3 id={"threecolsHeader"}>Equilibria</h3>
                    <p id={"threecolstext"}>Private and Decentralized Oracle Nodes that monitor data and relay
                        it back to the blockchain</p>
                    <Button variant="outline-primary" id={"threecolsbtn"}>Learn about Equilibria</Button>
                </Col>
                <Col bsPrefix={"threecols2"}>
                    <h3 id={"threecolsHeader"}>DelFi</h3>
                    <p id={"threecolstext"}>Decentralized asset price tracking designed for stablecoins, asset derivatives, and DEX's.</p>
                    <Button variant="outline-primary" id={"threecolsbtn"}>Learn about Equilibria</Button>
                </Col>
                <Col bsPrefix={"threecols3"}>
                    <h3 id={"threecolsHeader"}>ili Bet</h3>
                    <p id={"threecolstext"}>ili adds transparency to the eSport match betting scene —
                        something the space has needed for years</p>
                    <Button variant="outline-primary" id={"threecolsbtn"}>Learn about Equilibria</Button>
                </Col>
            </Row>

        )
    }
}