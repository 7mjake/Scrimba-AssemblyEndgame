import { v4 as uuid } from 'uuid'
import React from "react"
import classNames from 'classnames'


export default function GuessZone() {
    
    const mysteryWordBase = "Testing"
    
    const [mysteryWord, setMysteryWord] = React.useState(mysteryWordBase.toUpperCase().split('').map(char => ({letter: char, revealed: true, id: uuid()})))
    
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