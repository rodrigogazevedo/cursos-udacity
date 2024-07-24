import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./Score";
import Game from "./Game";

const App = () => {
  const [numeroCorreto, setNumeroCorreto] = useState(0);
  const [numeroQuestoes, setNumeroQuestoes] = useState(0);

  const tratarResposta = (respostaEstavaCorreta) => {
    if (respostaEstavaCorreta) {
      setNumeroCorreto(numeroCorreto + 1);
    }
    setNumeroQuestoes(numeroQuestoes + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Game tratarResposta={tratarResposta}/>
        <Score numeroCorreto={numeroCorreto} numeroQuestoes={numeroQuestoes}/>
      </div>
    </div>
  );
};

export default App;
