import { useState, useEffect } from "react";

const Game = (props) => {
  const [valor1, setValor1] = useState(null);
  const [valor2, setValor2] = useState(null);
  const [valor3, setValor3] = useState(null);
  const [resposta, setResposta] = useState(null);

  useEffect(() => {
    let valoresArray = fazerNovaQuestao();
    setValor1(valoresArray[0]);
    setValor2(valoresArray[1]);
    setValor3(valoresArray[2]);
    setResposta(valoresArray[3]);
  }, []);

  const fazerNovaQuestao = () => {
    const valor1 = Math.floor(Math.random() * 100);
    const valor2 = Math.floor(Math.random() * 100);
    const valor3 = Math.floor(Math.random() * 100);

    const resposta = Math.floor(Math.random() * 3) + (valor1 + valor2 + valor3);

    return [valor1, valor2, valor3, resposta];
  };

  const refresh = (novosValoresArray) => {
    setValor1(novosValoresArray[0]);
    setValor1(novosValoresArray[1]);
    setValor1(novosValoresArray[2]);
    setResposta(novosValoresArray[3]);
  }

  const tratarResposta = (event) => {
    const novosValoresArray = fazerNovaQuestao();
    refresh(novosValoresArray);
    const respostaEstavaCorreta = avaliarResposta(event.target.name);
    props.tratarResposta(respostaEstavaCorreta);
  }

  const avaliarResposta = (respostaDada) => {
    const respostaCorreta = valor1 + valor2 + valor3;

    return (
      (respostaCorreta === resposta && respostaDada === "true") ||
      (respostaCorreta !== resposta && respostaDada === "false")
    );
  };

  return (
    <div>
      <div className="equacao">
        <p className="text">{`${valor1} + ${valor2} + ${valor3} = ${resposta}`}</p>
      </div>
      <button onClick={tratarResposta} name="true">
        True
      </button>
      <button name="false" onClick={tratarResposta}>
        False
      </button>
    </div>
  )
}

export default Game;