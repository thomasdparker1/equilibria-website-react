import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

export class MainNav extends React.Component {
    render() {
        return (
            <Navbar variant="myNav" expand="lg" fixed="top">
                <Navbar.Brand href="#home">Equilibria Network</Navbar.Brand>
                <Nav>
                    <Nav.Link variant="navLink" href="https://explorer.equilibria.network/">Explorer</Nav.Link>
                    <Nav.Link variant="navLink"
                              href="https://github.com/EquilibriaCC/Equilibria/releases">Wallet</Nav.Link>
                    <Nav.Link variant="navLink" href="https://github.com/EquilibriaCC/Equilibria/">Github</Nav.Link>
                    <Nav.Link variant="navLink" href="https://github.com/EquilibriaCC/Equilibria/wiki">Wiki</Nav.Link>
                    <NavDropdown title="Exchanges" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://tradeogre.com/exchange/BTC-XEQ">TradeOgre</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Social" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://twitter.com/EquilibriaCC">Twitter</NavDropdown.Item>
                        <NavDropdown.Item href="https://discord.gg/pDyfUTs">Discord</NavDropdown.Item>
                        <NavDropdown.Item href="https://t.me/EquilibriaNetwork">Telegram</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}