import { useEffect, useState } from "react";
import "./styles.css";

function Original() {
  const [heroes, setHeroes] = useState<any[]>([]);
  const [busqueda1, setBusqueda1] = useState("");
  const [busqueda2, setBusqueda2] = useState("");
  const [h1, setH1] = useState<any>(null);
  const [h2, setH2] = useState<any>(null);

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => res.json())
      .then(data => setHeroes(data));
  }, []);

  const filtrados1 = heroes.filter(h =>
    h.name.toLowerCase().includes(busqueda1.toLowerCase())
  );

  const filtrados2 = heroes.filter(h =>
    h.name.toLowerCase().includes(busqueda2.toLowerCase())
  );

  return (
    <div className="original">
      <h1>Comparar Héroes</h1>

      <div className="buscadores">

        {/* BUSCADOR 1 */}
        {!h1 && (
          <div>
            <input
              type="text"
              placeholder="Buscar héroe 1"
              onChange={(e) => setBusqueda1(e.target.value)}
            />

            <div className="lista">
              {filtrados1.slice(0, 5).map(hero => (
                <div
                  key={hero.id}
                  className="card-original"
                  onClick={() => setH1(hero)}
                >
                  <img src={hero.images.sm} />
                  <p>{hero.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BUSCADOR 2 */}
        {!h2 && (
          <div>
            <input
              type="text"
              placeholder="Buscar héroe 2"
              onChange={(e) => setBusqueda2(e.target.value)}
            />

            <div className="lista">
              {filtrados2.slice(0, 5).map(hero => (
                <div
                  key={hero.id}
                  className="card-original"
                  onClick={() => setH2(hero)}
                >
                  <img src={hero.images.sm} />
                  <p>{hero.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* COMPARACIÓN */}
      {h1 && h2 && (
        <div className="comparacion">
          <div className="card-original">
            <h3>{h1.name}</h3>
            <img src={h1.images.md} />
            <p>Fuerza: {h1.powerstats.strength}</p>
            <p>Velocidad: {h1.powerstats.speed}</p>
            <p>Poder: {h1.powerstats.power}</p>
          </div>

          <div className="card-original">
            <h3>{h2.name}</h3>
            <img src={h2.images.md} />
            <p>Fuerza: {h2.powerstats.strength}</p>
            <p>Velocidad: {h2.powerstats.speed}</p>
            <p>Poder: {h2.powerstats.power}</p>
          </div>
        </div>
      )}

      {/* BOTÓN RESET */}
      {(h1 || h2) && (
        <button className="reset" onClick={() => {
          setH1(null);
          setH2(null);
          setBusqueda1("");
          setBusqueda2("");
        }}>
          Reiniciar
        </button>
      )}
    </div>
  );
}

export default Original;