import React, { useState } from "react";
import './Board.css';
import Cell from "./Cell";


function Board(props) {
    const { size, chanceLightStartsOn } = props;

    /** randomLight: returns random boolean */
    function randomLight(){
        return Math.random() < chanceLightStartsOn;
    }

    //create size*size matrix state, randomly setting isOn to true/false
    const lightsGrid = Array.from({ length: size }).map( 
            row => ( row = 
            Array.from({ length: size }).map(
                cell => (cell = randomLight())
            )
            )

    )

    const [ board, setBoard ] = useState({ grid: lightsGrid, hasWon: false });

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
        
        toggleLight(cellIndex);                                 //toggle clicked on cell
        toggleLight([cellRowIndex, cellColIndex + 1].join("")); //toggle right
        toggleLight([cellRowIndex, cellColIndex - 1].join("")); //toggle left
        toggleLight([cellRowIndex + 1, cellColIndex].join("")); //toggle down
        toggleLight([cellRowIndex - 1, cellColIndex].join("")); //toggle up
    
    }

    function hasWon() {
        for ( let row of board.grid) {
            for ( let col of row ) {
                if (col) { return false}
            }
        }
        return true;
    }

    function checkGameStatus(){
        if ( hasWon() ){
            setBoard(currSt => (
                {   ...currSt,
                    hasWon: true
                }
            ))
        }
    }

    function handleClick(cellIndex){
        
        toggleAllLights(cellIndex);
        checkGameStatus();
    }
       

    const gridDisplay = board.grid.map( function (row, rowIndex) {
            return (
                <div className="Board-row" key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <Cell 
                            key={[rowIndex, colIndex].join("")}
                            cellIndex={[rowIndex, colIndex].join("")} 
                            isOn={board.grid[rowIndex][colIndex]}
                            toggleLight={handleClick}
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