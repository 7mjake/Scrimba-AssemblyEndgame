import React from "react"
import { v4 as uuid } from 'uuid'
import { generate, count } from "random-words";

import Header from "./Components/Header"
import MessageBanner from "./Components/MessageBanner"
import LanguageList from "./Components/LanguageList"
import GuessZone from "./Components/GuessZone"
import Keyboard from "./Components/Keyboard"

export default function Hangman() {

    const [message, setMessage] = React.useState("")
    const [messageType, setMessageType] = React.useState("")

    const [languages, setLanguages] = React.useState([
        { title: "HTML", isDead: false, id: 0},
        { title: "CSS", isDead: false, id: 1},
        { title: "JavaScript", isDead: false, id: 2},
        { title: "React", isDead: false, id: 3},
        { title: "TypeScript", isDead: false, id: 4},
        { title: "Node.js", isDead: false, id: 5},
        { title: "Python", isDead: false, id: 6},
        { title: "Ruby", isDead: false, id: 7},
        { title: "Assembly", isDead: false, id: 8}
    ]);

    const [wrongGuesses, setWrongGuesses] = React.useState(0)
    const [gameOver, setGameOver] = React.useState(false)


    const [mysteryWord, setMysteryWord] = React.useState(generate().toUpperCase().split('').map(char => ({letter: char, revealed: false, id: uuid()})))
    const mysteryWordBase = mysteryWord.map(char => char.letter).join("")

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

    function guessLetter(letterGuess) {
        if (mysteryWord.map(char => char.letter).includes(letterGuess)) {
                setKeys(prevKeys => {
                    return prevKeys.map(prevKey => {
                        if (prevKey.letter === letterGuess) {
                            return { ...prevKey, guessed: "right"}
                        } else {
                            return prevKey
                        }
                    })
                })
                setMysteryWord(prevWord => prevWord.map(prevChar => prevChar.letter === letterGuess ? {...prevChar, revealed: true} : prevChar))
 
   
            } else {
                setKeys(prevKeys => {
                    return prevKeys.map(prevKey => {
                        if (prevKey.letter === letterGuess) {
                            return { ...prevKey, guessed: "wrong"}
                        } else {
                            return prevKey
                        }
                    })
                })
                setLanguages(prevLanguages => 
                    prevLanguages.map(prevLang => prevLang.id === wrongGuesses ? {...prevLang, isDead: true} : prevLang)
                )
                setWrongGuesses(prev => prev + 1)
                setMessage("Nope!")
                setMessageType("wrong")
            }
    }

    React.useEffect(() => {
        if (mysteryWord.every(char => char.revealed)) {
            setMessage("You win!");
            setMessageType("win");
            setGameOver(true)
          } else if (languages.every(lang => lang.isDead)) {
            setMessage("You lose!")
            setMessageType("lose")
            setGameOver(true)
            alert("Bummer! The word was: " + mysteryWordBase)
          }
    }, [mysteryWord, languages])



    return (
        <main>
            <Header />
            <MessageBanner message={message} messageType={messageType}/>
            <LanguageList languages={languages}/>
            <GuessZone mysteryWord={mysteryWord}/>
            <Keyboard keys={keys} guessLetter={guessLetter} gameOver={gameOver}/>
        </main>
    )
}
