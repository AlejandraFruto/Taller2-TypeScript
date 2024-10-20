import { series } from './data.js';
var seriesTable = document.getElementById("series-table-body");
var detailsContainer = document.getElementById("details-container");
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var totalTemporadas = 0; // Variable para acumular las temporadas
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><span class=\"link-like\" style=\"cursor: pointer;\">").concat(serie.nombre, "</span></td> <!-- Nombre con estilo de enlace -->\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>\n        ");
        // Agregar evento de clic para mostrar detalles
        trElement.onclick = function () { return mostrarDetalles(serie); };
        seriesTbody.appendChild(trElement);
        totalTemporadas += serie.temporadas;
    });
    var promedioTemporadas = totalTemporadas / series.length;
    // Crear una fila para el promedio
    var trPromedio = document.createElement("tr");
    trPromedio.innerHTML = "        \n        <td colspan=\"3\" style=\"text-align:left;\">Promedio de Temporadas: ".concat(promedioTemporadas, "</td>");
    seriesTbody.appendChild(trPromedio);
    // Agregar el tbody con las series y el promedio a la tabla
    seriesTable.appendChild(seriesTbody);
}
// Función para mostrar los detalles de la serie
function mostrarDetalles(serie) {
    detailsContainer.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n           <img src=\"".concat(serie.imagen, "\" class=\"card-img-top\" alt=\"").concat(serie.nombre, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n                <p class=\"card-text\">").concat(serie.sinopsis, "</p>\n                <p><a href=\"").concat(serie.pagina, "\" target=\"_blank\">").concat(serie.pagina, "</a></p> <!-- Enlace como texto -->\n            </div>\n        </div>\n    ");
}
// Llamar a la función para mostrar todas las series al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    mostrarSeries(series);
});
