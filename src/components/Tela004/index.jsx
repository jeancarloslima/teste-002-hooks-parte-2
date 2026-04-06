import { useReducer } from "react";

function flashcardsReducer(estadoAtual, acao) {
    switch (acao.type) {
        case "ACERTEI":
            return { ...estadoAtual, acertos: estadoAtual.acertos + 1, total: estadoAtual.total + 1 };
        case "ERREI":
            return { ...estadoAtual, erros: estadoAtual.erros + 1, total: estadoAtual.total + 1 };
        case "ZERAR":
            return { acertos: 0, erros: 0, total: 0 };
        default:
            return estadoAtual;
    }
}

export default function Tela004() {
    const [estado, dispatch] = useReducer(flashcardsReducer, { acertos: 0, erros: 0, total: 0 });

    return (
        <div>
            <h2>Acertos: {estado.acertos}</h2>
            <h2>Erros: {estado.erros}</h2>
            <h2>Total: {estado.total}</h2>
            <button onClick={() => dispatch({ type: "ACERTEI" })}>ACERTEI</button>
            <button onClick={() => dispatch({ type: "ERREI" })}>ERREI</button>
            <button onClick={() => dispatch({ type: "ZERAR" })}>ZERAR</button>
        </div>
    )
}