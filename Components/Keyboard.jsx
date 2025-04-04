import React from "react"
import { v4 as uuid } from 'uuid'
import classNames from 'classnames'

export default function Keyboard(props) {
    
    const keys = props.keys
    const buttonHandler = props.guessLetter

    return (
        <div className={classNames("keyboard-container")}>
                {keys.map(key => <button 
                    className={classNames("key", {
                        "key-guessed-wrong" : key.guessed === "wrong",
                        "key-guessed-right" : key.guessed === "right"
                    })} 
                    key={key.id}
                    onClick={() =>buttonHandler(key.letter)}
                    disabled={(key.guessed != "no") || (props.gameOver)}>
                        {key.letter}
                    </button>)
                }
        </div>
    )
}