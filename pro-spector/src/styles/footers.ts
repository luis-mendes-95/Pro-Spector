import styled from "styled-components";

export const FooterHome = styled.footer`
    background-image: linear-gradient(#ffffff, #52dbff);
    display: flex;
    justify-content: center;
    
    span{
        color: white;
        text-shadow: 1px 1px 1px black;
        text-align: center;
        font-size: 10pt;
        padding: 10px 0;
        cursor: pointer;
        transition: 0.3s;
    }
    span:hover{
        transition: 0.3s;
        color: black;
    }
  @media screen and (min-width: 500px) {
  }
`;
