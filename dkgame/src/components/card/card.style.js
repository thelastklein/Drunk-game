import styled from "styled-components"

 export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: navy;
    height: 100vh;

    button {
            margin-top: 20px;
            color: beige;
            background-color: teal;
            width: 150px;
            height: 50px;
            border-radius: 10px;
            border: none;
            font-family: arial;
            font-size: 15px;

            &:hover {
              filter: brightness(0.8);  
            }
        }  


`

export const CardContainer = styled.div`
    background-color: teal;
    height: 300px;
    width: 250px;
    margin-top: 100px;
    padding: 10px;
    border-radius: 10px;
    
    
    h1 {
    text-align: center;
    color: beige;
    margin-top: 30px;
    
}
       


`

