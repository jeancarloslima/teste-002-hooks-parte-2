import { useState, useCallback, memo } from 'react';

const BotaoPesado = memo(({ onClick, texto }) => {
  console.log(`[RENDERIZOU] O botão "${texto}" foi desenhado na tela.`);

  return (
    <button 
      onClick={onClick} 
      style={{ padding: '10px 20px', margin: '5px', cursor: 'pointer' }}
    >
      {texto}
    </button>
  );
})

export default function Tela003() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [contador, setContador] = useState(0);

  const incrementarSemCallback = () => {
    setContador((c) => c + 1);
  };

  const incrementarComCallback = useCallback(() => {
    setContador((c) => c + 1);
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      minHeight: '100vh', 
      background: temaEscuro ? '#333' : '#f4f4f4', 
      color: temaEscuro ? '#fff' : '#000' 
    }}>
      <button 
        onClick={() => setTemaEscuro(!temaEscuro)}
        style={{ marginBottom: '30px', padding: '10px', background: '#007bff', color: 'white' }}
      >
        Mudar Tema (Re-renderiza o Pai)
      </button>

      <h3>Contador: {contador}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        
        <BotaoPesado 
          texto="Botão Sem Callback" 
          onClick={incrementarSemCallback} 
        />

        <BotaoPesado 
          texto="Botão Com Callback" 
          onClick={incrementarComCallback} 
        />

      </div>
    </div>
  );
}