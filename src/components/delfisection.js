import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {EquilibriaSupply, HashRate, NumberOfOracleNodes, OracleInfo, Roi, StakingRequirement} from "./api_requests";

export class DelfiSection extends React.Component {
    render() {
        return (
            <div>
                <h2 id={"networkinfoheader"}>DELFI Protocol</h2>
                <Row id={"firstequilibriatextrow"}>
                    <Col bsPrefix={"equilibriacols"}>
                        <h2 id={"equilibriah2"}>Private, Secure, and Decentralized</h2>
                        <p id={"equilibriaparagraph"}>Equilibria was built on the hope to strengthen others. The design
                            of our Oracle Nodes allow us to do just that.</p>
                    </Col>
                    <Col bsPrefix={"equilibriacols2"}>
                    </Col>
                </Row>
                <Row id={"networkrow"}>
                    <Col bsPrefix={"equilibriacols3"}>
                        <NumberOfOracleNodes/>
                    </Col>
                    <Col bsPrefix={"equilibriacols3"}>
                        <Roi/>
                    </Col>
                    <Col bsPrefix={"equilibriacols3"}>
                        <StakingRequirement/>
                    </Col>
                    <OracleInfo/>
                    <Col bsPrefix={"equilibriacols3"}>
                        <h2 id={"oraclenodeheader"}>Algorithm:<br/>CN-GPU</h2>
                    </Col>
                    <Col bsPrefix={"equilibriacols3"}>
                        <HashRate/>
                    </Col>
                    <Col bsPrefix={"equilibriacols3"}>
                        <EquilibriaSupply/>
                    </Col>
                </Row>
                <Row id={"firstequilibriatextrow"}>
                    <Col bsPrefix={"equilibriacols"}>
                        <h2 id={"equilibriah2"}>Fair and Efficient Mining</h2>
                        <p id={"equilibriaparagraph"}>Equilibria's PoW algorithm is CN-GPU - an ASIC/FPGA resistant
                            mining algorithm
                            that creates an equal playing field for both Nvdia and AMD GPUS.<br/></p>
                        <div id={"oraclebtndiv"}>
                            <Button variant="outline-primary" id={"oraclebtn"} href={"#networkrow"}><strong>How to Mine
                                Equilibria</strong></Button>
                        </div>
                    </Col>
                    <Col bsPrefix={"equilibriacols2"}>
                    </Col>
                </Row>
            </div>

        )
    }
}