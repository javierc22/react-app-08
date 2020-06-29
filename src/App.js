import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

  // State de la App
  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {
    const consultarAPI = async () => {
      if(busqueda === '') return;

      const imagenesPorPagina = 30;
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_page=${imagenesPorPagina}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarBusqueda(resultado.hits);
    }

    consultarAPI();
  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
