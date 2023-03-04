import Flashcards from "./Flashcards.js";
import styled from "styled-components";

export default function Deck(props) {
    const { cards, cardsIniciados, setCardsIniciados, iniciarCard } = props;
    return (
        <ContainerDeck>
            {cards.map((card, index) => <Flashcards key={card.question} card={card} index={index} cardsIniciados={cardsIniciados} setCardsIniciados={setCardsIniciados} iniciarCard={iniciarCard} />)}
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