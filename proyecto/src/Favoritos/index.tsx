import { useEffect, useState } from "react";

function Favoritos() {
  const [favs, setFavs] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavs(data);
  }, []);

  const eliminar = (id: string) => {
    const nuevos = favs.filter(f => f.id !== id);
    setFavs(nuevos);
    localStorage.setItem("favs", JSON.stringify(nuevos));
  };

  return (
    <div>
      <h1>Favoritos</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favs.map(hero => (
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

            <button onClick={() => eliminar(hero.id)}>
              Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;