import { Serie } from "./serie.js";
import { series } from "./data.js";

// Path: main.ts
const seriesTable: HTMLElement = document.getElementById('series')!;
const seriesAverage: HTMLElement = document.getElementById('average')!;

function renderSeries(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th>${serie.id}</th>
                              <td>${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTable.appendChild(trElement);
      });
    
}

function renderAvarage(series: Serie[]): void {
    let average = calculateAvarage(series);
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
                           <td>${average}</td>`;
    seriesAverage.appendChild(trElement);


}

function calculateAvarage(series: Serie[]): number {
    let seasons: number = 0;
    for (let serie of series) {
        seasons += serie.seasons;
    }
    return seasons / series.length;
}

renderSeries(series);
renderAvarage(series);
