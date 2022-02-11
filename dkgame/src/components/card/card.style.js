import styled from "styled-components"

 export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #00b4d8;
    height: 100vh;

    button {
            margin-top: 20px;
            color: beige;
            background-color: #0077b6;
            width: 250px;
            height: 60px;
            border-radius: 10px;
            border: solid white;
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
    margin-top: 60px;
    padding: 10px;
    border: solid white;
    border-radius: 10px;
    
    
    h1 {
    text-align: center;
    color: beige;
    margin-top: 50px;
    font-family: Sofia, sans-serif;
    
}
       


`

