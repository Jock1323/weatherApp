let elForm=document.querySelector('.form');
let elInput=document.querySelector('.input');
let cityName=document.querySelector('.city');
let countryName=document.querySelector('.country-name');
let tempResult=document.querySelector('.temp-result');
let windResult=document.querySelector('.wind-result');
let weatherDesc=document.querySelector('.weather-desc');
let inputValue;

const fullData=(location)=>{
   
const request=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
.then(response=>response.json())
.then(data=>{
    renderWeather(data);
});
}
elForm.addEventListener('submit',e=>{
    e.preventDefault();
    inputValue=elInput.value.toLowerCase()
    fullData(inputValue);
})

renderWeather=(data)=>{
    if(inputValue===data.name.toLowerCase()){
        cityName.textContent=data.name;
        countryName.textContent=data.sys.country;
        tempResult.textContent=data.main.temp;
        windResult.textContent=data.wind.speed+" "+"m/s"
        weatherDesc.textContent=data.weather[0].description;
    }
    else{
        console.log('error');
    }
    elInput.value=""
}
