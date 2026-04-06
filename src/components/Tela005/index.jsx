import { useMemo, useState } from "react";

const LISTA_FILMES = [
  "The Office",
  "War Machine",
  "The Devil's Advocate",
  "Dracula",
  "Pearl",
  "Constantine",
];

export default function Tela005() {
  const [busca, setBusca] = useState("");
  const [temaEscuro, setTemaEscuro] = useState(false);

  const filtrarFilmes = useMemo(() => {
    console.log("Calculando lista...");
    return LISTA_FILMES.filter((filme) =>
      filme.toLowerCase().includes(busca.toLowerCase()),
    );
  }, [busca]);

  return (
    <div
      style={{
        background: temaEscuro ? "#333" : "#fff",
        color: temaEscuro ? "#fff" : "#000",
      }}
    >
      <button onClick={() => setTemaEscuro(!temaEscuro)}>Mudar Tema</button>

      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar filme..."
      />

      <ul>
        {filtrarFilmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>
    </div>
  );
}
