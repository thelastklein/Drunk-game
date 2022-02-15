import {BodyContainer, Container, GameButton1, GameButton2} from './App.style'
import { Link } from "react-router-dom";

function App() {
  return (
    <BodyContainer>
      <Container>
        <GameButton1><Link to="/Card">Drunk Game</Link></GameButton1>
        <GameButton2><Link to="/Card2">Eu Nunca</Link></GameButton2>
      </Container>
    </BodyContainer>
  );
}

export default App;
