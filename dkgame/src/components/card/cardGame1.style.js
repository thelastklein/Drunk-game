import styled from "styled-components"

 export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #00b4d8;
    height: 100vh;

    button {
            margin-top: 50px;
            color: beige;
            background-color: #0077b6;
            width: 250px;
            height: 60px;
            border-radius: 10px;
            border: solid white 5px;
            font-family: Sofia, sans-serif;
            font-size: 20px;

            &:hover {
              filter: brightness(0.8);  
            }
        }  


`

export const CardContainer = styled.div`
    background-color: #0077b6;
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
    font-family: Sofia, sans-serif;
    
} 

`
export const BackCardContainer = styled.div`
    background-color: #0077b6;
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
        font-family: Sofia, sans-serif;
      }

`
