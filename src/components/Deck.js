import Flashcards from "./Flashcards.js";
import styled from "styled-components";

export default function Deck() {
    return (
        <ContainerDeck>
            <Flashcards />
            <Flashcards />
            <Flashcards />
            <Flashcards />
            <Flashcards />
            <Flashcards />
            <Flashcards />
            <Flashcards />
        </ContainerDeck>

    )
}

const ContainerDeck = styled.div`
    position:fixed;
    top:120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 70vh;
    overflow-y: hidden;
    overflow-y: scroll;
`