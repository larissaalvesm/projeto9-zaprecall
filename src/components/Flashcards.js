import styled from "styled-components";
import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import icone_certo from "../assets/icone_certo.png";
import icone_erro from "../assets/icone_erro.png";
import icone_quase from "../assets/icone_quase.png";
import cards from "../mock";

export default function Flashcards(props) {
    const { card, index, cardsIniciados, iniciarCard, virarCard, cardsVirados, cardsRespondidos, cardsIncorretos, cardsParcialmenteCorretos, cardsCorretos, alterarCorreto, alterarParcialCorreto, alterarIncorreto } = props;
    console.log(cardsIniciados)
    return (
        <>
            <CardVirado data-test="flashcard" cardsIniciados={cardsIniciados} index={index} cardsRespondidos={cardsRespondidos} cardsIncorretos={cardsIncorretos} cardsParcialmenteCorretos={cardsParcialmenteCorretos} cardsCorretos={cardsCorretos}>
                <h1 data-test="flashcard-text">Pergunta {index + 1}</h1>
                <button data-test={!cardsRespondidos.includes(index) ? "play-btn" : (cardsIncorretos.includes(index) ? "no-icon" : (cardsCorretos.includes(index) ? "zap-icon" : "partial-icon"))} onClick={() => iniciarCard(index)}><img src={!cardsRespondidos.includes(index) ? seta_play : (cardsIncorretos.includes(index) ? icone_erro : (cardsCorretos.includes(index) ? icone_certo : icone_quase))} alt="status" /></button>
            </CardVirado>
            <Pergunta data-test="flashcard" cardsIniciados={cardsIniciados} index={index} cardsVirados={cardsVirados}>
                <p data-test="flashcard-text">{card.question}</p>
                <button data-test="turn-btn" onClick={() => virarCard(index)}><img src={seta_virar} /></button>
            </Pergunta>
            <Resposta data-test="flashcard" cardsVirados={cardsVirados} index={index} cardsRespondidos={cardsRespondidos}>
                <p data-test="flashcard-text">{card.answer}</p>
                <div>
                    <Vermelho data-test="no-btn" onClick={() => alterarIncorreto(index)}>Não lembrei</Vermelho>
                    <Amarelo data-test="partial-btn" onClick={() => alterarParcialCorreto(index)}>Quase não lembrei</Amarelo>
                    <Verde data-test="zap-btn" onClick={() => alterarCorreto(index)}>Zap!</Verde>
                </div>
            </Resposta>
        </>
    )
}


const CardVirado = styled.div`
    display: ${props => props.cardsIniciados.includes(props.index) && !props.cardsRespondidos.includes(props.index) ? "none" : "initial"};
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
        color:${props => !props.cardsRespondidos.includes(props.index) ? "#333333" : (props => props.cardsIncorretos.includes(props.index) ? "#FF3030" : (props => props.cardsCorretos.includes(props.index) ? "#2FBE34" : "#FF922E"))};
        text-decoration: ${props => props.cardsRespondidos.includes(props.index) ? "line-through" : "none"};
        font-family: 'Recursive', sans-serif;
        font-style: 'Sans Casual Bold';
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin-top:6px;
    }  
`

const Pergunta = styled.div`
    display: ${props => props.cardsIniciados.includes(props.index) && !props.cardsVirados.includes(props.index) ? "initial" : "none"};
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
    display: ${props => props.cardsVirados.includes(props.index) && !props.cardsRespondidos.includes(props.index) ? "initial" : "none"};
    position: relative;
    width: 299px;
    
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
        margin-top: 15px;
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
        cursor: pointer;
       
`
const Verde = styled.button`
        width: 85px;
        height: 37px;
        border-radius: 5px;
        color:#FFFFFF;
        background-color: #2FBE34;
        border:none;
        cursor: pointer;
       
`
const Amarelo = styled.button`
        width: 85px;
        height: 37px;
        border-radius: 5px;
        color:#FFFFFF;
        background-color: #FF922E;
        border:none;
        cursor: pointer;

`