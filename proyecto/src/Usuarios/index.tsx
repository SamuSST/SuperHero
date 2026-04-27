import React from 'react';
import './styles.css';

function Usuarios() {
  const datos = {
    nombre: "Alex",
    edad: "21",
    comicFavorito: "Spider-Man: Blue",
    universo: "Marvel",
    poderDeseado: "Volar",
    rango: "Legendario"
  };

  return (
    <div className="perfil-section">
      <h1 className="perfil-title">Mi Perfil</h1>

      <div className="perfil-card">
        <div className="perfil-icon">U</div>
        
        <div className="perfil-textBox">
          <p className="perfil-text perfil-head">{datos.nombre}</p>
          <span className="perfil-span">{datos.rango}</span>
          
          <div className="perfil-info-grid">
            <div className="perfil-info-item">
              <p className="perfil-label">Edad</p>
              <p className="perfil-val">{datos.edad}</p>
            </div>
            <div className="perfil-info-item">
              <p className="perfil-label">Comic Favorito</p>
              <p className="perfil-val">{datos.comicFavorito}</p>
            </div>
            <div className="perfil-info-item">
              <p className="perfil-label">Universo</p>
              <p className="perfil-val">{datos.universo}</p>
            </div>
            <div className="perfil-info-item">
              <p className="perfil-label">Poder</p>
              <p className="perfil-val">{datos.poderDeseado}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;