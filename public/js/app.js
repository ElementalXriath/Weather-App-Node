



const weatherForm = document.querySelector('#form');
const search = document.querySelector('#search');
const timeMess = document.querySelector('#time');
const f_temp = document.querySelector('#f-temp');
const f_location = document.querySelector('#f_location');
const f_humidity = document.querySelector('#f-humidity');
const f_summary = document.querySelector('#summary');



var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    timeMess.textContent = 'Loading'
    f_temp.textContent = 'Loading'
    f_humidity.textContent = 'Loading'

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (!data) {
            console.log('error')
        } else {
            f_location.textContent = data.location 
            timeMess.textContent =  dateTime
            f_temp.textContent = data.forecast.currentTemp + ' F '
            f_humidity.textContent = data.forecast.currentHumidity + ' % '
            f_summary.textContent = ' Summary : ' + data.forecast.currentSummary
        }
        
       })
    })
})



