import {useState} from 'react'
import { CardContainer, Container, BackCardContainer } from './cardGame2.style'
import ReactCardFlip from 'react-card-flip'


let deck = [
    '',
    'Eu nunca: fiz sexo a tres',
    'Eu nunca: beijei alguem do mesmo sexo',
    'Eu nunca: fiquei com um amigo',
    'Eu nunca: fiz sexo em um lugar público',
    'Eu nunca: paguei para ter sexo',
    'Eu nunca: inventei dor de cabeça na hora H',
    'Eu nunca: levei chifre',
    'Eu nunca: mandei nudes',
    'Eu nunca: fumei maconha',
    'Eu nunca: fui para o trabalho de ressaca',
    'Eu nunca: fingi orgasmo',
    'Eu nunca: broxei'


]

let max = 12



export function CardGame2() {
    let [card, setCard] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)


    return (
        <Container>
            
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="1.5" flipSpeedBackToFront="1.5">
                <CardContainer>
                    <h1>{deck[card]}</h1>
                    
                </CardContainer>

                <BackCardContainer>
                    <h1>{deck[card]}</h1>
                </BackCardContainer>

            </ReactCardFlip> 
            <button type="button" onClick={handleClick}>Pegar outra carta</button>           
        </Container>
    )

    function handleClick() {
        setIsFlipped(!isFlipped)
        setTimeout(function() {generateRandomCard();},500)

        console.log(card)
        
    }

    function generateRandomCard(){
        setCard(card = Math.floor(Math.random() * (max - 1 + 1) + 1 ))
        
    }
}
