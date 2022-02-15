import styled from "styled-components"

 export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #ff5252;
    height: 100vh;

    button {
            margin-top: 50px;
            color: beige;
            background-color: #a70000;
            width: 250px;
            height: 60px;
            border-radius: 10px;
            border: solid white 5px;
            font-family: 'Merienda', 'cursive';
            font-size: 20px;

            &:hover {
              filter: brightness(0.8);  
            }
        }  


`

export const CardContainer = styled.div`
    background-color: #a70000;
    height: 400px;
    width: 250px;
    padding: 10px;
    border: solid white 8px;
    border-radius: 10px;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    
    
    h1 {
    text-align: center;
    color: beige;
    margin-top: 50px;
    font-family: 'Merienda', 'cursive';
    font-size: 40px;
    
} 

`
export const BackCardContainer = styled.div`
    background-color: #a70000;
    height: 400px;
    width: 250px;
    padding: 10px;
    border: solid white 8px;
    border-radius: 10px;
    backface-visibility: hidden;
    transform-style: preserve-3d;

      h1 {
        text-align: center;
        color: beige;
        margin-top: 50px;
        font-family: 'Merienda', 'cursive';
        font-size: 40px;
      }

`