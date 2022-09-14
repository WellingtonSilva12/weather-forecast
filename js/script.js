const apiKey = 'baf7fd7941d2f65bd24b48d66b46c856'
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?'

const cityInput = document.querySelector('.city-input')
const formSubmit = document.querySelector('form')

const cityElement = document.querySelector('.city')
const tempElement = document.querySelector('.temperature span')
const descElement = document.querySelector('.description')
const weatherIconElement = document.querySelector('.weather-icon')
const countryElement = document.querySelector('.country')
const humidityElement = document.querySelector('.humidity span')
const windElement = document.querySelector('.wind span')

const weatherContainer = document.querySelector('.weather-data')

const messageError = document.querySelector('.info-txt')

const getWeatherData = async city => {
  const apiWeather = `${apiURL}q=${city}&units=metric&&appid=${apiKey}&lang=pt_br`

  const res = await fetch(apiWeather)
  const data = await res.json()

  return data
}

const showWeatherData = async city => {
  const data = await getWeatherData(city)
  console.log(data)

  if (data.cod === '404') {
    messageError.innerText = 'Nome Inválido'
    messageError.classList.add('show')
    weatherContainer.classList.add('hide')
  } else {
    messageError.classList.remove('show')

    let country = data.sys.country
    for (i in countryList) {
      if (i == country) {
        country = countryList[i]
      }
      console.log(country)
    }

    const { id } = data.weather[0]

    if (id == 800) {
      weatherIconElement.src = 'assets/icons/clear.svg'
    } else if (id >= 200 && id <= 232) {
      weatherIconElement.src = 'assets/icons/storm.svg'
    } else if (id >= 600 && id <= 622) {
      weatherIconElement.src = 'assets/icons/snow.svg'
    } else if (id >= 701 && id <= 781) {
      weatherIconElement.src = 'assets/icons/haze.svg'
    } else if (id >= 801 && id <= 804) {
      weatherIconElement.src = 'assets/icons/cloud.svg'
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      weatherIconElement.src = 'assets/icons/rain.svg'
    }

    cityElement.innerText = `${data.name}, ${country}`
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed} km/h`

    weatherContainer.classList.remove('hide')
  }
}

formSubmit.addEventListener('submit', e => {
  e.preventDefault()

  const city = cityInput.value

  showWeatherData(city)
})
