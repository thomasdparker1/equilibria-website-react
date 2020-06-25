import {Image} from "react-bootstrap";
import React from "react";
import './images/ililogo.png'
import './images/xeqheaderlogo.png'
import './images/Wallet.png'
import './images/DelFi.png'

export function WalletPicture(props) {
    return <Image id={"walletphoto"} src={require("./images/Wallet.png")} />

}

export function MobilePicture(props) {
    return <Image id={"rebasephoto"} src={require("./images/Rebase.png")} />

}

export function DelfiPicture(props) {
    return <Image id={"delfiphoto"} src={require("./images/DelFi.png")} />

}