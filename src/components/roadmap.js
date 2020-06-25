import React from "react";
import {Col} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {
    DelfiPhoto,
    MobilePhoto,
    WalletPhoto,
    DelfiWebsitePhoto,
    IliTestnetPhoto,
    DiscordBotPhoto,
    DelfiMobilePhoto
} from "./pictures";
import {Spacer} from "./spacer";

export class Roadmap extends React.Component {


    render() {
        return (
            <div>
                <Col bsPrefix={"roadmapcol"}>
                    <h2 id={"networkinfoheader"}>Roadmap</h2>
                </Col>
                <Spacer/>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#000000', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #000000'}}
                        date="2020"
                        iconStyle={{background: '#000000', color: '#fff'}}
                        icon={<MobilePhoto/>}
                    >
                        <h3 className="vertical-timeline-element-title">Rebase</h3>
                        <p>
                            Massive update to Monero v16.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#000000', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #000000'}}
                        date="2020"
                        iconStyle={{background: '#000000', color: '#fff'}}
                        icon={<WalletPhoto/>}
                    >
                        <h3 className="vertical-timeline-element-title">Mobile Wallets</h3>
                        <p>
                            Equilibria mobile wallets for both Android and iOS.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#14afde', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #14afde'}}
                        date="2020"
                        iconStyle={{background: '#14afde', color: '#fff'}}
                        icon={<DelfiPhoto/>}
                    >
                        <h3 className="vertical-timeline-element-title">DELFI v1</h3>
                        <p>
                            Price tracking for 1900 cryptos, 6 metals, and 170 fiat currencies.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#14afde', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #14afde'}}
                        date="2020"
                        iconStyle={{background: '#14afde', color: '#fff'}}
                        icon={<DelfiWebsitePhoto/>}
                    >
                        <h3 className="vertical-timeline-element-title">DELFI Website</h3>
                        <p>
                            Live data and information for DELFI.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#14afde', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #14afde'}}
                        date="2020"
                        iconStyle={{background: '#14afde', color: '#fff'}}
                        icon={<IliTestnetPhoto/>}
                    >
                        <h3 className="vertical-timeline-element-title">ili Bet Testnet</h3>
                        <h4 className="vertical-timeline-element-subtitle">CLI functionality for testing</h4>
                        <p>
                            ili Bet is a decentralized eSports betting platform built on the Equilibria blockchain.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#14afde', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #14afde'}}
                        date="2020"
                        iconStyle={{background: '#14afde', color: '#fff'}}
                        icon={<DiscordBotPhoto/>}
                    >
                        <h3 className="vertical-timeline-element-title">ili Bet Discord Bot</h3>
                        <h4 className="vertical-timeline-element-subtitle">eSports betting on discord</h4>
                        <p>
                            ili Bet will have a discord bot that can be used to make bets through Discord - the gamers
                            hub.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#14afde', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #14afde'}}
                        date="2020"
                        iconStyle={{background: '#14afde', color: '#fff'}}
                        icon={<DelfiWebsitePhoto/>}
                    >
                        <h3 className="vertical-timeline-element-title">ili Bet GUI Platform & Website</h3>
                        <p>
                            ili Bet will have a seperate GUI platform and website for ease of access.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#14afde', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #14afde'}}
                        date="2020"
                        iconStyle={{background: '#14afde', color: '#fff'}}
                        icon={<DelfiMobilePhoto/>}
                    >
                        <h3 className="vertical-timeline-element-title">ili Bet Mobile App</h3>
                        <p>
                            A mobile app for ili Bet to further increase accessibility.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}