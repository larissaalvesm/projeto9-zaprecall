import styled from "styled-components";
import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import icone_certo from "../assets/icone_certo.png";
import icone_erro from "../assets/icone_erro.png";
import icone_quase from "../assets/icone_quase.png";
import cards from "../mock";

export default function Flashcards(props) {
    const { card, index, cardsIniciados, setCardsIniciados, iniciarCard } = props;
    console.log(cardsIniciados)
    return (
        <>
            <CardVirado cardsIniciados={cardsIniciados} index={index}>
                <h1>Pergunta {index + 1}</h1>
                <button onClick={() => iniciarCard(index)}><img src={seta_play} alt="seta-play" /></button>
            </CardVirado>
            <Pergunta cardsIniciados={cardsIniciados} index={index}>
                <p>{card.question}</p>
                <button><img src={seta_virar} /></button>
            </Pergunta>
            <Resposta>
                <p>{card.answer}</p>
                <div>
                    <Vermelho>Não lembrei</Vermelho>
                    <Amarelo>Quase não lembrei</Amarelo>
                    <Verde>Zap!</Verde>
                </div>
            </Resposta>
        </>
    )
}

const CardVirado = styled.div`
    display: ${props => props.cardsIniciados.includes(props.index) ? "none" : "initial"};
    width: 305px;
    min-height: 65px;
    background-color: #FFFFFF;
    padding: 18px;
    margin-bottom: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    position:relative;

    button{
        border: none;
        cursor: pointer;
    }

    img{
        width: 23px;
        height: 23px;
        position:absolute;
        bottom: 21px;
        right: 20px;
    }

    h1{
        color:#333333;
        //color: #FF3030;
        //color: #2FBE34;
        //color: #FF922E;
        //text-decoration: line-through;
        font-family: 'Recursive', sans-serif;
        font-style: 'Sans Casual Bold';
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin-top:6px;
    }  
`

const Pergunta = styled.div`
    display: ${props => props.cardsIniciados.includes(props.index) ? "initial" : "none"};
    position: relative;
    width: 299px;
    min-height: 131px;
    background-color: #FFFFD4;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

    img{
        width:30px;
        height: 20px;
        position:absolute;
        bottom: 10px;
        right: 10px;
    }

    p{
        color:#333333;
        font-family: 'Recursive', sans-serif;
        font-style: 'Sans Casual';
        font-size: 18px;
        line-height: 22px;
    }

    button{
        border: none;
        cursor: pointer;
    }
`

const Resposta = styled.div`
    display: none;
    position: relative;
    width: 299px;
    min-height: 131px;
    background-color: #FFFFD4;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

    p{
        color:#333333;
        font-family: 'Recursive', sans-serif;
        font-style: 'Sans Casual';
        font-size: 18px;
        line-height: 22px;
    }

    div {
        margin-top: 22px;
        display: flex;
        justify-content: space-between;
    }


`

const Vermelho = styled.button`
        width: 85px;
        height: 37px;
        border-radius: 5px;
        color:#FFFFFF;
        background-color: #FF3030;
        border:none;
`
const Verde = styled.button`
        width: 85px;
        height: 37px;
        border-radius: 5px;
        color:#FFFFFF;
        background-color: #2FBE34;
        border:none;
`
const Amarelo = styled.button`
        width: 85px;
        height: 37px;
        border-radius: 5px;
        color:#FFFFFF;
        background-color: #FF922E;
        border:none;
`