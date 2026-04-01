import { useReducer } from 'react';

function contadorReducer(estadoAtual, acao) {
  switch (acao.type) {
    case 'INCREMENTAR':
      return { contagem: estadoAtual.contagem + 1 };
    
    case 'DECREMENTAR':
      if (estadoAtual.contagem === 0) return estadoAtual;
      return { contagem: estadoAtual.contagem - 1 };
    
    case 'ADICIONAR_VALOR_ESPECIFICO':
      return { contagem: estadoAtual.contagem + acao.payload };
    
    case 'ZERAR':
      return { contagem: 0 };
    
    default:
      return estadoAtual;
  }
}

export default function Tela001() {
  const [estado, dispatch] = useReducer(contadorReducer, { contagem: 0 });

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Contagem: {estado.contagem}</h2>

      <div style={{ gap: '10px', display: 'flex', justifyContent: 'center' }}>
        
        <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-1</button>
        <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+1</button>
        
        <button onClick={() => dispatch({ type: 'ADICIONAR_VALOR_ESPECIFICO', payload: 5 })}>
          +5
        </button>
        
        <button onClick={() => dispatch({ type: 'ZERAR' })}>Zerar</button>
      </div>
    </div>
  );
}