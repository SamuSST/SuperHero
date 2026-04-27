import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function Detalle() {
  const { id } = useParams();
  const [hero, setHero] = useState<any>(null);

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => res.json())
      .then(data => {
        const encontrado = data.find((h: any) => h.id == id);
        setHero(encontrado || null);
      })
      .catch(() => setHero(null));
  }, [id]);

  if (!hero) {
    return <p className="loading">Cargando o no encontrado</p>;
  }

  return (
    <div className="detalle">
      <img src={hero.images?.lg} className="img" />

      <h1>{hero.name}</h1>

      <div className="info">
        <p><strong>Nombre:</strong> {hero.biography?.fullName}</p>
        <p><strong>Alineación:</strong> {hero.biography?.alignment}</p>
        <p><strong>Género:</strong> {hero.appearance?.gender}</p>
        <p><strong>Raza:</strong> {hero.appearance?.race}</p>
        <p><strong>Editorial:</strong> {hero.biography?.publisher}</p>
      </div>

      <div className="stats">
        <h3>Estadísticas</h3>
        <p>Inteligencia: {hero.powerstats?.intelligence}</p>
        <p>Fuerza: {hero.powerstats?.strength}</p>
        <p>Velocidad: {hero.powerstats?.speed}</p>
        <p>Durabilidad: {hero.powerstats?.durability}</p>
        <p>Poder: {hero.powerstats?.power}</p>
        <p>Combate: {hero.powerstats?.combat}</p>
      </div>
    </div>
  );
}

export default Detalle;