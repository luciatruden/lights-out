import React, { useState } from "react";
import './Board.css';
import Cell from "./Cell";


function Board(props) {
    const { size } = props;

    /** randomLight: returns random boolean */
    function randomLight(){
        return !!(Math.floor(Math.random()* 2 ));
    }

    //create size*size matrix state, randomly setting isOn to true/false
    const lightsGrid = Array.from({ length: size }).map( 
                 //row
                 row => ( row = 
                    Array.from({ length: size }).map(
                        cell => (cell = randomLight())
                    )
                 )

    )

    console.log(lightsGrid);

    const [ board, setBoard ] = useState({ grid: lightsGrid });

    console.log(board);

    return(
        <div className="Board">
            <Cell cellIndex="00" isOn={true}  />
            <Cell cellIndex="01" isOn={true} />
            <Cell cellIndex="02" isOn={false} />
            <Cell cellIndex="03" isOn={true} />
            <Cell cellIndex="04" isOn={true} />
            <Cell cellIndex="05" isOn={true} />
        </div>
    )
}

export default Board;