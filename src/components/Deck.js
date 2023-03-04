import Flashcards from "./Flashcards.js";
import styled from "styled-components";

export default function Deck(props) {
    const { cards, cardsIniciados, iniciarCard, virarCard, cardsVirados } = props;
    return (
        <ContainerDeck>
            {cards.map((card, index) => <Flashcards key={card.question} card={card} index={index} cardsIniciados={cardsIniciados} iniciarCard={iniciarCard} virarCard={virarCard} cardsVirados={cardsVirados} />)}
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