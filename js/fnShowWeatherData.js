import { getWeatherData } from './fnGetWeatherData.js'
import { countryList } from './country-list.js'
import { elementApiWeather } from './element-weather.js'

const weatherContainer = document.querySelector('.weather-data')
const messageError = document.querySelector('.info-txt')

export const showWeatherData = async city => {
  const data = await getWeatherData(city)
  console.log(data)

  if (data.cod === '404') {
    messageError.innerText = 'Nome Inválido'
    messageError.classList.add('show')
    weatherContainer.classList.add('hide')
  } else {
    messageError.classList.remove('show')

    let country = data.sys.country

    for (let i in countryList) {
      if (i == country) {
        country = countryList[i]
      }
      console.log(country)
    }

    const { id } = data.weather[0]

    if (id == 800) {
      elementApiWeather.weatherIconElement.src = 'assets/icons/clear.svg'
    } else if (id >= 200 && id <= 232) {
      elementApiWeather.weatherIconElement.src = 'assets/icons/storm.svg'
    } else if (id >= 600 && id <= 622) {
      elementApiWeather.weatherIconElement.src = 'assets/icons/snow.svg'
    } else if (id >= 701 && id <= 781) {
      elementApiWeather.weatherIconElement.src = 'assets/icons/haze.svg'
    } else if (id >= 801 && id <= 804) {
      elementApiWeather.weatherIconElement.src = 'assets/icons/cloud.svg'
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      elementApiWeather.weatherIconElement.src = 'assets/icons/rain.svg'
    }

    elementApiWeather.cityElement.innerText = `${data.name}, ${country}`
    elementApiWeather.tempElement.innerText = parseInt(data.main.temp)
    elementApiWeather.descElement.innerText = data.weather[0].description
    elementApiWeather.humidityElement.innerText = `${data.main.humidity}%`
    elementApiWeather.windElement.innerText = `${data.wind.speed} km/h`

    weatherContainer.classList.remove('hide')
  }
}
