// ::: libraries
//

import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery (
    $currentWeather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m, relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_deph,windgusts_10m,uv_index,uv_index_clear_sky
    $latitude: String!
    $longitude: String!
    $timezone: String!
    ){
    myQuery(
      current_weather: $currentWeather
      daily: $daily
      hourly:  $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: "$timezone
    ) {
      utc_offset_seconds
      timezone_abbreviation
      timezone
      longitude
      latitude
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      hourly {
        apparent_temperature
        precipitation_probability
        precipitation
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      generationtime_ms
      elevation
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_min
        temperature_2m_max
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily {
        apparent_temperature_max
        sunrise
        apparent_temperature_min
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      current_weather {
        temperature
        weathercode
        time
        is_day
        winddirection
        windspeed
      }
    }
  }
`;

export default fetchWeatherQuery;