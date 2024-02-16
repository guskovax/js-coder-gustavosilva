const entradas = [
  {
    tipo: "2D",
    precio: 900
  },
  {
    tipo: "3D",
    precio: 1500
  }
];

let peliculaSeleccionada = '';

//Se cargan las peliculas
const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a9273a252b00978112454d7a24a32d3c&language=es-MX&total_results=8');

    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = '';
      datos.results.forEach(pelicula => {
        peliculas += `
          <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
            <p class="titulo">${pelicula.title}</p>
          </div>
        `;
      });

      document.getElementById('cartelera').innerHTML = peliculas;

    } else if (respuesta.status === 401) {
      console.log('Error en la key');
    } else {
      console.log('Se encontró un error');
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();

//Seleccionar pelicula
document.addEventListener('click', (evento) => {
  const peliculaElegida = evento.target.closest('.pelicula');
  if (peliculaElegida) {
    document.querySelectorAll('.pelicula').forEach(pelicula => {
      pelicula.classList.remove('elegida');
    });
    peliculaElegida.classList.add('elegida');

    peliculaSeleccionada = peliculaElegida.querySelector('.titulo').textContent;
    console.log('Película seleccionada:', peliculaSeleccionada);
  }
});

//Valor de entradas a comprar
const tickets = document.getElementById('tickets');

entradas.forEach(entrada => {
  tickets.innerHTML +=
    `<option value="${entrada.precio}">${entrada.tipo} - $${entrada.precio}</option>`;
});

const valorEntrada = document.getElementById('tickets');
const cantidadElegida = document.getElementById('cantidad');
const btnCompra = document.getElementById('btn-compra');

//Comprar
btnCompra.addEventListener('click', (evento) => {

  evento.preventDefault();

  if (!peliculaSeleccionada) {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

  const compra = {
    pelicula: peliculaSeleccionada,
    valor: valorEntrada.value,
    cantidad: cantidadElegida.value
  };

  const texto = JSON.stringify(compra);
  localStorage.setItem('compra', texto);

  const modal = document.querySelector('.modal-body');
  modal.innerHTML = `
    <p>Tu película es: ${compra.pelicula}</p>
    <p>Entradas: ${compra.cantidad} x $${compra.valor}</p>
    <p>Total de tu compra: $${compra.cantidad * compra.valor}</p>
  `;

  console.log(compra);
});
