import { series } from "./data.js";
let seriesTable = document.getElementById('series');
let seriesAverage = document.getElementById('average');
let tablaDatos = document.getElementById("tabla-datos");
let containerCard = document.getElementById("container-card");
let serieDetailsCard = null; // Nueva tarjeta para detalles de serie
tablaDatos.addEventListener("click", function (event) {
    const activeElement = event.target;
    if (activeElement.tagName == "TD") {
        const fila = activeElement.parentElement;
        const id = fila.cells[0].textContent;
        if (id !== null) {
            const serieId = parseInt(id);
            const selectedSerie = series.find((serie) => serie.id === serieId);
            if (selectedSerie) {
                mostrarSerie(selectedSerie);
            }
        }
    }
});
function mostrarSerie(selectedSerie) {
    if (serieDetailsCard) {
        serieDetailsCard.remove(); // Elimina la tarjeta anterior si existe
    }
    serieDetailsCard = document.createElement("div");
    serieDetailsCard.className = "card";
    serieDetailsCard.style.top = "5px";
    serieDetailsCard.style.left = "400px";
    serieDetailsCard.style.width = "18rem";
    serieDetailsCard.innerHTML = `<img class="card-img-top" src="${selectedSerie.image}" alt="image">
        <div class="card-body">
            <h5 class="card-title" style="font-weight: bold;">${selectedSerie.name}</h5>
            <p class="card-text">${selectedSerie.description}</p>
            <p class="card-text">Channel: ${selectedSerie.channel}</p>
            <p class="card-text">Seasons: ${selectedSerie.seasons}</p>
            <a href="${selectedSerie.link}" class="btn btn-primary" target="_blank">Learn more</a>
        </div>
    `;
    containerCard.innerHTML = ""; // Limpia el contenedor de tarjeta
    containerCard.appendChild(serieDetailsCard);
}
function renderSeries(series) {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th>${serie.id}</th>
                              <td style="color:#0000FF">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTable.appendChild(trElement);
    });
}
function renderAvarage(series) {
    let average = calculateAvarage(series);
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
                           <td>${average}</td>`;
    seriesAverage.appendChild(trElement);
}
function calculateAvarage(series) {
    let seasons = 0;
    for (let serie of series) {
        seasons += serie.seasons;
    }
    return seasons / series.length;
}
function renderCard(series) {
}
renderSeries(series);
renderAvarage(series);
