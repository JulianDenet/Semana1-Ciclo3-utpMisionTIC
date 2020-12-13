const app = new Vue({
    el: '#app',
    data: {
        encabezadoPagina: 'Busqueda de peliculas',
        textoAgregar: '',
        listaReproduccion: []
        //almacenamiento
    },
    methods:{
        async agregarElementoListaReproduccion(){
            let resultado = await fetch('http://www.omdbapi.com/?apikey=aedb8efa&t=' + this.textoAgregar);
            let resultadoJSON = await resultado.json();
            // Verificar si se encontro un resultado real
            if(resultadoJSON["Response"]=="True")
            {
                // Agregar la pelicula a la lista de reproduccion
                this.listaReproduccion.push(
                    {
                        titulo: resultadoJSON['Title'],
                        anho: resultadoJSON['Year'],
                        liked: false,
                    }
                )

                localStorage.setItem('almacenamiento', JSON.stringify(this.listaReproduccion) );

            } else {
                alert('No se encontraron coincidencias!')
            }
            this.textoAgregar = '';
        },
        marcarLike(posicion){
            this.listaReproduccion[posicion].liked = this.listaReproduccion[posicion].liked ? false : true;
            localStorage.setItem('almacenamiento', JSON.stringify(this.listaReproduccion) );
        },
        eliminarDeLaLista(posicion){
            this.listaReproduccion.splice(posicion, 1);
            localStorage.setItem('almacenamiento', JSON.stringify(this.listaReproduccion) );
        },
        
    },
    created(){
        let datosAlmacenados = JSON.parse(localStorage.getItem('almacenamiento'));
        if (datosAlmacenados == null)
        {
            this.listaReproduccion = [];
        } else {
            this.listaReproduccion = datosAlmacenados;
        }
    }
   
}
)