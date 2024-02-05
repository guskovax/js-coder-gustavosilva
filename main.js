const peliculas = [
  {
      nombre: "Aquaman 2",
      poster: "./img/Aquaman2.jpg",
      genero: "Accion",
      estreno: 2023
  },
  {
      nombre: "Cuando acecha la maldad",
      poster: "./img/CuandoAcecha.jpg",
      genero: "Terror",
      estreno: 2023
  },
  {
      nombre: "Elijo creer",
      poster: "./img/ElijoCreer.jpg",
      genero: "Documental",
      estreno: 2023
  },
  {
      nombre: "Wonka",
      poster: "./img/Wonka.webp",
      genero: "Fantasia",
      estreno: 2023
  }
];

const entradas = [
  {
    tipo: "2D",
    precio: 900
  },
  {
    tipo: "3D",
    precio: 1500
  }
]

//Creo las peliculas en la cartelera
const cartelera = document.getElementById('cartelera');

peliculas.forEach(pelicula => {
  cartelera.innerHTML +=
  `<div class="pelicula">
      <img src="${pelicula.poster}" alt=${pelicula.nombre}>
      <p>${pelicula.nombre}</p>
  </div>`
});


// El usuario selecciona la película
const peliculasDisponibles = document.querySelectorAll('.pelicula');
let peliculaSeleccionada;

peliculasDisponibles[0].classList.add('elegida');
peliculaSeleccionada = peliculasDisponibles[0].querySelector('p').textContent;

peliculasDisponibles.forEach(disponible => {
  disponible.addEventListener('click', function() {
    
    const peliculaElegidaAnterior = document.querySelector('.elegida');
    if (peliculaElegidaAnterior) {
      peliculaElegidaAnterior.classList.remove('elegida');
    }
    
    this.classList.add('elegida');
    
    peliculaSeleccionada = this.querySelector('p').textContent;

    console.log('Película seleccionada:', peliculaSeleccionada);
  });
});


//Valor de entradas a comprar
const tickets = document.getElementById('tickets');

entradas.forEach(entrada => {
  tickets.innerHTML +=
  `<option value="${entrada.precio}">${entrada.tipo} - $${entrada.precio}</option>`
});

const valorEntrada = document.getElementById('tickets');

const cantidadElegida = document.getElementById('cantidad');

const btnCompra = document.getElementById('btn-compra');


btnCompra.addEventListener('click', (evento) =>{
  evento.preventDefault();

  const compra = {
    pelicula: peliculaSeleccionada,
    valor: valorEntrada.value,
    cantidad: cantidadElegida.value
  }
  const texto = JSON.stringify(compra)
  localStorage.setItem('compra', texto)


  const modal = document.querySelector('.modal-body');
  modal.innerHTML =
  `<p>Tu pelicula es: ${compra.pelicula}</p>
  <p>Entradas: ${compra.cantidad} x $${compra.valor}</p>
  <p>Total de tu compra: $${compra.cantidad * compra.valor}</p>
  `

  console.log(compra)
})
