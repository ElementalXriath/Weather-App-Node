



const weatherForm = document.querySelector('#form');
const search = document.querySelector('#search');
const forecastMess = document.querySelector('#forecast');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    forecastMess.textContent = 'Loading'

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (!data) {
            console.log('error')
        } else {
            forecastMess.textContent = data.location
        }
        
       })
    })
})



