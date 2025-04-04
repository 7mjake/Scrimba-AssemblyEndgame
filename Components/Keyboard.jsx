import React from "react"
import { v4 as uuid } from 'uuid'
import classNames from 'classnames'

export default function Keyboard() {
    
    const [keys, setKeys] = React.useState([
        { letter: "A", guessed: "no", id: uuid()},
        { letter: "B", guessed: "no", id: uuid()},
        { letter: "C", guessed: "no", id: uuid()},
        { letter: "D", guessed: "no", id: uuid()},
        { letter: "E", guessed: "no", id: uuid()},
        { letter: "F", guessed: "no", id: uuid()},
        { letter: "G", guessed: "no", id: uuid()},
        { letter: "H", guessed: "no", id: uuid()},
        { letter: "I", guessed: "no", id: uuid()},
        { letter: "J", guessed: "no", id: uuid()},
        { letter: "K", guessed: "no", id: uuid()},
        { letter: "L", guessed: "no", id: uuid()},
        { letter: "M", guessed: "no", id: uuid()},
        { letter: "N", guessed: "no", id: uuid()},
        { letter: "O", guessed: "no", id: uuid()},
        { letter: "P", guessed: "no", id: uuid()},
        { letter: "Q", guessed: "no", id: uuid()},
        { letter: "R", guessed: "no", id: uuid()},
        { letter: "S", guessed: "no", id: uuid()},
        { letter: "T", guessed: "no", id: uuid()},
        { letter: "U", guessed: "no", id: uuid()},
        { letter: "V", guessed: "no", id: uuid()},
        { letter: "W", guessed: "no", id: uuid()},
        { letter: "X", guessed: "no", id: uuid()},
        { letter: "Y", guessed: "no", id: uuid()},
        { letter: "Z", guessed: "no", id: uuid()}
    ])

    
    return (
        <div className={classNames("keyboard-container")}>
                {keys.map(key => <button 
                    className={classNames("key", {
                        "key-guessed-wrong" : key.guessed === "wrong",
                        "key-guessed-right" : key.guessed === "right"
                    })} 
                    key={key.id}>
                        {key.letter}
                    </button>)
                }
        </div>
    )
}