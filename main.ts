import { series } from './data.js';
import { Serie } from './serie.js';

let seriesTable: HTMLElement = document.getElementById("series-table-body")!;
let detailsContainer: HTMLElement = document.getElementById("details-container")!;

function mostrarSeries(series: Serie[]): void {
    let seriesTbody: HTMLElement = document.createElement("tbody");
    let totalTemporadas = 0; 

    series.forEach(serie => {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td><span class="link-like" style="cursor: pointer;">${serie.nombre}</span></td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
        `;
        
        trElement.onclick = () => mostrarDetalles(serie);
        
        seriesTbody.appendChild(trElement);
        
        totalTemporadas += serie.temporadas;
    });

    const promedioTemporadas = totalTemporadas / series.length;

   
    let trPromedio: HTMLElement = document.createElement("tr");
    trPromedio.innerHTML = `        
        <td colspan="3" style="text-align:left;">Promedio de Temporadas: ${promedioTemporadas}</td>`;
    seriesTbody.appendChild(trPromedio);

    seriesTable.appendChild(seriesTbody);
}


function mostrarDetalles(serie: Serie): void {
    detailsContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
           <img src="${serie.imagen}" class="card-img-top" alt="${serie.nombre}">
            <div class="card-body">
                <h5 class="card-title">${serie.nombre}</h5>
                <p class="card-text">${serie.sinopsis}</p>
                <p><a href="${serie.pagina}" target="_blank">${serie.pagina}</a></p> <!-- Enlace como texto -->
            </div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarSeries(series);
});
