import { series } from './data.js';
var seriesTable = document.getElementById("series-table-body");
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var totalTemporadas = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><span class=\"link-like\" style=\"cursor: pointer;\">").concat(serie.nombre, "</span></td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>\n        ");
        seriesTbody.appendChild(trElement);
        totalTemporadas += serie.temporadas;
    });
    var promedioTemporadas = totalTemporadas / series.length;
    var trPromedio = document.createElement("tr");
    trPromedio.innerHTML = "        \n        <td colspan=\"3\" style=\"text-align:left;\">Promedio de Temporadas: ".concat(promedioTemporadas, "</td>");
    seriesTbody.appendChild(trPromedio);
    seriesTable.appendChild(seriesTbody);
}
mostrarSeries(series);
