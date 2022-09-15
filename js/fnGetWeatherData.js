const apiKey = 'baf7fd7941d2f65bd24b48d66b46c856'
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?'

export const getWeatherData = async city => {
  const apiWeather = `${apiURL}q=${city}&units=metric&&appid=${apiKey}&lang=pt_br`

  const res = await fetch(apiWeather)
  const data = await res.json()

  return data
}
