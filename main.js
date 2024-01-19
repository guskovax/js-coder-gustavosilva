const peliculas = [
    {
        nombre: "Aquaman 2",
        genero: "Accion",
        estreno: 2023
    },
    {
        nombre: "Cuando acecha la maldad",
        genero: "Terror",
        estreno: 2023
    },
    {
        nombre: "Elijo creer",
        genero: "Documental",
        estreno: 2023
    },
    {
        nombre: "Wonka",
        genero: "Fantasia",
        estreno: 2023
    }
];

const precio2d = 900;
const precio3d = 1500;

let peliculaElegida;
let precioElegido;
let tipoDeFuncion;
let cantidadDeEntradas;
let precioTotal;
let cancelarCompra = false;

function mostrarCartelera() {
    if (cancelarCompra) return;
    let opcionCorrecta = false;
    let opcionPelicula = null;

    do {
        opcionPelicula = prompt("Elija una película:\n1 - Aquaman 2\n2 - Cuando acecha la maldad\n3 - Elijo creer\n4 - Wonka");

        if (opcionPelicula === null) {
            alert("Has cancelado la elección. Saliendo del proceso de compra.");
            cancelarCompra = true;
            return;
        }

        opcionPelicula = parseInt(opcionPelicula);

        switch (opcionPelicula) {
            case 1:
                peliculaElegida = peliculas[0].nombre;
                opcionCorrecta = true;
                break;
            case 2:
                peliculaElegida = peliculas[1].nombre;
                opcionCorrecta = true;
                break;
            case 3:
                peliculaElegida = peliculas[2].nombre;
                opcionCorrecta = true;
                break;
            case 4:
                peliculaElegida = peliculas[3].nombre;
                opcionCorrecta = true;
                break;
            default:
                alert("Opción inválida.");
                opcionCorrecta = false;
                break;
        }
    } while (!opcionCorrecta);
}

function mostrarPrecios() {
    if (cancelarCompra) return;
    let opcionCorrecta = false;
    do {
    let elegirPrecios = parseInt(prompt("Elije el tipo de entrada: \n1 - Sala 2D: $900 \n2 - Sala 3D: $1500"));
    
    if (elegirPrecios === null) {
        alert("Has cancelado la elección. Saliendo del proceso de compra.");
        cancelarCompra = true;
        return;
    }

        switch (elegirPrecios) {
            case 1:
                precioElegido = precio2d;
                tipoDeFuncion = "Entrada 2D"
                opcionCorrecta = true;
                break;
            case 2:
                precioElegido = precio3d;
                tipoDeFuncion = "Entrada 3D";
                opcionCorrecta = true;
                break;
            default:
                alert("Elije el tipo de entrada correcta.")
                opcionCorrecta = false;
                break;

        }
    }while (!opcionCorrecta);
}

function mostrarCantidad() {
    if (cancelarCompra) return;
    let opcionCorrecta = false;

    do {
        let elegirCantidad = prompt("Cuantas entradas querés?");

        if (elegirCantidad === null) {
        alert("Has cancelado la elección. Saliendo del proceso de compra.");
        cancelarCompra = true;
        return;
        }

        elegirCantidad = parseInt(elegirCantidad);

        if (!isNaN(elegirCantidad) && elegirCantidad > 0) {
        cantidadDeEntradas = elegirCantidad;
        opcionCorrecta = true;
    } else {
        alert("Elegir una cantidad correcta.");
        }
    } while (!opcionCorrecta);
}

document.addEventListener("DOMContentLoaded", function () {
    let botonCompra = document.getElementById("btn-compra");

    botonCompra.addEventListener("click", function () {
    mostrarCartelera();
    mostrarPrecios();
    mostrarCantidad();

    if (!cancelarCompra) {

        precioTotal = precioElegido * cantidadDeEntradas;
        alert("Su pelicula elegida: " + peliculaElegida + "\nTipo de entrada: " + tipoDeFuncion + "\nPrecio total: $" + precioTotal);
        }
    });
    });
