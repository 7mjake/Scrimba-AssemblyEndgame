import React from "react"
import classNames from 'classnames'


export default function GuessZone(props) {

    const mysteryWord = props.mysteryWord
    
    return (
        <div className={classNames("guess-container")}>
            {mysteryWord.map(char => <div 
                className={classNames("guess-square")} 
                key={char.id}>
                    {char.revealed && char.letter}
                </div>)
            }
        </div>
    )
}