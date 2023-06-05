import styled from "styled-components";

export const DivBackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #808080ba;
  display: flex;
  justify-content: center;
  align-items: center;

  .divModalInfo {
    width: 80vw;
    background-color: white;
    border-radius: 8px;
    box-shadow: 1pt 1pt 5pt black;
    
    @media screen and (min-width: 500px) {
    width: 50vw;
  }
  }


  h2{
    padding: 10px;
  }
`;