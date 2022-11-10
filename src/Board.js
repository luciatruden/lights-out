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

    const gridDisplay = board.grid.map( function (row, rowIndex) {
            return (
                <div className="Board-row">
                    {row.map((col, colIndex) => (
                        <Cell cellIndex={[rowIndex, colIndex].join("")} isOn={board.grid[rowIndex][colIndex]} />
                    ))}
                </div>
            );
        });

    return(
        <div className="Board">
           { gridDisplay }
        </div>
    )
}

export default Board;