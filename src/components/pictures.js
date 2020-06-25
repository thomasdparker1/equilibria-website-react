import {Image} from "react-bootstrap";
import React from "react";
import './images/ililogo.png'
import './images/xeqheaderlogo.png'
import './images/Wallet.png'
import './images/DelFi.png'
import './images/delfiwebsite.png'
import './images/ilitestnet.png'
import './images/discordbot.png'
import './images/delfimobile.png'

export function WalletPhoto(props) {
    return <Image id={"walletphoto"} src={require("./images/Wallet.png")}/>

}

export function MobilePhoto(props) {
    return <Image id={"rebasephoto"} src={require("./images/Rebase.png")}/>

}

export function DelfiPhoto(props) {
    return <Image id={"delfiphoto"} src={require("./images/DelFi.png")}/>

}

export function DelfiWebsitePhoto(props) {
    return <Image id={"delfiphoto"} src={require("./images/delfiwebsite.png")}/>

}

export function IliTestnetPhoto(props) {
    return <Image id={"ilitestnetphoto"} src={require("./images/ilitestnet.png")}/>

}

export function DiscordBotPhoto(props) {
    return <Image id={"discordbotphoto"} src={require("./images/discordbot.png")}/>

}

export function DelfiMobilePhoto(props) {
    return <Image id={"delfimobilephoto"} src={require("./images/delfimobile.png")}/>

}