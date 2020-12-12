Vue.component('rutamibus',{
    template:
    `
    <div>    
    <h2> Ruta del dia {{hoy}} </h2>
    <img src="https://image.freepik.com/free-vector/autonomous-vehicle-isometric-flowchart_1284-25474.jpg" alt="" height="360" width="140">
    <h3>Anuncios parroquiales</h3>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis incidunt doloribus culpa nesciunt repudiandae! Maxime, corrupti quisquam quos pariatur velit, quas autem, laborum consectetur a veniam quidem labore. Dicta! </p>
    </div>
    `,
    data(){
        return {
            hoy: 'Martes',
        }
    }

    

}

);

let titulo = 'up';
let my_key =  "6c43a029";
let my_url = `http://www.omdbapi.com/?apikey=${my_key}&t=${my_key}`



const app = new Vue({
    el: '#app',
    data: {
      saludo: 'Hola Vue',
      mensaje: ' Personas en el bus: ',
      contador: 0,
      hoy: 'Martes',
      lista: ['Hola', 1, {nombre: 'Julian'} ]
    },
    methods:{
        verificarSalida(){
            if(this.contador >= 1)
            {
                this.contador--;
            }
            else
            {
                alert("El bus está vacío.")
            }
        }, 

        funcion2()
        {
            return 0;
        }

    }
  })



