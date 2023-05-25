import styled from "styled-components";

export const HeaderHome = styled.header`
  background-image: linear-gradient(#52dbff, #ffffff);
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: white;
    font-size: 15pt;
    text-shadow: 1px 1px 1px black;
  }

  button {
    background-color: white;
    color: black;
    border-radius: 8px;
    padding: 5px;
    border: none;
    font-size: 10pt;
    font-weight: bold;
    text-shadow: 0, 5px 0, 5px 0, 5px #52dbff;
    transition: 0.3s;
    cursor: pointer;
  }
  button:hover {
    transition: 0.3s;
    scale: 1.2;
  }

  @media screen and (min-width: 500px) {
    justify-content: left;
    gap: 25px;

    h1 {
      padding: 0 0 0 25px;
    }
  }
`;
