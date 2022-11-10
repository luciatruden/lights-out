import React, { useState } from "react";
import './Board.css';
import Cell from "./Cell";


function Board(props) {
    const { size } = props;

    return(
        <div className="Board">
            <Cell cellIndex="00" isOn={true} />
            <Cell cellIndex="01" isOn={true} />
            <Cell cellIndex="02" isOn={false} />
            <Cell cellIndex="03" isOn={true} />
            <Cell cellIndex="04" isOn={true} />
            <Cell cellIndex="05" isOn={true} />
        </div>
    )
}

export default Board;