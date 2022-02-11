import {useState} from 'react'
import { CardContainer, Container } from './card.style'


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
    'Quem fez sexo nas ultimas 24hrs bebe'

]

let max = 17



export function Card() {
    let [card, setCard] = useState(0)

    return (
        <Container>
            <CardContainer>
                <h1>{deck[card]}</h1>
            </CardContainer>

            <button type="button" onClick={generateRandomCard}>Pegar outra carta</button>
        </Container>
    )

    /*function removeCard(){
        let removed = deck.splice(card, 1);
        max = deck.length

        console.log(max,removed, deck[card])
    }*/

    function generateRandomCard(){
        setCard(card = Math.floor(Math.random() * (max - 1 + 1) + 1 ))

        //setTimeout( function() { removeCard(); }, 1000);

    }
}



