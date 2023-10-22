import { series } from "./data.js";
// Path: main.ts
var seriesTable = document.getElementById('series');
var seriesAverage = document.getElementById('average');
function renderSeries(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th>".concat(serie.id, "</th>\n                              <td>").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTable.appendChild(trElement);
    });
}
function renderAvarage(series) {
    var average = calculateAvarage(series);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "\n                           <td>".concat(average, "</td>");
    seriesAverage.appendChild(trElement);
}
function calculateAvarage(series) {
    var seasons = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        seasons += serie.seasons;
    }
    return seasons / series.length;
}
renderSeries(series);
renderAvarage(series);
