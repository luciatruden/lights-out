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
            row => ( row = 
            Array.from({ length: size }).map(
                cell => (cell = randomLight())
            )
            )

    )

    const [ board, setBoard ] = useState({ grid: lightsGrid });

    /** toggleLight: toggles a single light on/off in the state */
    const toggleLight = function(cellIndex){
        let [ cellRowIndex, cellColIndex ] = cellIndex.split("");
        cellRowIndex = parseInt(cellRowIndex);
        cellColIndex = parseInt(cellColIndex);

        setBoard(currSt => (
            {   ...currSt,
                grid: currSt.grid.map(
                    (row, rowIndex) => ( rowIndex === cellRowIndex
                            ? row.map( (col, colIndex) => colIndex === cellColIndex ? !col : col)
                            : row
                    ))
            }
        ))
    }

    function toggleAllLights(cellIndex){
        let [ cellRowIndex, cellColIndex ] = cellIndex.split("");
        cellRowIndex = parseInt(cellRowIndex);
        cellColIndex = parseInt(cellColIndex);
        
        toggleLight(cellIndex);
        toggleLight([cellRowIndex, cellColIndex + 1].join(""));
        toggleLight([cellRowIndex, cellColIndex - 1].join(""));
        toggleLight([cellRowIndex + 1, cellColIndex].join(""));
        toggleLight([cellRowIndex - 1, cellColIndex].join(""));
    
    }
       

    const gridDisplay = board.grid.map( function (row, rowIndex) {
            return (
                <div className="Board-row" key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <Cell 
                            key={[rowIndex, colIndex].join("")}
                            cellIndex={[rowIndex, colIndex].join("")} 
                            isOn={board.grid[rowIndex][colIndex]}
                            toggleLight={toggleAllLights}
                         />
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