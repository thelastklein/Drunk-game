import {useState} from 'react'
import { CardContainer, Container, BackCardContainer } from './card.style'
import ReactCardFlip from 'react-card-flip'


let deck = [
    '',
    'Todos Bebem',
    'Os homens bebem',
    'As mulheres bebem',
    'Beba para cada ex que voce tiver',
    'Todo mundo que estiver vestindo preto bebe',
    'Todo mundo que tiver Tatuagem Bebe',
    'Adivinhe a cor da roupa intima de alguem, se errar voce bebe, se acertar a pessoa bebe',
    'Voce bebe',
    'Escolha alguem para beber',
    'Todos que tiverem postado stories/status nas últimas 24 horas bebem',
    'Escolha um time. Torcedores bebem, incluindo você',
    'Todo mundo que estiver vestindo branco bebe',
    'Todos falam o nome de um país, até alguem travar ou não souber, essa pessoa bebe',
    'Todos falam o nome de uma bebida alcoólica, até alguem travar ou não souber, essa pessoa bebe',
    'Solteiros bebem',
    'Quem estiver em um relacionamento bebe',
    'Quem fez sexo nas ultimas 24hrs bebe',
    'A última pessoa que foi ao banheiro bebe',
    'Que dormiu sozinho nas últimas 72 horas bebe',
    'jogue uma moeda, se der cara, você bebe, se der coroa, todos os outros bebem',

]

let max = 20



export function Card() {
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



