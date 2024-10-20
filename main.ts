import { series } from './data.js';
import { Serie } from './serie.js';

let seriesTable: HTMLElement = document.getElementById("series-table-body")!;

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

    mostrarSeries(series);

