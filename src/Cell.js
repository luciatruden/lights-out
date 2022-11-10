import React from "react";
import './Cell.css';

function Cell(props){
    const { cellIndex, isOn } = props;

    return (
        <div className="Cell" disabled={!isOn}></div>
    );
}

export default Cell;