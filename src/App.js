import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.Brastlewark);
      console.log(noticias)
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
        <Header 
          titulo='Image Finder'
        />

        <div className="container white">
            <Formulario 
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;
