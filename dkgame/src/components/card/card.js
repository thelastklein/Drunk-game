import {useState} from 'react'


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

]

let max = 9



export function Card() {
    let [card, setCard] = useState(0)

    return (
        <div>
            <div><h1>{deck[card]}</h1></div>

            <button type="button" onClick={generateRandomCard}>Pegar outra carta</button>
        </div>
    )

    function removeCard(){
        let removed = deck.splice(card, 1);
        max = deck.length

        console.log(max,removed, deck[card])
    }

    function generateRandomCard(){
        setCard(card = Math.floor(Math.random() * (max - 1 + 1) + 1 ))

        setTimeout( function() { removeCard(); }, 1000);

    }
}



