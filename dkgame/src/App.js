import {BodyContainer, Container, GameButton1, GameButton2} from './App.style'
import { Link } from "react-router-dom";
import cerveja from './assets/cerveja.png'
import fogo from './assets/fogo.png'

function App() {
  return (
    <BodyContainer>
      <Container>

        <GameButton1> 
          <img className='cerveja' src={cerveja} alt="cerveja"/>
          <Link to="/Card">Jogo da Bebida</Link>
          <img className='cerveja' src={cerveja} alt="cerveja"/>
        </GameButton1>

        <GameButton2>
          <img className='fogo' src={fogo} alt="fogo"/>
          <Link to="/Card2">Jogo eu Nunca</Link>
          <img className='fogo' src={fogo} alt="fogo"/>
        </GameButton2>

      </Container>
    </BodyContainer>
  );
}

export default App;
