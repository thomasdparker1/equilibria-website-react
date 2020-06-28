import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {EquilibriaSupply, HashRate, NumberOfOracleNodes, OracleInfo, Roi, StakingRequirement} from "./api_requests";

export class DelfiSection extends React.Component {
    render() {
        return (
            <div >
                <h2 id={"networkinfoheader"}>DELFI Protocol</h2>
                <div id={"firstdelfirow"}>
                    <div id={"delficols"}>
                        <h2 id={"delfih2"}>Strengthen Your Project</h2>
                        <p id={"delifparagraph"}>DELFI allows anyone to access pricing data through Equilibria Oracle Nodes with ease.
                        This creates an easy way for any project to increase its decentralization and/or increase the reliability
                        of their pricing data.
                        <br/>
                        <br/>
                        • Allows third-party chains to use the asset sidechain<br/>
                        • Oracle Nodes create a decentralized asset tracking system<br/>
                        • Possible uses: stablecoins, asset derivatives, and DEX's<br/>
                        • The network is rewarded from sidechain usage<br/>
                        </p>
                        <div id={"delfibtndiv"}>
                            <Button variant="outline-primary" id={"delfibtn"}><strong>Join the Discussion</strong></Button>
                        </div>
                    </div>
                </div>
                    <Row id={"networkrow"}>
                        <Col bsPrefix={"equilibriacols2"}>
                        </Col>
                        <Col bsPrefix={"equilibriacols"}>
                            <h2 id={"oracleequilibriah"}>How DELFI Works</h2>
                            <p id={"equilibriaparagraph"}>...</p>
                            <p id={"equilibriaparagraph"}>Ready to start your node?</p>
                            <div id={"delfibtndiv"}>
                                <Button variant="outline-primary" id={"delfibtn"}><strong>Strengthen Your Project</strong></Button>
                            </div>
                        </Col>
                    </Row>
            </div>

        )
    }
}