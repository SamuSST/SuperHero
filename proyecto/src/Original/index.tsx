import { useEffect, useState } from "react";

function Original() {
  const [heroes, setHeroes] = useState<any[]>([]);
  const [h1, setH1] = useState<any>(null);
  const [h2, setH2] = useState<any>(null);

  const TOKEN = "TU_TOKEN";
  const URL = `https://www.superheroapi.com/api.php/${TOKEN}/search/man`;

  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(d => {
        if (d.results) setHeroes(d.results);
      });
  }, []);

  const elegirHeroe = (id: string, slot: number) => {
    const hero = heroes.find(h => h.id === id);
    if (slot === 1) setH1(hero);
    else setH2(hero);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Comparar</h1>

      <div>
        <select onChange={(e) => elegirHeroe(e.target.value, 1)}>
          <option>Seleccionar Heroe 1</option>
          {heroes.map(h => (
            <option key={h.id} value={h.id}>
              {h.name}
            </option>
          ))}
        </select>

        <select onChange={(e) => elegirHeroe(e.target.value, 2)}>
          <option>Seleccionar Heroe 2</option>
          {heroes.map(h => (
            <option key={h.id} value={h.id}>
              {h.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {h1 && (
          <div>
            <h3>{h1.name}</h3>
            <img src={h1.image.url} width="150" />
            <p>Inteligencia: {h1.powerstats.intelligence}</p>
            <p>Fuerza: {h1.powerstats.strength}</p>
            <p>Velocidad: {h1.powerstats.speed}</p>
            <p>Poder: {h1.powerstats.power}</p>
          </div>
        )}

        {h2 && (
          <div>
            <h3>{h2.name}</h3>
            <img src={h2.image.url} width="150" />
            <p>Inteligencia: {h2.powerstats.intelligence}</p>
            <p>Fuerza: {h2.powerstats.strength}</p>
            <p>Velocidad: {h2.powerstats.speed}</p>
            <p>Poder: {h2.powerstats.power}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Original;