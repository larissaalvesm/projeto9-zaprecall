import styled from "styled-components";

export default function ContadorConcluidos() {
    return (
        <Footer>
            <p>0/4 CONCLUÍDOS</p>
        </Footer>
    )
}

const Footer = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    width: 375px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: #333333;
        font-family: 'Recursive', sans-serif;
        font-style: 'Sans Casual';
        font-size: 18px;
        line-height: 22px;
    }
`