import Popup from "reactjs-popup";
import {Button} from "react-bootstrap";
import React from "react";

export function ModalPopup(props) {
    let name = props.name
    let content = "null"

    if (name === "ili") {
        content = 'ili'
        name = "ili"
    } else if (name === "equilibria") {
        content = 'Equilibria'
        name = "Equilibria"
    } else if (name === "delfi") {
        content = 'delfi'
        name = "DelFi"
    }

    function blurBackground() {
        document.getElementById("mainBody").style.filter = "blur(1px)";
    }

    function focusBackground() {
        document.getElementById("mainBody").style.filter = "blur(0px)";
    }

    return (
        <Popup
            trigger={<Button variant="outline-primary" id={"threecolsbtn"}>Learn about {name}</Button>}
            modal
            closeOnDocumentClick
            onOpen={blurBackground}
            onClose={focusBackground}
        >
            <span> {name} </span>
        </Popup>
    );
}