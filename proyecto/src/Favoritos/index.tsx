import { useEffect, useState } from "react";
import "./styles.css";

function Favoritos() {
  const [favs, setFavs] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavs(data);
  }, []);

  const eliminar = (id: number) => {
    const nuevos = favs.filter(h => h.id !== id);
    setFavs(nuevos);
    localStorage.setItem("favs", JSON.stringify(nuevos));
  };

  return (
    <div className="favoritos">
      <h1>Favoritos</h1>

      <div className="grid">
        {favs.map(hero => (
          <div key={hero.id} className="card">
            <img src={hero.images.sm} />

            <h4>{hero.name}</h4>

            <button
              className="btn-fav active"
              onClick={() => eliminar(hero.id)}
            >
              <svg viewBox="0 0 24 24">
                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;