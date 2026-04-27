import React from 'react';
import './styles.css';

function Info() {
  return (
    <div className="info-app-container">
      <h1 className="info-app-title">Información del Proyecto</h1>

      <div className="info-app-grid">
        {/* Tarjeta de la API */}
        <div className="info-app-card">
          <div className="info-app-icon">📡</div>
          <div className="info-app-textBox">
            <p className="info-app-text info-app-head">API</p>
            <span className="info-app-span">SuperHero API</span>
            <p className="info-app-text info-app-description">
              Esta aplicación usa una API de superhéroes para obtener información
              como nombre, imagen, alineación y otros datos en tiempo real, sobre todos los superheroes y super villanos.
            </p>
          </div>
        </div>

        {/* Tarjeta de Funciones */}
        <div className="info-app-card">
          <div className="info-app-icon">⚡</div>
          <div className="info-app-textBox">
            <p className="info-app-text info-app-head">Funciones</p>
            <ul className="info-app-list">
              <li>Buscar superhéroes</li>
              <li>Filtrar por alineación</li>
              <li>Ver detalle de poderes</li>
              <li>Guardar favoritos</li>
              <li>Comparar personajes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;