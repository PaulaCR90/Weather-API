import React from 'react'
import WeatherFive from '../components/WeatherFive/WeatherFive'

const NextDays = () => {
  return (
    <div
      className="app"
      style={
        tabletOrLess
          ? {
              backgroundImage: `url("./assets/backgrounds/01d-portrait.jpg")`,
            }
          : {
              backgroundImage: `url("./assets/backgrounds/01d-landscape.jpg")`,
            }
      }
    >
      <WeatherFive />
      </div>
  )
}

export default NextDays