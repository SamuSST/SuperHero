import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Home() {
  const [heroes, setHeroes] = useState<any[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");
  const navigate = useNavigate();

  const URL = "https://akabab.github.io/superhero-api/api/all.json";

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setHeroes(data));
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
    <div className="home">
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

      <div className="grid">
        {filtrados.slice(0, 30).map(hero => (
          <div key={hero.id} className="card">
            <img src={hero.images.sm} />

            <h4>{hero.name}</h4>

            <div className="actions">
              <button
                className="btn-fav"
                onClick={() => agregarFavorito(hero)}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                </svg>
              </button>

              <button onClick={() => navigate(`/detalle/${hero.id}`)}>
                Ver
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;