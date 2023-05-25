import styled from "styled-components";

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    padding: 15px 0;
    color: black;
    text-shadow: 1px 1px 1px #52dbff;
  }
  p {
    text-align: center;
    padding: 15px 0;
    color: black;
    font-weight: bold;
    text-shadow: 1px 1px 1px #52dbff;
  }
  img {
    width: 150px;
  }
  button {
    background-color: #52dbff;
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
  }
`;

export const DashboardBackground = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  table {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
  }

  thead {
    font-size: 15pt;
    margin: 0 0 20px 0;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0;
  }

  button {
    background-color: #52dbff;
    color: black;
    border-radius: 8px;
    padding: 5px;
    border: none;
    font-size: 10pt;
    font-weight: bold;
    text-shadow: 0, 5px 0, 5px 0, 5px black;
    transition: 0.3s;
    cursor: pointer;
  }
  button:hover {
    transition: 0.3s;
    scale: 1.2;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  overflow-y: scroll;
  max-height: 90vh;

  textarea{
    padding: 5px;
    border: none;
    background-color: lightblue;
    border-radius: 8px;
    font-weight: bold;
  }
  textarea:focus{
    outline: 1pt solid black;
  }

  .divLabelAndInput {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    width: 100%;

    label {
      width: 50%;
      text-align: center;
    }
  }

  input,
  select,
  textarea {
    width: 80%;
  }

  @media screen and (min-width: 500px) {
    input,
    select,
    textarea {
      width: 50%;
    }
  }

  input,
  select {
    height: 25px;
    border-radius: 8px;
    outline: none;
    border: none;
    box-shadow: 0 0 4px 2px rgba(0, 90, 255, 0.4);
    padding: 5px;
  }

  select {
    transition: 0.3s;
    :hover {
      cursor: pointer;
      background-color: rgba(0, 90, 255, 0.4);
      transition: 0.3s;
    }
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 4px 2px black;
  }

  textarea {
    height: 200px;
  }

  .divFormFields {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1pt solid black;
    border-radius: 8px;
    padding: 8px;
    background-color: #8080802b;
    overflow-y: scroll;
    max-height: 40vh;
  }

  .divIndividualItemSale {
    border: 1pt solid black;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .divButtonsControlForms {
    width: 100px;
    display: flex;
    gap: 5px;
    position: sticky;
    top: 10px;

    button {
      border: none;
      padding: 5px;
    }

    .buttonRed {
      width: 100%;
      background-color: red;
      color: white;
    }

    .buttonGreen {
      width: 100%;
      background-color: green;
      color: white;
    }
  }

  .divCloseButton {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 5px 10px 0px 0px;

    button {
      background-color: red;
      color: white;
      font-weight: bold;
      padding: 5px 15px;
      border: none;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
    }
  }

  .pError {
    color: red;
    font-size: 10pt;
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


  .DivButtonsReg {
    button {
      margin: 5px 10px 5px 10px;
    }

    .buttonSaveReg {
      background-color: #52dbff;
      color: black;
      font-weight: bold;
      border: none;
      padding: 5px;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
    }

    .buttonCancelReg {
      background-color: red;
      color: white;
      border: none;
      padding: 5px;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
    }
  }

  ul{
    width: 90%;
    text-align: center;
    margin: 20px 0 0 0;
  }

  li{
    background: linear-gradient(205deg, lightblue, #52dbff);
    border: 5pt solid #52dbff;
    color: white;
    border-radius: 8px;
    text-shadow: 1px 1px 1px black;
    max-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;

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

  }

  p{
    color: white;
  }

`;
