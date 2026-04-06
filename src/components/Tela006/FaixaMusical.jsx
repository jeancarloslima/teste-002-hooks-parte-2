import { memo } from "react";

function FaixaMusical ({ nomeDaMusica, onFavoritar}) {
    return (
        <div>
            <h2>{nomeDaMusica}</h2>
            <button onClick={onFavoritar}>Favoritar</button>
        </div>
    )
}

export default memo(FaixaMusical);