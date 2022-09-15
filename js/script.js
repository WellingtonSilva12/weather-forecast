import { showWeatherData } from './fnShowWeatherData.js'

const cityInput = document.querySelector('.city-input')
const formSubmit = document.querySelector('form')

formSubmit.addEventListener('submit', e => {
  e.preventDefault()

  const city = cityInput.value

  showWeatherData(city)
})
