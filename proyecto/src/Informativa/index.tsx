function Info() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Informacion</h1>

      <div style={{ marginTop: 20 }}>
        <h2>API</h2>
        <p>
          Esta aplicacion usa una API de superheroes para obtener informacion
          como nombre, imagen, alineacion y otros datos.
        </p>
      </div>

      <div style={{ marginTop: 20 }}>
        <h2>Funciones</h2>
        <ul>
          <li>Buscar superheroes</li>
          <li>Filtrar por alineacion</li>
          <li>Ver detalle</li>
          <li>Guardar favoritos</li>
        </ul>
      </div>

      <div style={{ marginTop: 20 }}>
        <h2>Uso</h2>
        <p>
          Puedes navegar por las pestañas para explorar los superheroes,
          guardar tus favoritos y ver informacion adicional.
        </p>
      </div>

      <div
        style={{
          marginTop: 20,
          padding: 15,
          border: "1px solid #ccc",
          borderRadius: 10
        }}
      >
        <h3>San Agustin</h3>
        <p>
          San Agustin es un municipio de Colombia reconocido por su parque
          arqueologico y esculturas de piedra.
        </p>
      </div>
    </div>
  );
}

export default Info;