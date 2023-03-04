import ContadorConcluidos from "./ContadorConcluidos.js";
import Deck from "./Deck";
import styled from "styled-components";
import logo from "../assets/logo.png";
import cards from "../mock";
import { useState } from "react";


export default function ZapRecall() {

    const [cardsIniciados, setCardsIniciados] = useState([]);
    const [cardIniciado, setCardIniciado] = useState(false);

    function iniciarCard(index) {

        if (!cardsIniciados.includes(index)) {
            const novosCardsIniciados = [...cardsIniciados, index];
            setCardsIniciados(novosCardsIniciados);

        }

    }
    return (
        <Container>
            <Topo>
                <img src={logo} alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </Topo>
            <Deck cards={cards} cardsIniciados={cardsIniciados} setCardsIniciados={setCardsIniciados} iniciarCard={iniciarCard} />
            <ContadorConcluidos cards={cards} />
        </Container>
    )
}

const Topo = styled.div`
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 30px;

    img{
        width: 52px;
        height: 60px;
        margin-right: 15px;
    }

    h1{
        font-family: 'Rightenous';
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -1.2%;
        color: #FFFFFF;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FB6B6B;
    width: 375px;
    height: 100vh;
    margin-right: auto;
    margin-left: auto;
`