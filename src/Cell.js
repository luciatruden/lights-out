import React from "react";
import './Cell.css';

function Cell(props){
    const { cellIndex, isOn } = props;

    console.log(!isOn);

    return (
        <button className="Cell" disabled={!isOn}></button>
    );
}

export default Cell;