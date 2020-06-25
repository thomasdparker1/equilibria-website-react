import React from "react";
import {Col, Row} from "react-bootstrap";
import {ModalPopup} from "./modal_popup";

//The colums for XEQ DELFI and ili

export class ThreeCols extends React.Component {
    render() {
        return (

            <Row>
                <Col bsPrefix={"threecols1"}>
                    <h3 id={"threecolsHeader"}>Equilibria</h3>
                    <p id={"threecolstext"}>Private and Decentralized Oracle Nodes that monitor data and relay
                        it back to the blockchain</p>
                    <ModalPopup name={"equilibria"}/>
                </Col>
                <Col bsPrefix={"threecols2"}>
                    <h3 id={"threecolsHeader"}>DelFi</h3>
                    <p id={"threecolstext"}>Decentralized asset price tracking designed for stablecoins and
                        asset derivatives</p>
                    <ModalPopup name={"delfi"}/>
                </Col>
                <Col bsPrefix={"threecols3"}>
                    <h3 id={"threecolsHeader"}>ili Bet</h3>
                    <p id={"threecolstext"}>ili adds transparency to the eSport match betting scene —
                        something the space has needed for years</p>
                    <ModalPopup name={"ili"}/>
                </Col>
            </Row>

        )
    }
}
