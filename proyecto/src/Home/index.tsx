import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [heroes, setHeroes] = useState<any[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");
  const navigate = useNavigate();

  const TOKEN = "TU_TOKEN";
  const URL = `https://www.superheroapi.com/api.php/${TOKEN}/search/batman`;

  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(d => {
        if (d.results) setHeroes(d.results);
      });
  }, []);

  const filtrados = heroes.filter(h =>
    h.name.toLowerCase().includes(busqueda.toLowerCase()) &&
    (filtro === "" || h.biography.alignment === filtro)
  );

  const agregarFavorito = (hero: any) => {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    localStorage.setItem("favs", JSON.stringify([...favs, hero]));
  };

  return (
    <div>
      <h1>Superheroes</h1>

      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <select onChange={(e) => setFiltro(e.target.value)}>
        <option value="">Todos</option>
        <option value="good">Buenos</option>
        <option value="bad">Malos</option>
      </select>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filtrados.map(hero => (
          <div
            key={hero.id}
            style={{
              border: "1px solid #ccc",
              margin: 10,
              padding: 10,
              width: 150
            }}
          >
            <img src={hero.image.url} width="100%" />
            <h4>{hero.name}</h4>

            <button onClick={() => agregarFavorito(hero)}>
              Favorito
            </button>

            <button onClick={() => navigate(`/detalle/${hero.id}`)}>
              Ver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;