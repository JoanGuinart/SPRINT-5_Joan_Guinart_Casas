
const nextJokeButton = document.getElementById('nextJoke');
const apiData = document.getElementById('jokeData')
const weather = document.getElementById('weather')
let reportAcudits = []
const date = new Date().toISOString();
console.log(reportAcudits)

const callAPI = () => {
    fetch('https://icanhazdadjoke.com/',{
        headers: {
        Accept: 'application/json',
        },
    })
    .then(res => res.json() )
    .then(data => {
        apiData.innerHTML = JSON.stringify(data.joke)
    })
    .catch(e => console.error(new Error(e)));
}

nextJokeButton.addEventListener('click', callAPI);

function score(id){
    reportAcudits.push({
        joke: apiData.innerHTML,
        score: id,
        date: date,
    })
}
const weatherAPI = () => {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=ed0592a3ab79355af43304d41d90bf38&units=metric&lang=es'
            )
    .then(response => response.json())
    .then(data => {
        weather.innerHTML = JSON.stringify(data.main)
    })
}
weatherAPI()