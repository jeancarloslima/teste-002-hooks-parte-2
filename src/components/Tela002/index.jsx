import { useState, useMemo } from 'react';

export default function Tela002() {
  const [busca, setBusca] = useState('');
  const [temaEscuro, setTemaEscuro] = useState(false);

  const produtos = Array.from({ length: 5000 }, (_, i) => `Produto ${i + 1}`);

  const produtosFiltrados = useMemo(() => {
    console.log("Calculando lista (isso demora)...");
    return produtos.filter(produto => produto.toLowerCase().includes(busca.toLowerCase()));
  }, [busca, produtos]);

  return (
    <div style={{ background: temaEscuro ? '#333' : '#fff', color: temaEscuro ? '#fff' : '#000' }}>
      
      <button onClick={() => setTemaEscuro(!temaEscuro)}>
        Mudar Tema
      </button>

      <br /><br />

      <input 
        type="text" 
        value={busca} 
        onChange={(e) => setBusca(e.target.value)} 
        placeholder="Buscar produto..."
      />

      <ul>
        {produtosFiltrados.slice(0, 10).map(prod => (
          <li key={prod}>{prod}</li>
        ))}
      </ul>
    </div>
  );
}