import React, { useState } from 'react'

const api = {
  key: 'baf7fd7941d2f65bd24b48d66b46c856',
  base: 'api.openweathermap.org/data/2.5/'
}

const Home = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = e => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => setWeather(result))
    }
  }

  const dateBuilder = d => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="container">
      <main>
        <div className="search-box">
          <input className="search-bar" type="text" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Timon, MA</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15° C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  )
}

export default Home
