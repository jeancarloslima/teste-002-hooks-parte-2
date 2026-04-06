import { useCallback, useState } from "react";
import FaixaMusical from "./FaixaMusical";

export default function Tela006() {
    const [volume, setVolume] = useState(50);

    const favoritarMusica = useCallback(() => {
        console.log("Música adicionada aos favoritos");
    }, []);
    return (
        <div>
            <h3>{volume}</h3>

            <button onClick={() => setVolume(v => v + 10)}>Aumentar volume</button>

            <FaixaMusical nomeDaMusica={"Feeling Good - Nina Simone"} onFavoritar={favoritarMusica} />
            <FaixaMusical nomeDaMusica={"Hunter of Stars - Sebalter"} onFavoritar={favoritarMusica} />
        </div>
    )
}