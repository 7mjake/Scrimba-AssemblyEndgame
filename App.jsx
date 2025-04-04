import React from "react"

import Header from "./Components/Header"
import MessageBanner from "./Components/MessageBanner"
import LanguageList from "./Components/LanguageList"
import GuessZone from "./Components/GuessZone"
import Keyboard from "./Components/Keyboard"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function Hangman() {
    return (
        <main>
            <Header />
            <MessageBanner />
            <LanguageList />
            <GuessZone />
            <Keyboard />
        </main>
    )
}
