import { mungeCaught, mungeNames } from '../data-utils.js';
import { getPokedex } from '../local-storage-utils.js';

var ctx = document.getElementById('caught-chart').getContext('2d');

//getPokedex for data, declare variables with munge functions to populate chart with
const pokeDex = getPokedex();
const names = mungeNames(pokeDex);
const caught = mungeCaught(pokeDex);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Times Caught',
            data: caught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});