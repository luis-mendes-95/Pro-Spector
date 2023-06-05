import { MainHome } from "../../styles/main";

const Main = () => {

  const repositoryUrl = "https://github.com/luis-mendes-95/Pro-Spector#readme";

  return (
    <MainHome>
      <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
        <button>About Pro-Spector</button>
      </a>
      <img src="/cliente.gif" alt="gif-main"/>
      <h2>With Pro-Spector</h2>
      <h2>you make it happen!</h2>
      <p>Prospectation never been SO EASY!</p>
    </MainHome>
  );
};

export default Main;
