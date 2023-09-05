const peliculas = [
    {
        titulo: "El lobo de Wall Street",
        descripcion: "La historia del corredor de bolsa neoyorquino Jordan Belfort, quien, con poco más de veinte años, <div> fue apodado 'el lobo de Wall Street' por su enorme éxito y fortuna como fundador <div> de la agencia bursátil Stratton Oakmont."
    },
    {
        titulo: "American Psycho",
        descripcion: "En la década de 1980, Patrick Bateman es un hombre exitoso y obsesionado por la competencia y por la perfección material, <div> quien utiliza los más caros cosméticos masculinos, equipos de gimnasia, <div> solárium y demás maquinaria estética para lograr un cuerpo atlético y bien acicalado, identificador material del éxito social."
    },
    {
        titulo: "The Batman",
        descripcion: "En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham <div> y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como 'el Acertijo'."
    },
    {
        titulo: "Joker",
        descripcion: "Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. <div> El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, <div> finalmente, cae en el mundo del crimen."
    },
    {
        titulo: "Barbie",
        descripcion: "Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, <div> Barbie parte hacia el mundo humano para encontrar la verdadera felicidad."
    }
];

function buscarPelicula() {
    const consulta = document.getElementById('busqueda').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');

    const peliculaEncontrada = peliculas.find(pelicula => pelicula.titulo.toLowerCase() === consulta);

    if (peliculaEncontrada) {
        resultadoDiv.innerHTML = `
            <h2>${peliculaEncontrada.titulo}</h2>
            <p>${peliculaEncontrada.descripcion}</p>
        `;
    } else {
        resultadoDiv.textContent = 'Prueba con otro nombre';
    }
}

document.getElementById('buscar').addEventListener('click', buscarPelicula);