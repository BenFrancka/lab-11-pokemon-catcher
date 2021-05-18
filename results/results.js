import { mungeCaught, mungeNames, mungeColors, mungeType, mungeSeen } from '../data-utils.js';
import { getPokedex } from '../local-storage-utils.js';

var ctx = document.getElementById('caught-chart').getContext('2d');

//getPokedex for data, declare variables with munge functions to populate chart with
const pokeDex = getPokedex();
const names = mungeNames(pokeDex);
const caught = mungeCaught(pokeDex);
const colors = mungeColors(pokeDex);
const type = mungeType(pokeDex);
const seen = mungeSeen(pokeDex);

//Caught Pokemon Chart
var caughtChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: names,
        datasets: [{
            label: 'Times Caught',
            data: caught,
            backgroundColor: colors,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5
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

var ctx = document.getElementById('seen-chart').getContext('2d');

//encountered pokemon types
var seenChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: type,
        datasets: [{
            label: 'Types Encountered',
            data: seen,
            backgroundColor: colors,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5
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