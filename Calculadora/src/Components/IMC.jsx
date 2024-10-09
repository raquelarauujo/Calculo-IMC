import { useState } from "react";
import "./IMC.css";

const IMC = () => {
  const [Altura, setAltura] = useState("");
  const [Peso, setPeso] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Converter para números
    const alturaNum = Number(Altura);
    const pesoNum = Number(Peso);

    // Calcular IMC apenas se os valores forem válidos
    if (alturaNum > 0 && pesoNum > 0) {
      const imcCalculado = pesoNum / (alturaNum * alturaNum);
      alert('Seu IMC é: ' + imcCalculado.toFixed(2));

      if (imcCalculado < 20) {
        alert('Você está abaixo do peso!');
      } else if (imcCalculado <= 25) {
        alert("Peso Ideal");
      } else if (imcCalculado <= 30) {
        alert("Sobrepeso");
      } else if (imcCalculado <= 35) {
        alert("Obesidade Moderada");
      } else if (imcCalculado <= 40) {
        alert("Obesidade Severa");
      } else if (imcCalculado <= 50) {
        alert("Obesidade Mórbida");
      } else {
        alert('Gordo');
      }
    } else {
      alert("Por favor, insira valores válidos para altura e peso.");
    }

    console.log("Dados do usuário:", { Altura, Peso });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Calcule seu IMC</h1>
        <div className="input-field">
          <input
            type="number"
            placeholder="Altura (m)"
            required
            value={Altura}
            onChange={(e) => setAltura(e.target.value)} // Manter como string
          />
        </div>
        <div className="input-field">
          <input
            type="number"
            placeholder="Peso (kg)"
            required
            value={Peso}
            onChange={(e) => setPeso(e.target.value)} // Manter como string
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default IMC;
