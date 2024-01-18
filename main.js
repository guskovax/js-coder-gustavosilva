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

function mostrarCartelera() {
    let opcionCorrecta = false;
    do{
        let opcionPelicula = parseInt(prompt("Elija una película:\n1 - Aquaman 2\n2 - Cuando acecha la maldad\n3 - Elijo creer\n4 - Wonka"));
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
    }while (!opcionCorrecta);
}

function mostrarPrecios() {
    let opcionCorrecta = false;
    do {
    let elegirPrecios = parseInt(prompt("Elije el tipo de entrada: \n1 - Sala 2D: $900 \n2 - Sala 3D: $1500"));
    
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
    let elegirCantidad = parseInt(prompt("Cuantas entradas querés?"))
    if (!isNaN(elegirCantidad) && elegirCantidad >0){
        cantidadDeEntradas = elegirCantidad;
    }else {
        alert ("Elegir una cantidad correcta.")
        mostrarCantidad();
    }
}

mostrarCartelera();
mostrarPrecios();
mostrarCantidad();

precioTotal = precioElegido*cantidadDeEntradas;

alert("Su pelicula elegida: " + peliculaElegida + "\nTipo de entrada: " + tipoDeFuncion + "\nPrecio total: $" + precioTotal);
