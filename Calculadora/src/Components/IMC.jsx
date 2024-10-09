import { useState } from "react";
import "./IMC.css";

const IMC = () => {
  const [Altura, setAltura] = useState("");
  const [Peso, setPeso] = useState("");
  const imcCalculado = Peso / (Altura * Altura);

  const handleSubmit = (event) => {
 
    event.preventDefault();

    console.log("Dados do usuário:", { Altura, Peso });
    alert( 'seu IMC é de: ' + imcCalculado)
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
            onChange={(e) => setAltura( + e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="number"
            placeholder="Peso (kg)"
            required
            value={Peso}
            onChange={(e) => setPeso( + e.target.value)}
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default IMC;