/* Declaracion de la funcion que al darle click al boton de busqueda recupera el texto de busqueda
* params: none
* return: N/A
*/
const traerTextoBusqueda = () => {
    const botonBuscar = document.getElementById('botonBuscar');
    botonBuscar.addEventListener('click', (evento) => {
        //Funcion del evento
        const textoBuscar = document.getElementById('textoBuscar');
        valorTextoBuscar = textoBuscar.value;
        llamadaAPI(valorTextoBuscar);
    } )
}

const llamadaAPI = async (valorTextoBuscar) => {

    const resultadoLlamada = await fetch('http://www.omdbapi.com/?apikey=23daade9&t=' + valorTextoBuscar);
    const resultadoJson = await resultadoLlamada.json();

    if (contenedorRespuesta.style.display==="")
    {
        contenedorRespuesta.style.display="block";
    }

    if (resultadoJson['Response'] == "True")
    {
        const titulo = resultadoJson['Title'];
        const anho = resultadoJson['Year'];
        const sinopsis = resultadoJson['Plot'];
        const url_imagen = resultadoJson['Poster'];

        document.getElementById('imgRespuesta').src = url_imagen;
        document.getElementById('titloRespuesta').innerHTML = titulo;
        document.getElementById('anhoRespuesta').innerHTML = anho;
        document.getElementById('parrafoRespuesta').innerHTML = sinopsis;

        contenedorRespuesta = document.getElementById('contenedorRespuesta');


    } else {
        document.getElementById('imgRespuesta').src = 'https://image.freepik.com/free-vector/flat-404-error-template_23-2147745006.jpg';
        document.getElementById('titloRespuesta').innerHTML = "Pelicula no encontrada";
        document.getElementById('anhoRespuesta').innerHTML = 404;
        document.getElementById('parrafoRespuesta').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse suscipit blanditiis, ipsum similique eligendi illo quos adipisci vitae voluptas aperiam iusto autem eveniet, neque consequuntur dolore voluptate aspernatur at!" ;
        
        alert("Pelicula no encontrada!")
    }
    
}


// http://www.omdbapi.com/?apikey=23daade9&t={NOMBRE A BUSCAR}



traerTextoBusqueda();